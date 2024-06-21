import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { useState, useEffect, useMemo } from "react";
import { searchDrug } from "../../api/searchDrugs";
import debounce from "lodash/debounce";
import { useNavigate } from "react-router-dom";

interface Drug {
  term: string;
}

const SearchBar = () => {
  const [options, setOptions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(Boolean);
  const navigate = useNavigate();

  const fetchOptions = async (value: string) => {
    try {
      if (value.length > 1) {
        setLoading(true);
        setError(false);
        const drugsData = await searchDrug(value);
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

  const handleOptionChange = (event: any, value: string | null) => {
    if (value) {
      const path = `/list/${value}?page=1`;
      navigate(path);
    }
  };

  const handleInputChange = (event: any, value: string) => {
    debounceFetchOptions(value);
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
          error={error} // Use boolean error state directly
          helperText={error ? "Failed to fetch options" : ""}
        />
      )}
      loadingText="Loading..."
    />
  );
};

export default SearchBar;
