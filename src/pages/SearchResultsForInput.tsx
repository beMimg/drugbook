import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { searchDrug } from "../api/searchDrugs";
import { Box, CircularProgress, Typography } from "@mui/material";

interface Drug {
  openfda: {
    generic_name: string;
    spl_id: string;
  };
}

const SearchResultsForInput = () => {
  const [options, setOptions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { input } = useParams();

  useEffect(() => {
    const getFullData = async () => {
      try {
        if (typeof input === "string") {
          setLoading(true);
          const drugsData = await searchDrug(input, 100);
          if (drugsData) {
            setOptions(drugsData);
          } else {
            setOptions([]);
          }
        }
      } catch (err) {
      } finally {
        setLoading(false);
      }
    };
    getFullData();
  }, []);

  if (loading) {
    return <CircularProgress sx={{ display: "grid", alignSelf: "center" }} />;
  }

  return (
    <Box>
      {options.length > 0 && (
        <>
          <Typography variant="h6" marginBottom={5}>
            Top 100 seach results for '{input}'.
          </Typography>
          <Box display={"flex"} flexDirection={"column"} gap={4}>
            {options.map((option) => (
              <Typography key={option.term}>
                <Link
                  to={`/list/${option.term}`}
                  style={{ wordBreak: "break-word" }}
                >
                  {option.term}
                </Link>
              </Typography>
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default SearchResultsForInput;
