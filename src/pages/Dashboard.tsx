import { Box, Typography } from "@mui/material";
import Form from "../components/SearchBar";

const Dashboard = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Typography variant="h5">
        Your Gateway to Global Pharmaceutical Knowledge
      </Typography>
      <Typography>
        Research, develop software, or access reliable pharmaceutical data with
        structured information for immediate insights and seamless integration.
      </Typography>
      <Form />
    </Box>
  );
};

export default Dashboard;
