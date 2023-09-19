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
      background: "#ffffff !important",
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
  width: "100%",
  maxWidth: 360,
};

const ListItemButton: CSSProperties = {
  width: "100%",
};

const TextFieldProps: CSSProperties = {
  width: "4rem",
  height: "2rem",
  border: "solid 1px #00684a",
};

const FontAwesomeIcon: CSSProperties = {
  height: "1rem",
  padding: "0px !important",
  color: "gray",
  border: "none",
};

const styles = {
  ListStyle,
  ListItem,
  ListItemButton,
  TextFieldProps,
  FontAwesomeIcon,
};

export { components, styles };
