import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDrugDetails } from "../api/getDrugDetails";
import { Box, Typography } from "@mui/material";

const ListOfDrugsByGenericName = () => {
  const [errors, setErrors] = useState(false);
  const [drugListByGenericName, setDrugListByGenericName] = useState([]);
  const { genericName, page } = useParams();

  // :page from URL is a string, we need to parse that to a number.
  const pageAsInteger = parseInt(page!);

  useEffect(() => {
    const getDrugListByGenericName = async () => {
      try {
        if (typeof genericName === "string") {
          const list = await getDrugDetails(genericName, pageAsInteger);
          setDrugListByGenericName(list);
        }
      } catch (err) {
        setErrors(true);
      }
    };
    getDrugListByGenericName();
    //name and page as dependency
  }, [genericName, page]);

  console.log(drugListByGenericName);
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Typography>{page}</Typography>
      {drugListByGenericName.map((drug: any) => (
        <Box display={"flex"} gap={3} flexDirection={"row"}>
          <Typography fontWeight={"900"}>
            {drug.openfda.generic_name[0]}
          </Typography>
          <p>{drug.openfda.brand_name[0]}</p>
          <p>{drug.openfda.manufacturer_name[0]}</p>
        </Box>
      ))}
    </Box>
  );
};

export default ListOfDrugsByGenericName;
