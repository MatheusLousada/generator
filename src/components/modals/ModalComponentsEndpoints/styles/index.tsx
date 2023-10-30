import { FormHelperText } from "@mui/material";
import { styled } from "@mui/system";
import { CSSProperties } from "@mui/material/styles/createMixins";

const components = {
  Title: styled("div")({
    width: "100%",
    display: "flex",
    alignItems: "start",
    textAlign: "initial",
    color: "#00684a",
    fontSize: "24px",
    fontWeight: 400,
  }),
  FormHelperText: styled(FormHelperText)({
    color: "gray",
    marginLeft: "0px",
  }),
};

const ButtonStyle: CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  p: 4,
  maxHeight: "80vh",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#888",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#555",
  },
};

const DivBox: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};

const ButtonClose: CSSProperties = {
  color: "gray",
};

const styles = {
  ButtonStyle,
  DivBox,
  ButtonClose,
};

export { components, styles };
