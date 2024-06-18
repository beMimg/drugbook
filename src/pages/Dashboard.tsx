import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import SearchBar from "../components/Dashboard/SearchBar";
import medicineSvg from "../assets/images/medicine.svg";

const Dashboard = () => {
  const theme = useTheme();
  const isMdAndUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Grid
      container
      spacing={isMdAndUp ? 3 : 8}
      direction={isMdAndUp ? "row" : "column"}
      alignItems={"center"}
      flexGrow={1}
    >
      <Grid item md={6}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={3}
        >
          <Typography
            variant={isMdAndUp ? "h3" : "h4"}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            Your Gateway to Global{" "}
            <span style={{ color: theme.palette.secondary.main }}>
              Pharmaceutical
            </span>{" "}
            Knowledge
          </Typography>
          <Typography fontWeight={"300"} color={"gray"} textAlign={"center"}>
            Research, develop software, or access reliable pharmaceutical data
            with structured information for immediate insights and seamless
            integration.
          </Typography>
          <SearchBar />
        </Box>
      </Grid>
      <Grid item md={6}>
        <img src={medicineSvg} style={{ maxWidth: "100%", height: "auto" }} />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
