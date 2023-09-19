import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { ListComponentsEndpointsProps } from "./interfaces/listComponentsEndpoints.interface";
import ListEndpoints from "../ListEndpoints";

function ListComponentsEndpoints({
  component,
  selectedComponents,
}: ListComponentsEndpointsProps) {
  const componentToUpper = component.toUpperCase();

  console.log('component: ')
  console.log(component)
  console.log('------------')

  console.log('selectedComponents: ')
  console.log(selectedComponents)
  console.log('------------')

  return (
    <List>
      {selectedComponents.map((selectedComponent, index) => {
        const { amount, type } = selectedComponent;
        if (typeof amount === "number" && type === component) {
          const listItemArray = Array.from({ length: amount }, (_, i) => (
            <ListItem key={i}>
              <div
                style={{
                  display: 'flex',
                  width: "100%",
                  background: "rgb(0, 104, 74)",
                  flexDirection: "column",
                  flexWrap: "nowrap",
                  color: 'white',
                  padding: '0.1rem'
                }}
              >
                <div>
                  <ListItemText primary={`${componentToUpper} ${i + 1}`} style={{marginLeft: '5px'}}/>
                </div>
                <div>
                  <ListEndpoints component={component} />
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
