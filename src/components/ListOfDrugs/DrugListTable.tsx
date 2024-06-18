import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

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
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {drug.openfda.generic_name[0]}
              </TableCell>
              <TableCell align="right">{drug.openfda.brand_name[0]}</TableCell>
              <TableCell align="right">
                {drug.openfda.manufacturer_name[0]}
              </TableCell>
              <TableCell align="right">
                {drug.openfda.application_number[0]}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DrugListTable;
