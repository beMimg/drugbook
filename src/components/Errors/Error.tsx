import { Box, Alert, Button } from "@mui/material";

const Error = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={2}
    >
      <Alert severity="error">
        An error occurred while fetching drug information. Please try again
        later.
      </Alert>
      <Button variant="contained" onClick={() => window.location.reload()}>
        Retry
      </Button>
    </Box>
  );
};

export default Error;
