import { Box, Link, Paper, Typography } from "@mui/material";

const About = () => {
  return (
    <Box
      component={Paper}
      p={4}
      display={"flex"}
      flexDirection={"column"}
      gap={2}
    >
      <Typography
        component={Link}
        href="https://bemimg.com"
        target="_blank"
        fontWeight={500}
      >
        https://bemimg.com
      </Typography>
      <Typography
        component={Link}
        href="mailto:bemimg.dev@gmail.com"
        fontWeight={500}
      >
        bemimg.dev@gmail.com
      </Typography>
      <Typography
        component={Link}
        href="https://bemimg.com"
        target="_blank"
        fontWeight={500}
      >
        https://www.linkedin.com/in/bemimg/
      </Typography>
      <Typography
        component={Link}
        href="https://bemimg.com"
        target="_blank"
        fontWeight={500}
      >
        https://github.com/beMimg/drugbook
      </Typography>
    </Box>
  );
};

export default About;
