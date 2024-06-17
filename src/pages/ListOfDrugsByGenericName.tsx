import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getListOfDrugsByGenericName } from "../api/getListOfDrugsByGenericName";
import { Box, Typography } from "@mui/material";

const ListOfDrugsByGenericName = () => {
  const [errors, setErrors] = useState(false);
  const [drugListByGenericName, setDrugListByGenericName] = useState([]);
  const { genericName } = useParams();
  const location = useLocation();

  const getPageNumber = () => {
    const searchParams = new URLSearchParams(location.search);
    const page = searchParams.get("page");
    return page ? parseInt(page) : 1; // parse the string to number and default to page 1 if not provided
  };

  const pageAsInteger = getPageNumber();

  useEffect(() => {
    const getDrugListByGenericName = async () => {
      try {
        if (typeof genericName === "string") {
          const list = await getListOfDrugsByGenericName(
            genericName,
            pageAsInteger
          );
          setDrugListByGenericName(list);
        }
      } catch (err) {
        setErrors(true);
      }
    };
    getDrugListByGenericName();
    //name and page as dependency
  }, [genericName, pageAsInteger]);

  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Typography>{pageAsInteger}</Typography>
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
