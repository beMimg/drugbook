import { Autocomplete, TextField } from "@mui/material";
import { useState, useCallback } from "react";
import { searchDrug } from "../../api/searchDrugs";
import debounce from "lodash/debounce";
import { useNavigate } from "react-router-dom";

interface Drug {
  term: string;
}

const SearchBar = () => {
  const [options, setOptions] = useState<string[]>([]);

  // Used to nagivate thro routers, since we can't directly use Link in the Autocomplete component.
  const navigate = useNavigate();

  // value as a string because the input of autocomplete will always be a string.
  const fetchOptions = async (value: string) => {
    // Reduce fetching by requiring more than one character.
    if (value.length > 1) {
      const drugsData = await searchDrug(value);
      // lets map through the drugs data, only if it exists .
      if (drugsData) {
        const genericNameData = drugsData.map((drug: Drug) => drug.term); // get the generic name on proprety term, must be a STRING.
        setOptions(genericNameData);
      }
    } else {
      setOptions([]);
    }
  };

  // Debounce for fetching, reducing API calls.
  const debounceFetchOptions = useCallback(debounce(fetchOptions, 300), []);

  // When one of the options is selected calls this function.
  const handleOptionChange = (event: any, value: string | null) => {
    if (value) {
      // Use the value (Selected Option), to create a path to the route.
      const path = `/list/${value}?page=1`;
      navigate(path);
    }
  };

  // When the input is changed call this function.
  const handleInputChange = (event: any) => {
    const { value } = event.target;
    debounceFetchOptions(value); // Debounce for fetching, reducing API calls.
  };

  return (
    <Autocomplete
      options={options}
      onChange={handleOptionChange}
      onInputChange={handleInputChange}
      sx={{ width: "300px" }}
      renderInput={(params) => (
        <TextField {...params} label="Search" variant="outlined" />
      )}
    />
  );
};

export default SearchBar;
