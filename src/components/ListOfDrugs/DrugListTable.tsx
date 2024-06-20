import {
  Box,
  Link,
  Paper,
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
}

const DrugListTable = ({
  drugListByGenericName,
}: DrugListByGenericNameProp) => {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    const path = `/information/${id}`;
    navigate(path);
  };

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
          {drugListByGenericName.map((drug: Drug) => (
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
                  : "Undefined"}
              </TableCell>
              <TableCell align="right">{drug.openfda.brand_name[0]}</TableCell>
              <TableCell align="right">
                {drug.openfda.manufacturer_name
                  ? drug.openfda.manufacturer_name[0]
                  : "Undefined"}
              </TableCell>
              {/* Found out that there was some application numbers missing from older medications on Aspirine */}
              <TableCell align="right">
                {drug.openfda.application_number
                  ? drug.openfda.application_number[0]
                  : "Undefined"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DrugListTable;
