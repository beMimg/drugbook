import { Box, Typography } from "@mui/material";
import SearchBar from "../components/SearchBar";

const Dashboard = () => {
  return (
    <Box display={"flex"} flexDirection={"row"} height="100%">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap={10}
      >
        <Typography variant="h3" fontWeight={"bold"}>
          Your Gateway to Global Pharmaceutical Knowledge
        </Typography>
        <Typography fontWeight={"300"} color={"gray"}>
          Research, develop software, or access reliable pharmaceutical data
          with structured information for immediate insights and seamless
          integration.
        </Typography>
        <SearchBar />
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Dashboard;
