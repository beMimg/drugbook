import { Autocomplete, TextField } from "@mui/material";
import { useState, useCallback } from "react";
import { searchDrug } from "../api/searchDrugs";
import debounce from "lodash/debounce";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const fetchSuggestions = async (value: string) => {
    if (value.length > 0) {
      const drugs = await searchDrug(value);
      const genericNames = drugs.map(
        (drug: any) => drug.openfda.generic_name[0]
      );
      setSuggestions(genericNames);
    } else {
      setSuggestions([]);
    }
  };

  const debouncedFetchSuggestions = useCallback(
    debounce(fetchSuggestions, 300),
    []
  );

  const handleInputChange = (event: any, value: string) => {
    setInputValue(value);
    debouncedFetchSuggestions(value);
  };

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={suggestions}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Drug" />}
    />
  );
};

export default SearchBar;
