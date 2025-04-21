'use client';
import {
  Container, TextField, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Select, MenuItem, Button
} from "@mui/material";
import useInfo from "./useInfo";
import useDropdownOptions from "./useDropdownOptions";
import React, { useEffect, useState } from "react";
import handleDownloadPDF from "./handleDownloadPDF";

export default function InfoSection() {
  const [loading, setLoading] = useState(true);
  const infoSections = useInfo();
  const dropdownOptions = useDropdownOptions();

  useEffect(() => {
    if (infoSections.length > 0) {
      setLoading(false);
    }
  }, [infoSections]);

  if (loading) return <p>Loading...</p>;

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        mt: 2, // LESS TOP MARGIN
        mb: 4,
        width: "100%",
        padding: 0,
        borderRadius: 0,
      }}
    >
      <TableContainer
        component={Paper}
        sx={{ border: "2px solid black", width: "100%", borderRadius: 0 }}
        id="pdf-content"
      >
        <Table sx={{ borderCollapse: "collapse" }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#e9ecef", borderBottom: "2px solid black" }}>
              <TableCell sx={{ fontWeight: "bold", width: "25%", borderRight: "2px solid black", verticalAlign: "top" }}>Section</TableCell>
              <TableCell sx={{ fontWeight: "bold", width: "50%", borderRight: "2px solid black", verticalAlign: "top" }}>Details</TableCell>
              <TableCell sx={{ fontWeight: "bold", width: "25%", verticalAlign: "top" }}>Comments/Notes</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {infoSections.map((section, sectionIndex) => (
              <React.Fragment key={sectionIndex}>
                {section.category === "Employee Information" && (
                  <TableRow sx={{ borderTop: "2px solid black" }}>
                    <TableCell sx={{ fontWeight: "bold", borderRight: "2px solid black", verticalAlign: "top" }}>
                      {section.category}
                    </TableCell>
                    <TableCell sx={{ borderRight: "2px solid black" }}>
                      {section.fields.map((field, index) => (
                        <div key={index} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "8px" }}>
                          <b>{field.label}:</b>
                          <TextField
                            size="small"
                            variant="standard"
                            sx={{ flex: 1, verticalAlign: "top" }}
                            className="pdf-input-field"
                          />
                        </div>
                      ))}
                    </TableCell>
                    <TableCell sx={{ borderBottom: "1px solid gray", verticalAlign: "top" }}>
                      <TextField
                        multiline
                        rows={4}
                        fullWidth
                        variant="outlined"
                        sx={{ verticalAlign: "top" }}
                        className="pdf-input-field"
                      />
                    </TableCell>
                  </TableRow>
                )}

                {section.category === "Performance Evaluation Scale" &&
                  section.ratings.map((rating, index) => (
                    <TableRow key={index} sx={{ borderTop: index === 0 ? "2px solid black" : "none" }}>
                      {index === 0 && (
                        <TableCell
                          rowSpan={section.ratings.length}
                          sx={{
                            fontWeight: "bold",
                            borderRight: "2px solid black",
                            verticalAlign: "top",
                          }}
                        >
                          {section.category}
                        </TableCell>
                      )}
                      <TableCell
                        sx={{
                          borderRight: "2px solid black",
                          paddingTop: index === 0 ? "18px" : "0px",
                          marginTop: index === 0 ? "10px" : "0px",
                          verticalAlign: "top",
                          borderBottom: "none",
                        }}
                      >
                        {rating}
                      </TableCell>
                    </TableRow>
                  ))}

                {section.descriptions && Object.values(section.descriptions).flat().map((descRow, index) => (
                  <TableRow key={index} sx={{ borderTop: index === 0 ? "2px solid black" : "none" }}>
                    {index === 0 && (
                      <TableCell
                        rowSpan={Object.values(section.descriptions).flat().length}
                        sx={{ fontWeight: "bold", borderRight: "2px solid black", verticalAlign: "top" }}
                      >
                        {section.category}
                      </TableCell>
                    )}
                    <TableCell
                      sx={{
                        borderRight: "2px solid black",
                        borderBottom: "1px solid gray",
                        verticalAlign: "top",
                      }}
                    >
                      {descRow.text}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderBottom: "1px solid gray",
                        verticalAlign: "top",
                      }}
                    >
                      {descRow.type === "text" ? (
                        <TextField
                          multiline
                          rows={1}
                          fullWidth
                          variant="outlined"
                          sx={{ verticalAlign: "top" }}
                          className="pdf-input-field"
                        />
                      ) : (
                        <Select
                          fullWidth
                          defaultValue=""
                          displayEmpty
                          sx={{
                            height: "36px",
                            padding: "0 8px",
                            width: "90%",
                            fontSize: "13px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            textAlign: "center",
                            '& .MuiSelect-select': {
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              padding: 0,
                            },
                          }}
                          className="pdf-select-field"
                        >
                          <MenuItem value="" disabled>
                            {/* Placeholder removed intentionally */}
                          </MenuItem>
                          {dropdownOptions.map((option, i) => (
                            <MenuItem
                              key={i}
                              value={option}
                              sx={{ fontSize: "13px", textAlign: "center" }}
                            >
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button
        variant="contained"
        onClick={() => handleDownloadPDF("#pdf-content", "Info_Document.pdf")}
        sx={{
          alignSelf: "flex-end",
          width: "auto",
          padding: "10px 24px",
          borderRadius: "8px",
          textTransform: "none",
          fontWeight: "bold",
          fontSize: "14px",
          color: "#fff",
          backgroundColor: "#2e7d32",
          boxShadow: "0 4px 12px rgba(46, 125, 50, 0.4)",
          transition: "all 0.3s ease-in-out",
          '&:hover': {
            backgroundColor: "#1b5e20",
            boxShadow: "0 6px 16px rgba(27, 94, 32, 0.5)",
          },
        }}
      >
        Download PDF
      </Button>
    </Container>
  );
}
