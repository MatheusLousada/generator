import { Button } from "@mui/material";

interface ButtonGeneratorProps {
  onClick: () => void;
}

export default function ButtonGenerator({ onClick }: ButtonGeneratorProps) {
  return (
    <Button
      variant="contained"
      style={{ width: "100%", marginTop: "4rem", background: "#00684a" }}
      onClick={onClick}
    >
      Gerar
    </Button>
  );
}
