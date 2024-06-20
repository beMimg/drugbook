import React from "react";
import { Container, Grid, Typography, Link, Box } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "background.paper",
        padding: (theme) => theme.spacing(6, 0),
        marginTop: 12,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-evenly">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
              We are a dedicated team providing the best pharmacy services and
              medication management.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Services
            </Typography>
            <Link
              href="#"
              variant="body2"
              color="textSecondary"
              sx={{ display: "block", margin: (theme) => theme.spacing(1, 0) }}
            >
              Medication Search
            </Link>
            <Link
              href="#"
              variant="body2"
              color="textSecondary"
              sx={{ display: "block", margin: (theme) => theme.spacing(1, 0) }}
            >
              Prescription Refill
            </Link>
            <Link
              href="#"
              variant="body2"
              color="textSecondary"
              sx={{ display: "block", margin: (theme) => theme.spacing(1, 0) }}
            >
              Consultation
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Resources
            </Typography>
            <Link
              href="#"
              variant="body2"
              color="textSecondary"
              sx={{ display: "block", margin: (theme) => theme.spacing(1, 0) }}
            >
              FAQ
            </Link>
            <Link
              href="#"
              variant="body2"
              color="textSecondary"
              sx={{ display: "block", margin: (theme) => theme.spacing(1, 0) }}
            >
              Support
            </Link>
            <Link
              href="#"
              variant="body2"
              color="textSecondary"
              sx={{ display: "block", margin: (theme) => theme.spacing(1, 0) }}
            >
              Contact Us
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Legal
            </Typography>
            <Link
              href="#"
              variant="body2"
              color="textSecondary"
              sx={{ display: "block", margin: (theme) => theme.spacing(1, 0) }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              variant="body2"
              color="textSecondary"
              sx={{ display: "block", margin: (theme) => theme.spacing(1, 0) }}
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              variant="body2"
              color="textSecondary"
              sx={{ display: "block", margin: (theme) => theme.spacing(1, 0) }}
            >
              Disclaimer
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="textSecondary" align="center">
            &copy; {new Date().getFullYear()} DrugBook. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
