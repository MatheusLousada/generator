import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

interface ListComponentsProps {
  onToggle: (value: string) => () => void;
  checked: string[];
  components: string[];
}

export default function ListComponents({
  onToggle,
  checked,
  components,
}: ListComponentsProps) {
  return (
    <List
      dense
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    >
      {components &&
        components.map((value) => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <ListItem
              key={value}
              secondaryAction={
                <Checkbox
                  edge="end"
                  onChange={onToggle(value)}
                  checked={checked.indexOf(value) !== -1}
                  inputProps={{ "aria-labelledby": labelId }}
                />
              }
              disablePadding
            >
              <ListItemButton>
                <ListItemText
                  id={labelId}
                  primary={value.toString().toUpperCase()}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
    </List>
  );
}
