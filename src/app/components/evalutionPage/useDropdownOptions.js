import { useState, useEffect } from "react";

const useDropdownOptions = () => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const defaultOptions = ["Select", "Poor", "Fair", "Good", "Very Good", "Excellent"];
    setOptions(defaultOptions);
  }, []);

  return options;
};

export default useDropdownOptions;
