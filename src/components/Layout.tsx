import {
  Box,
  Container,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Navbar/Nav";
import theme from "./Theme/theme";

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Nav />
        <Container
          component="main"
          maxWidth={"xl"}
          sx={{ flexGrow: 1, py: 3, height: 100 }}
        >
          <Outlet />
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
