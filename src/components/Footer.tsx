import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        mt: "auto",
        color: "black",
        textAlign: "center",
      }}
    >
      <Typography>Footer</Typography>
    </Box>
  );
};

export default Footer;
