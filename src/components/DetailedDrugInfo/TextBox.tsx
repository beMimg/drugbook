import { Box, Typography } from "@mui/material";
import React from "react";

interface TextBoxProps {
  title: string;
  description: string;
}
const TextBox = ({ title, description }: TextBoxProps) => {
  return (
    <Box>
      <Typography variant="h6">{title}</Typography>
      <Typography>{description}</Typography>
    </Box>
  );
};

export default TextBox;
