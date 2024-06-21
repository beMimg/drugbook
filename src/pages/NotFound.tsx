import { Box, Typography } from "@mui/material";
import notFound from "../assets/images/not_found.svg";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={4}
    >
      <img
        style={{ maxWidth: "100%", height: "auto" }}
        src={notFound}
        alt="not found"
      />
      <Typography variant="h4">Page Not Found</Typography>
      <Typography variant="body1">
        <Link to="/" color="primary.main" style={{ textDecoration: "none" }}>
          Go back to homepage
        </Link>
      </Typography>
    </Box>
  );
};

export default NotFound;
