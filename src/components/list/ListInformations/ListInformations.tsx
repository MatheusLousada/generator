import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { ListInformationsProps } from "./interfaces/list-informations.interface";
import { components, styles } from "./styles";
import { Paper } from "@mui/material";

export default function ListInformations({
  informations,
}: ListInformationsProps) {
  const { ListItem } = components;
  return (
    <div style={styles.DivListInformations}>
      <List dense style={styles.ListStyle}>
        <Paper variant="elevation" elevation={3}>
          <ListItem key={"header_list"} disablePadding>
            <ListItemText
              style={styles.ListItemTextHeader}
              id={"header_list_item"}
              primary={"INFORMAÇÕES DE USO"}
            />
          </ListItem>
          {informations &&
            informations.map((information, id) => {
              return (
                <ListItem key={`${information}_item`}>
                  <div style={styles.ListItemTextNumber}>{id + 1}</div>
                  <div>
                    <ListItemText
                      id={`${information}_item_text`}
                      primary={information}
                      style={styles.ListItemText}
                    />
                  </div>
                </ListItem>
              );
            })}
          <ListItem key={"header_bottom"} disablePadding>
            <ListItemText
              id={"header_list_item"}
              primary={""}
            />
          </ListItem>
        </Paper>
      </List>
    </div>
  );
}
