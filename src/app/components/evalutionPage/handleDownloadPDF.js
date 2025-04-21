import { toast } from "react-hot-toast";

const handleDownloadPDF = async (selector, filename = "document.pdf") => {
  const html2pdf = await import("html2pdf.js");
  const element = document.querySelector(selector);

  if (!element) {
    console.error("Element not found for selector:", selector);
    toast.error("Element not found for PDF generation");
    return;
  }

  // Optional: Hide page hint elements before PDF render
  const pageHints = document.querySelectorAll(".page-hint");
  pageHints.forEach((el) => (el.style.display = "none"));

  const originalDisplay = element.style.display;
  element.style.display = "block";

  // Fix: Apply inline styles to dropdowns for proper alignment
  const dropdowns = element.querySelectorAll("select, option");
  dropdowns.forEach((dropdown) => {
    dropdown.style.textAlign = "center"; // Horizontally center-align text
    dropdown.style.verticalAlign = "middle"; // Vertically center-align text
  });

  const options = {
    margin: [0.2, 0.2, 0.2, 0.2],
    filename: filename,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: {
      scale: 2,
      scrollY: -window.scrollY,
      useCORS: true,
      allowTaint: true,
      logging: true,
    },
    jsPDF: { unit: "in", format: [9, 12], orientation: "portrait" },
  };

  const downloadPromise = new Promise((resolve, reject) => {
    html2pdf.default()
      .set(options)
      .from(element)
      .toPdf()
      .get("pdf")
      .then((pdf) => {
        const totalPages = pdf.internal.getNumberOfPages();
        const pageHeight = pdf.internal.pageSize.getHeight();

        for (let i = 1; i <= totalPages; i++) {
          pdf.setPage(i);
          pdf.setFontSize(10);
          pdf.setTextColor(128);
          pdf.text(`Page ${i} of ${totalPages}`, pdf.internal.pageSize.getWidth() / 2, pageHeight - 0.5, {
            align: "center",
          });
        }
      })
      .save()
      .then(() => resolve("PDF downloaded successfully"))
      .catch((error) => {
        reject("Error generating PDF");
        console.error("Error generating PDF:", error);
      })
      .finally(() => {
        element.style.display = originalDisplay;
        pageHints.forEach((el) => (el.style.display = "block")); // Restore if hidden

        // Restore original styles for dropdowns
        dropdowns.forEach((dropdown) => {
          dropdown.style.textAlign = "";
          dropdown.style.verticalAlign = "";
        });
      });
  });

  toast.promise(downloadPromise, {
    loading: "Generating PDF...",
    success: "PDF downloaded successfully!",
    error: "Error generating PDF.",
  });
};

export default handleDownloadPDF;