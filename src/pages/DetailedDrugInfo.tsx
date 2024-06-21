import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailedDrugInfo } from "../api/getDetailedDrugInfo";
import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import { transformDrugData } from "../utils/transformDrugData";
import GoBackButton from "../components/DetailedDrugInfo/GoBackButton";
import Error from "../components/Errors/Error";

const DetailedDrugInfo = () => {
  // Let's make sure our drug info is an array so we can dynamicly map through it.
  const [drugInfo, setDrugInfo] = useState<Array<any> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(Boolean);
  const { id } = useParams();

  useEffect(() => {
    const getDrugInfo = async () => {
      try {
        if (id) {
          setLoading(true);
          const response = await getDetailedDrugInfo(id);
          if (response?.status === 200) {
            // Data recieved i structured in a object, we want it to be an array so we can use .map() and avoid hard coding.
            const data = response.data.results[0];
            // Check transformDrugData for explanation.
            const drugArray = transformDrugData(data);
            setDrugInfo(drugArray);
            setError(false);
          } else {
            setError(true);
          }
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getDrugInfo();
  }, [id]);

  if (loading) {
    return <CircularProgress sx={{ display: "grid", alignSelf: "center" }} />;
  }

  if (error) {
    return <Error />;
  }
  // Comments bellow component
  return (
    drugInfo && (
      <Box display={"flex"} flexDirection={"column"} gap={8}>
        <GoBackButton />
        {drugInfo.map((item: any) =>
          typeof item.value === "string" ||
          (Array.isArray(item.value) && item.value.length === 1) ? (
            <Box
              component={Paper}
              p={2}
              display={"flex"}
              flexDirection={"column"}
              gap={2}
            >
              <Typography variant="h6" color={"text.primary"}>
                {item.key}
              </Typography>
              <Typography
                color={"text.secondary"}
                sx={{ wordBreak: "break-word" }}
              >
                {item.value}
              </Typography>
            </Box>
          ) : (
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={4}
              component={Paper}
              p={2}
            >
              <Typography variant="h6" color={"text.primary"}>
                {item.key}
              </Typography>
              {item.value.map((innerValue: any) => (
                <Box>
                  <Typography fontWeight={"600"} color={"text.primary"}>
                    {innerValue.key}
                  </Typography>
                  {Array.isArray(innerValue.value) &&
                    innerValue.value.map((innerInnerValue: any) => (
                      <Typography
                        sx={{ wordBreak: "break-word" }}
                        color={"text.secondary"}
                      >
                        - {innerInnerValue}
                      </Typography>
                    ))}
                </Box>
              ))}
            </Box>
          )
        )}
      </Box>
    )
  );
};

/*
  The drugInfo array is iterated over, and for each item, it checks if the value is either
  a string or an array with a single element. If true, it renders a single Paper component
  with the item key and value. Otherwise, it assumes the value is an array with multiple
  elements and renders nested structures.
 
 - `drugInfo`: An array of objects containing drug information.
 - `item.key`: The title of the drug information section.
 - `item.value`: The content of the drug information section, which can be a string, a single-element array, or a nested array of objects.
 
  For each item:
  - If the value is a string or a single-element array, it renders a Paper component
 containing the key and value in Typography components, with word breaking applied to the value.
  - If the value is an array with multiple elements, it renders the key in a Typography component and
 iterates over the array, rendering nested Typography components for each element.
  */

export default DetailedDrugInfo;
