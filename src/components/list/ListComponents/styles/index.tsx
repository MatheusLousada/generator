import { CSSProperties } from "react";
import { styled } from "@mui/system";
import { IconButton, ListItem } from "@mui/material";

const components = {
  Title: styled("div")({
    width: "100%",
    display: "flex",
    alignItems: "start",
    textAlign: "initial",
    color: "#00684a",
    fontSize: "24px",
    fontWeight: 400,
    marginBottom: "1rem",
  }),
  ListItem: styled(ListItem)({
    width: "100%",
    "&:hover": {
      background: "#00ed64 !important",
      border: "none",
      color: "#00684a",
    },
  }),
  IconButton: styled(IconButton)({
    "&:hover": {
      backgroundColor: "#00684a2e",
    },
  }),
};

const ListStyle: CSSProperties = {
  width: "40rem",
};

const ListItemButton: CSSProperties = {
  width: "100%",
};

const TextFieldProps: CSSProperties = {
  width: "4rem",
  height: "2rem",
  border: "solid 1px #00684a",
  margin: "0rem 1rem",
};

const FontAwesomeIcon: CSSProperties = {
  height: "1rem",
  padding: "0px !important",
  color: "gray",
  border: "none",
};

const DivListComponents: CSSProperties = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignContent: "center",
  justifyContent: "space-around",
  alignItems: "center",
  marginTop: '5rem'
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

const ListItemTextHeader: CSSProperties = {
  background: "#00684a",
  height: "50px",
  marginTop: "-8px",
  borderTopLeftRadius: "0.3rem",
  borderTopRightRadius: "0.3rem",
};

const styles = {
  ListStyle,
  ListItem,
  ListItemButton,
  TextFieldProps,
  FontAwesomeIcon,
  DivListComponents,
  ListItemTextHeader,
  DivMasterComponents,
};

export { components, styles };
