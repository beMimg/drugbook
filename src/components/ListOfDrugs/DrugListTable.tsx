import {
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const DrugListTable = ({
  drugListByGenericName,
  loading,
}: DrugListByGenericNameProp) => {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    const path = `/information/${id}`;
    navigate(path);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Generic Name</StyledTableCell>
            <StyledTableCell align="right">Brand</StyledTableCell>
            <StyledTableCell align="right">Manufacturer</StyledTableCell>
            <StyledTableCell align="right">Application Number</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading
            ? // Render skeleton rows while loading
              Array.from(new Array(5)).map((_, index) => (
                <TableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    <Skeleton />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Skeleton />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Skeleton />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Skeleton />
                  </StyledTableCell>
                </TableRow>
              ))
            : // Render actual data once loading is complete
              drugListByGenericName.map((drug: Drug) => (
                <StyledTableRow
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
                </StyledTableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DrugListTable;
