import {
  Box,
  Container,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import theme from "../theme/theme";
import HideAppBar from "./Navbar/Nav";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <HideAppBar />
        <Container
          component="main"
          maxWidth={"xl"}
          sx={{
            px: 3,
            py: 6,
            height: "100%",
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Outlet />
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
