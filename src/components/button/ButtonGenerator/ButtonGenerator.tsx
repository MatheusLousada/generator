import { Button } from "@mui/material";
import { ButtonGeneratorProps } from "./interfaces/button-generator.interface";

export default function ButtonGenerator({ onClick }: ButtonGeneratorProps) {

  return (
    <Button
      variant="contained"
      style={{
        background: "#00684a",
        width: "11rem",
        height: "2rem",
        marginLeft: "3rem",
      }}
      onClick={onClick}
    >
      Gerar
    </Button>
  );
}
