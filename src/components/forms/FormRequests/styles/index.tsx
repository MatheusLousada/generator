import { styled } from "@mui/system";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Paper,
} from "@mui/material";
import { CSSProperties } from "react";

const components = {
  Form: styled(FormControl)({
    width: "90%",
    flexWrap: "nowrap",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "start",
    padding: "2rem 1rem",
  }),

  InputFile: styled(Input)({
    display: "none",
  }),

  InputLabelFile: styled(FormLabel)({
    display: "flex",
    width: "95%",
    minHeight: "25vh",
    border: "1px dashed #00ed64",
    padding: "1rem",
    borderRadius: "4px",
    cursor: "pointer",
    textAlign: "center",
    transition: "border-color 0.3s ease-in-out",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "0.9rem",
    color: "#00684a",
  }),

  FormHelperText: styled(FormHelperText)({
    marginTop: 5,
    color: "#00684a",
  }),

  Paper: styled(Paper)({
    width: "40rem",
    minHeight: "52vh",
  }),
};

const DivMasterComponents: CSSProperties = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  placeContent: "center space-around",
  alignItems: "flex-start",
  flexWrap: "nowrap",
  alignContent: "flex-start",
  justifyContent: "space-around",
};

const DivFormRequests: CSSProperties = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignContent: "center",
  justifyContent: "space-around",
  alignItems: "center",
  marginTop: "5rem",
};

const DivForm: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  placeContent: "center",
  alignItems: "flex-start",
  flexWrap: "nowrap",
  alignContent: "flex-start",
  justifyContent: "center",
  width: "100%",
};

const DivPaper: CSSProperties = {
  height: "50px",
  width: "100%",
  background: "rgb(0, 104, 74)",
  borderTopLeftRadius: "0.3rem",
  borderTopRightRadius: "0.3rem",
};

const DivBaseUrl: CSSProperties = {
  marginBottom: "3rem",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  alignContent: "flex-end",
  justifyContent: "flex-start",
  alignItems: "flex-end",
};

const FormLabelBaseUrl: CSSProperties = {
  marginRight: "1rem",
  width: "130px",
  textAlign: "start",
  color: "#00684a",
  fontSize: '0.875rem'
};

const FormLabelAccessToken: CSSProperties = {
  marginRight: "1rem",
  width: "130px",
  textAlign: "start",
  color: "#00684a",
};

const Text: CSSProperties = {
  width: "100%",
  fontSize: '0.875rem',
};

const styles = {
  DivMasterComponents,
  DivFormRequests,
  DivForm,
  DivPaper,
  DivBaseUrl,
  FormLabelBaseUrl,
  FormLabelAccessToken,
  Text,
};

export { components, styles };
