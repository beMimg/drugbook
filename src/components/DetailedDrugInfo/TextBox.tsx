import { Box, Typography } from "@mui/material";
import React from "react";

interface TextBoxProps {
  title: string;
  description: string;
}
const TextBox = ({ title, description }: TextBoxProps) => {
  return (
    <Box>
      <Typography variant="h6" color={"text.primary"}>
        {title}
      </Typography>
      <Typography color={"text.secondary"}>{description}</Typography>
    </Box>
  );
};

export default TextBox;
