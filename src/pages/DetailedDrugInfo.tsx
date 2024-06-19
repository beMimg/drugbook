import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailedDrugInfo } from "../api/getDetailedDrugInfo";
import { Box, List, ListItem } from "@mui/material";
import TextBox from "../components/DetailedDrugInfo/TextBox";
import { transformDrugData } from "../utils/transformDrugData";

const DetailedDrugInfo = () => {
  // Let's make sure our drug info is an array so we can dynamicly map through it.
  const [drugInfo, setDrugInfo] = useState<Array<any> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
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

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      {drugInfo &&
        drugInfo.map((item: any) =>
          item.value[0].key ? (
            <TextBox
              title={item.key}
              description={item.value.map((innerItem: any) => (
                <List component="ul">
                  <ListItem component="li">
                    <span style={{ fontWeight: "600" }}>{innerItem.key}:</span>{" "}
                    {innerItem.value}
                  </ListItem>
                </List>
              ))}
            />
          ) : (
            <TextBox title={item.key} description={item.value[0]} />
          )
        )}
    </Box>
  );
};

export default DetailedDrugInfo;

{
}
