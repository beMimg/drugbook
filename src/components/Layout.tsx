import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";

const Layout = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BOOKDRUG
          </Typography>
          <Nav />
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ flexGrow: 1, py: 3, height: 100 }}>
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
