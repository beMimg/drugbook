import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { useState, useEffect, useMemo } from "react";
import { searchDrug } from "../../api/searchDrugs";
import debounce from "lodash/debounce";
import { useNavigate } from "react-router-dom";

interface Drug {
  term: string;
}

const SearchBar = () => {
  const [options, setOptions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(Boolean);
  const navigate = useNavigate();
  const fetchLimit = 20;

  const fetchOptions = async (value: string) => {
    try {
      if (value.length > 1) {
        setLoading(true);
        setError(false);
        const drugsData = await searchDrug(value, fetchLimit);
        if (drugsData) {
          const genericNameData = drugsData.map((drug: Drug) => drug.term);
          setOptions(genericNameData);
        } else {
          setOptions([]);
        }
      } else {
        // if input value is < 1 remove options
        setOptions([]);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  // Create a debounced version of fetchOptions
  const debounceFetchOptions = useMemo(() => debounce(fetchOptions, 300), []);

  useEffect(() => {
    // Cleanup the debounced function on component unmount
    return () => {
      debounceFetchOptions.cancel();
    };
  }, [debounceFetchOptions]);

  // value can be an option IF the limit of options (20) was reached.
  const handleOptionChange = (event: any, value: string) => {
    if (value && value === `See all searches starting with ${inputValue}`) {
      // if its a custom option used to see all options that start with the input value
      const path = `/bbb`;
      navigate(path);
    } else {
      // if its a fetched option
      const path = `/list/${value}?page=1`;
      navigate(path);
    }
  };

  const handleInputChange = (event: any, value: string) => {
    setInputValue(value);
    debounceFetchOptions(value);
  };

  const customOptions = [...options]; // Create a copy of options array

  /* If the options length === 20, lets add a new option to the end of the array,
  This option will be responsible to navigate to a different route and fetch without limits. */
  if (options.length === fetchLimit) {
    customOptions.push(`See all searches starting with ${inputValue}`);
  }

  return (
    <Autocomplete
      options={customOptions}
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
          error={error} // Use boolean error state directly
          helperText={error ? "Failed to fetch options" : ""}
        />
      )}
      loadingText="Loading..."
    />
  );
};

export default SearchBar;
