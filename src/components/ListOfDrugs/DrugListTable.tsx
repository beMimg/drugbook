import {
  Box,
  Link,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Drug {
  openfda: {
    spl_id: string[];
    generic_name: string[];
    brand_name: string[];
    manufacturer_name: string[];
    application_number: string[];
  };
  children: Element[];
}

interface DrugListByGenericNameProp {
  drugListByGenericName: Drug[];
  loading: boolean;
}

const DrugListTable = ({
  drugListByGenericName,
  loading,
}: DrugListByGenericNameProp) => {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    const path = `/information/${id}`;
    navigate(path);
  };

  console.log(loading);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Generic Name</TableCell>
            <TableCell align="right">Brand</TableCell>
            <TableCell align="right">Manufacturer</TableCell>
            <TableCell align="right">Application Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading
            ? // Render skeleton rows while loading
              Array.from(new Array(5)).map((_, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    <Skeleton />
                  </TableCell>
                  <TableCell align="right">
                    <Skeleton />
                  </TableCell>
                  <TableCell align="right">
                    <Skeleton />
                  </TableCell>
                  <TableCell align="right">
                    <Skeleton />
                  </TableCell>
                </TableRow>
              ))
            : // Render actual data once loading is complete
              drugListByGenericName.map((drug: Drug) => (
                <TableRow
                  key={drug.openfda.spl_id[0]}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    cursor: "pointer",
                  }}
                  onClick={() => handleClick(drug.openfda.spl_id[0])}
                >
                  <TableCell component="th" scope="row">
                    {drug.openfda.generic_name
                      ? drug.openfda.generic_name[0]
                      : "N/A"}
                  </TableCell>
                  <TableCell align="right">
                    {drug.openfda.brand_name[0]}
                  </TableCell>
                  <TableCell align="right">
                    {drug.openfda.manufacturer_name
                      ? drug.openfda.manufacturer_name[0]
                      : "N/A"}
                  </TableCell>
                  <TableCell align="right">
                    {drug.openfda.application_number
                      ? drug.openfda.application_number[0]
                      : "N/A"}
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DrugListTable;
