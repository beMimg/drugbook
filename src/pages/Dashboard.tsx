import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Hero from "../components/Dashboard/Hero";
import Card from "../components/Dashboard/Card";
import HealthAndSafetyTwoToneIcon from "@mui/icons-material/HealthAndSafetyTwoTone";
import LocalHospitalTwoToneIcon from "@mui/icons-material/LocalHospitalTwoTone";
import FindInPageTwoToneIcon from "@mui/icons-material/FindInPageTwoTone";

const cardContent = [
  {
    icon: HealthAndSafetyTwoToneIcon,
    title: "Built for Pharmacists and Healthcare Professionals",
    description:
      "Developed with the needs of pharmacists and healthcare providers in mind, our app offers robust search capabilities, comprehensive drug information, and an intuitive interface. ",
  },
  {
    icon: LocalHospitalTwoToneIcon,
    title: "Modern and Intuitive Design",
    description:
      "Experience a clean, modern interface designed to be both aesthetically pleasing and highly functional. Navigate effortlessly through search results and drug details with our user-friendly design.",
  },
  {
    icon: FindInPageTwoToneIcon,
    title: "Comprehensive Documentation",
    description:
      "Benefit from our detailed documentation that covers every aspect of the app. From search functionality to detailed drug information, our guides ensure you can make the most out of all features without any hassle.",
  },
];

const Dashboard = () => {
  const theme = useTheme();
  const isMdAndUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Hero />
      <Box
        marginTop={20}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={8}
      >
        <Box display={"flex"} flexDirection={"column"} gap={2}>
          <Typography variant="h4" fontWeight={500} textAlign={"center"}>
            Find accessible Pharmacy information with speed
          </Typography>
          <Typography
            fontWeight={"400"}
            variant="h6"
            color={"text.secondary"}
            textAlign={"center"}
          >
            Our pharmacy app allows you to quickly find and select any drug from
            the extensive OpenFDA database. Simply type in the search bar, and
            instantly access detailed information about medications.
          </Typography>
        </Box>
        <Grid container spacing={10} direction={isMdAndUp ? "row" : "column"}>
          {cardContent.map((card) => (
            <Card
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
