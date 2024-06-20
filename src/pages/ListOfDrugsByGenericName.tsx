import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getListOfDrugsByGenericName } from "../api/getListOfDrugsByGenericName";
import {
  Box,
  Pagination,
  PaginationItem,
  Skeleton,
  Typography,
} from "@mui/material";
import DrugListTable from "../components/ListOfDrugs/DrugListTable";
import GoBackButton from "../components/DetailedDrugInfo/GoBackButton";

const ListOfDrugsByGenericName = () => {
  const [errors, setErrors] = useState(false);
  const [drugListByGenericName, setDrugListByGenericName] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState<number>();
  const { genericName } = useParams();

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);

  useEffect(() => {
    const getDrugListByGenericName = async () => {
      try {
        setLoading(true);
        if (typeof genericName === "string") {
          const list = await getListOfDrugsByGenericName(genericName, page);
          setDrugListByGenericName(list.list);
          setTotalPages(list.totalPages);
          setCount(list.count);
        }
      } catch (err) {
        setErrors(true);
      } finally {
        setLoading(false);
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
      <Typography>
        {loading ? (
          <Skeleton width={300} />
        ) : (
          `Total of ${count} searches conducted across various manufacturers.`
        )}
      </Typography>
      <Pagination
        page={page}
        count={totalPages}
        size="small"
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`/list/${genericName}${
              item.page === 1 ? "" : `?page=${item.page}`
            }`}
            {...item}
          />
        )}
      />
      <DrugListTable
        drugListByGenericName={drugListByGenericName}
        loading={loading}
      />
    </Box>
  );
};

export default ListOfDrugsByGenericName;
