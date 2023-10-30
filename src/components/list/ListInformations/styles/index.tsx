import { CSSProperties } from "react";
import { styled } from "@mui/system";
import { ListItem } from "@mui/material";

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
    display: "flex",
    marginBottom: "1rem",
    alignContent: "center",
    alignItems: "flex-start",
    flexDirection: "row",
  }),
};

const ListStyle: CSSProperties = {
  width: "40rem",
};

const ListItemButton: CSSProperties = {
  width: "100%",
};

const ListItemTextNumber: CSSProperties = {
  marginRight: "0.5rem",
  color: "#00684a",
  fontWeight: 600,
};

const ListItemText: CSSProperties = {
  padding: "0rem 0.5rem",
  textAlign: "justify",
  borderRadius: '0.2rem'
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
  height: "66vh",
};

const ListItemTextHeader: CSSProperties = {
  background: "rgb(0, 104, 74)",
  height: "34px",
  marginTop: "-8px",
  borderTopLeftRadius: "0.3rem",
  borderTopRightRadius: "0.3rem",
  color: "white",
  paddingLeft: "1rem",
  paddingTop: "1rem",
};

const DivListInformations: CSSProperties = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  alignContent: "center",
  justifyContent: "flex-start",
  alignItems: "center",
  marginTop: '5rem'
};

const styles = {
  ListStyle,
  ListItem,
  ListItemButton,
  TextFieldProps,
  FontAwesomeIcon,
  DivListComponents,
  ListItemTextHeader,
  DivListInformations,
  ListItemTextNumber,
  ListItemText,
};

export { components, styles };
