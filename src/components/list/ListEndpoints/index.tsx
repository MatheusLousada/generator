import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { ListEndpointsProps } from "./interfaces/listEndpoints.interface";
import { useGeneratorContext } from "../../../contexts/GeneratorContext";
import { Endpoints } from "../../../contexts/interfaces/generator.interface";

function ListEndpoints({ component }: ListEndpointsProps) {
  const { formData } = useGeneratorContext();
  const { selectedEndpoints } = formData;

  const [selectedItems, setSelectedItems] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleToggle = (endpoint: Endpoints, selectedMethod: string) => () => {
    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [`${endpoint.endpoint}-${selectedMethod}`]: !prevSelectedItems[
        `${endpoint.endpoint}-${selectedMethod}`
      ],
    }));
  };

  return (
    <List style={{ background: "white", color: "rgb(0, 104, 74)" }}>
      {selectedEndpoints.map((endpoint, index) => (
        <ListItem key={index} style={{ padding: 0, marginBottom: "-15px", marginTop: "-20px" }}>
          <div
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
            }}
          >
            <List>
              {endpoint.selectedMethods?.map((selectedMethod, methodIndex) => (
                <ListItem
                  key={methodIndex}
                  button
                  onClick={handleToggle(endpoint, selectedMethod)}
                >
                  <Checkbox
                    edge="start"
                    checked={selectedItems[`${endpoint.endpoint}-${selectedMethod}`] || false}
                    tabIndex={-1}
                    disableRipple
                    color="success"
                  />
                  <ListItemText
                    primary={
                      <>
                        {endpoint.endpoint}{" "}
                        <span
                          style={{
                            background: "#00684a",
                            color: "white",
                            padding: "3px 8px",
                            borderRadius: "1rem",
                            marginLeft: "1rem",
                            fontSize: "12px",
                          }}
                        >
                          {selectedMethod.toUpperCase()}
                        </span>
                      </>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </div>
        </ListItem>
      ))}
    </List>
  );
}

export default ListEndpoints;
