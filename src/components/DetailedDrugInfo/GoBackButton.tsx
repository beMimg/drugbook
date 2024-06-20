import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const GoBackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(-1)}
      sx={{ alignSelf: "start", display: "flex", gap: 2 }}
    >
      <ArrowBackIcon /> Go back
    </Button>
  );
};

export default GoBackButton;
