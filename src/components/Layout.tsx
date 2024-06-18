import { Box, Container, Toolbar, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Navbar/Nav";
const Layout = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Nav />
      <Container component="main" sx={{ flexGrow: 1, py: 3, height: 100 }}>
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
