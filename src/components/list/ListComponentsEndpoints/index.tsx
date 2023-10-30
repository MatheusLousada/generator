import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { ListComponentsEndpointsProps } from "./interfaces/listComponentsEndpoints.interface";
import ListEndpoints from "../ListEndpoints";
import { styles } from "./styles";

function ListComponentsEndpoints({
  component,
  selectedComponents,
}: ListComponentsEndpointsProps) {
  const componentToUpper = component.toUpperCase();

  return (
    <List>
      {selectedComponents.map((selectedComponent, index) => {
        const { amount, type } = selectedComponent;

        if (typeof amount === "number" && type === component) {
          const listItemArray = Array.from({ length: amount }, (_, i) => (
            <ListItem key={i}>
              <div style={styles.ListItemDiv}>
                <div>
                  <ListItemText
                    primary={`${componentToUpper} ${i + 1}`}
                    style={{ marginLeft: "5px" }}
                  />
                </div>
                <div>
                  <ListEndpoints component={component} index={i + 1} />
                </div>
              </div>
            </ListItem>
          ));
          return listItemArray;
        }

        return null;
      })}
    </List>
  );
}

export default ListComponentsEndpoints;
