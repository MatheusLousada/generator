import { CSSProperties } from "react";

const ListStyle: CSSProperties = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignContent: "center",
  justifyContent: "flex-end",
  alignItems: "center",
  background: "#a9a9a94f",
  padding: 10,
};

const ListItemButton: CSSProperties = {
  border: "solid 1px #00684a",
  width: "11rem",
  height: "2rem",
  color: "#00684a",
  background: "white",
};

const TextFieldProps: CSSProperties = {
  background: "#00684a",
  width: "11rem",
  height: "2rem",
  marginLeft: "3rem",
};

const FontAwesomeIconStyleGreen: CSSProperties = {
  height: "1rem",
  padding: "0px !important",
  color: "#00684a",
  border: "none",
};

const FontAwesomeIconStyleWhite: CSSProperties = {
  height: "1rem",
  padding: "0px !important",
  color: "white",
  border: "none",
};

const styles = {
  ListStyle,
  ListItemButton,
  TextFieldProps,
  FontAwesomeIconStyleGreen,
  FontAwesomeIconStyleWhite,
};

export default styles;
