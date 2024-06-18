import { Grid, Typography } from "@mui/material";
import React from "react";

interface CardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const Card = ({ icon: Icon, title, description }: CardProps) => {
  return (
    <Grid
      item
      sm={4}
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      justifyContent={"start"}
      alignItems={"center"}
    >
      <Icon color={"primary"} fontSize={"large"} />
      <Typography fontSize={"1.2rem"} fontWeight={500} textAlign={"center"}>
        {title}
      </Typography>
      <Typography color={"text.secondary"} textAlign={"center"}>
        {description}
      </Typography>
    </Grid>
  );
};

export default Card;
