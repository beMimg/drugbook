import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getListOfDrugsByGenericName } from "../api/getListOfDrugsByGenericName";
import { Box, Pagination, PaginationItem, Typography } from "@mui/material";

const ListOfDrugsByGenericName = () => {
  const [errors, setErrors] = useState(false);
  const [drugListByGenericName, setDrugListByGenericName] = useState([]);
  const { genericName } = useParams();

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);

  useEffect(() => {
    const getDrugListByGenericName = async () => {
      try {
        if (typeof genericName === "string") {
          const list = await getListOfDrugsByGenericName(genericName, page);
          setDrugListByGenericName(list);
        }
      } catch (err) {
        setErrors(true);
      }
    };
    getDrugListByGenericName();
    //name and page as dependency
  }, [genericName, page]);

  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Pagination
        page={page}
        count={10}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`/drug/${genericName}${
              item.page === 1 ? "" : `?page=${item.page}`
            }`}
            {...item}
          />
        )}
      />
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
