import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailedDrugInfo } from "../api/getDetailedDrugInfo";
import { Box } from "@mui/material";
import TextBox from "../components/DetailedDrugInfo/TextBox";
import Sidebar from "../components/DetailedDrugInfo/Sidebar";
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
    <Box display={"flex"} flexDirection={"row"}>
      <Sidebar />
      <Box>
        {drugInfo &&
          drugInfo.map((item: any) =>
            item.value[0].key ? (
              <TextBox
                title={item.key}
                description={item.value.map((item2: any) => (
                  <TextBox title={item2.key} description={item2.value} />
                ))}
              />
            ) : (
              <TextBox title={item.key} description={item.value[0]} />
            )
          )}
      </Box>
    </Box>
  );
};

export default DetailedDrugInfo;

{
}
