import { styled } from "@mui/system";
import { Button, FormHelperText, List, ListItem, Paper } from "@mui/material";
import { CSSProperties } from "@mui/material/styles/createMixins";

const components = {
  Paper: styled(Paper)({
    width: "30rem",
    height: "18rem",
    overflow: "auto",
    transition: "all 0.3s",
  }),

  List: styled(List)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }),

  ListItem: styled(ListItem)({
    display: "flex",
    aligntems: "center",
    cursor: "pointer",
  }),

  Button: styled(Button)({
    margin: "8px 0.5rem",
  }),

  FormHelperText: styled(FormHelperText)({
    color: "#00684a",
  }),

  Title: styled("div")({
    width: "100%",
    display: "flex",
    alignItems: "start",
    textAlign: "initial",
    color: "#00684a",
    fontSize: "24px",
    fontWeight: 400,
    marginBottom: "5rem",
  }),
};

const GridStyle: CSSProperties = {
  marginRight: "16rem",
};

const ButtonStyle: CSSProperties = {
  border: "solid 1px #00684a",
  color: "#00684a",
  transition: "all 0.3s",
  "&:hover": {
    backgroundColor: "#e3fcf7",
    border: "solid 1px #00684a",
    color: "#00684a",
  },
};

const ContainerStyle: CSSProperties = {
  marginTop: '8%',
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: '0rem 2rem'
};

const styles = {
  GridStyle,
  ButtonStyle,
  ContainerStyle,
};

export { components, styles };
