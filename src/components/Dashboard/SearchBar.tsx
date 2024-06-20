import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { useState, useCallback } from "react";
import { searchDrug } from "../../api/searchDrugs";
import debounce from "lodash/debounce";
import { useNavigate } from "react-router-dom";

interface Drug {
  term: string;
}

const SearchBar = () => {
  const [options, setOptions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  // Used to nagivate thro routers, since we can't directly use Link in the Autocomplete component.
  const navigate = useNavigate();

  // value as a string because the input of autocomplete will always be a string.
  const fetchOptions = async (value: string) => {
    // Reduce fetching by requiring more than one character.
    try {
      if (value.length > 1) {
        setLoading(true);
        const drugsData = await searchDrug(value);
        // lets map through the drugs data, only if it exists .
        if (drugsData) {
          const genericNameData = drugsData.map((drug: Drug) => drug.term); // get the generic name on proprety term, must be a STRING.
          setOptions(genericNameData);
        }
      }
    } catch (err) {
    } finally {
      setLoading(false);
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
      sx={{ width: "80%" }}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
      loadingText="Loading..."
    />
  );
};

export default SearchBar;
