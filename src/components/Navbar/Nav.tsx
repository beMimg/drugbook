import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#4caf50" }}>
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
          >
            Drug Book
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/services">
              Services
            </Button>
            <Button color="inherit" component={Link} to="/about">
              About
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              Contact
            </Button>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Nav;
