import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import SearchBar from "./SearchBar";
import medicineSvg from "../../assets/images/medicine.svg";

interface HeroProps {
  isMdAndUp: Boolean;
}

const Hero = ({ isMdAndUp }: HeroProps) => {
  return (
    <Grid
      container
      spacing={isMdAndUp ? 3 : 8}
      direction={isMdAndUp ? "row" : "column"}
      alignItems={"center"}
      flexGrow={1}
      py={6}
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
            <Typography
              component="span"
              variant={isMdAndUp ? "h3" : "h4"}
              fontWeight={"bold"}
              color={"primary.main"}
            >
              Pharmaceutical
            </Typography>{" "}
            Knowledge
          </Typography>
          <Typography
            variant="h6"
            color={"text.secondary"}
            textAlign={"center"}
          >
            Research, develop software, or access reliable pharmaceutical data
            with structured information for immediate insights and seamless
            integration.
          </Typography>
          <SearchBar />
        </Box>
      </Grid>
      <Grid item md={6}>
        <img
          src={medicineSvg}
          alt="Medics"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Grid>
    </Grid>
  );
};

export default Hero;
