import { CSSProperties } from "react";

const ListExternal: CSSProperties = { background: "white", color: "#00684a" };

const ListInternal: CSSProperties = { background: "#00684a30" };

const ListItemDiv: CSSProperties = {
  display: "flex",
  width: "100%",
  flexDirection: "column",
};

const Span: CSSProperties = {
  background: "#00684a",
  color: "white",
  padding: "3px 8px",
  borderRadius: "1rem",
  marginLeft: "1rem",
  fontSize: "12px",
};

const styles = {
  ListExternal,
  ListInternal,
  ListItemDiv,
  Span,
};

export default styles;
