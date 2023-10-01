import { styled } from "@mui/system";
import { Button, FormHelperText, List, ListItem, Paper } from "@mui/material";
import { CSSProperties } from "@mui/material/styles/createMixins";

const components = {
  Paper: styled(Paper)({
    width: "415px",
    height: "230px",
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
    fontSize: "16px",
    fontWeight: 200,
    marginBottom: "1rem",
    padding: "0.5rem",
    background: "#e3fcf7",
    borderRadius: "0.2rem",
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
  marginTop: '2%',
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "3rem",
};

const styles = {
  GridStyle,
  ButtonStyle,
  ContainerStyle,
};

export { components, styles };
