import { Box, useMediaQuery, useTheme } from "@mui/material";
import Hero from "../components/Dashboard/Hero";
import InfoSection from "../components/Dashboard/InfoSection";

const Dashboard = () => {
  const theme = useTheme();
  const isMdAndUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box display={"flex"} flexDirection={"column"} gap={12}>
      <Hero isMdAndUp={isMdAndUp} />
      <InfoSection isMdAndUp={isMdAndUp} />
    </Box>
  );
};

export default Dashboard;
