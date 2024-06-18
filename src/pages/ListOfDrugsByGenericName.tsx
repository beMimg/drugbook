import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getListOfDrugsByGenericName } from "../api/getListOfDrugsByGenericName";
import { Box, Pagination, PaginationItem } from "@mui/material";
import DrugListTable from "../components/ListOfDrugs/DrugListTable";

const ListOfDrugsByGenericName = () => {
  const [errors, setErrors] = useState(false);
  const [drugListByGenericName, setDrugListByGenericName] = useState([]);
  const [totalPages, setTotalPages] = useState<number>();
  const { genericName } = useParams();

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);

  useEffect(() => {
    const getDrugListByGenericName = async () => {
      try {
        if (typeof genericName === "string") {
          const list = await getListOfDrugsByGenericName(genericName, page);
          setDrugListByGenericName(list.list);
          setTotalPages(list.totalPages);
        }
      } catch (err) {
        setErrors(true);
      }
    };
    getDrugListByGenericName();
    //name and page as dependency
  }, [genericName, page]);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"start"}
      alignItems={"center"}
      flexGrow={1}
      gap={3}
    >
      <Pagination
        page={page}
        count={totalPages}
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
      <DrugListTable drugListByGenericName={drugListByGenericName} />
    </Box>
  );
};

export default ListOfDrugsByGenericName;
