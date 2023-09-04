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
    minHeight: 150,
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
    background: "#e3fcf7",
    color: "#00684a",
  }),

  FormHelperText: styled(FormHelperText)({
    marginTop: 5,
    color: "#00684a",
  }),

  Paper: styled(Paper)({
    width: "90%",
    minHeight: "85vh",
  }),
};

const DivInputFile: CSSProperties = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  alignContent: "flex-start",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "4rem",
};

const DivHelperText: CSSProperties = {
  width: "99%",
};

const FileImportIcon: CSSProperties = {
  marginTop: "25px",
  fontSize: "35px",
  color: "#00684a",
};

const styles = {
  DivInputFile,
  DivHelperText,
  FileImportIcon,
};

export { components, styles };
