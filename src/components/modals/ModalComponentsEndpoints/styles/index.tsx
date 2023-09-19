import { FormHelperText } from "@mui/material";
import { styled } from "@mui/system";

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
    marginLeft: '0px'
  }),
};

export { components };
