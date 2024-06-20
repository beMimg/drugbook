import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import { Box, Button, Container } from "@mui/material";
import medicinePillsWhite from "../../assets/images/medicine-pills-white.svg";

interface Props {
  window?: () => Window;
}

function HideOnScroll(props: Props) {
  const { window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar>
        <Container maxWidth={"xl"}>
          <Toolbar disableGutters>
            <Box
              display={"flex"}
              flexDirection={"row"}
              gap={1}
              sx={{
                flexGrow: 1,
                textDecoration: "none",
                color: "inherit",
                gap: 1,
              }}
            >
              <img src={medicinePillsWhite} alt="" style={{ height: "24px" }} />
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                DRUGBOOK
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/about">
                About
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
}

export default function HideAppBar(props: Props) {
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props} />
      <Toolbar />
    </>
  );
}
