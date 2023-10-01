import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { ListEndpointsProps } from "./interfaces/listEndpoints.interface";
import { useGeneratorContext } from "../../../contexts/GeneratorContext";
import {
  ComponentsEndpointsGroup,
  Endpoints,
} from "../../../contexts/interfaces/generator.interface";

function ListEndpoints({ component, index }: ListEndpointsProps) {
  const { formData, setFormData } = useGeneratorContext();
  const { selectedEndpoints } = formData;
  const [selectedItems, setSelectedItems] = useState<ComponentsEndpointsGroup[]>([]);

  const handleToggle = (endpoint: Endpoints, selectedMethod: string) => () => {
    setSelectedItems((prevSelectedItems) => {
      const key = index;
      const updatedItems = [...prevSelectedItems];
      const itemIndex = updatedItems.findIndex((item) => item.id === key);

      if (itemIndex !== -1) {
        const endpointIndex = updatedItems[itemIndex].endpoints.findIndex(
          (e) => e.endpoint === endpoint.endpoint && e.method === selectedMethod
        );

        if (endpointIndex !== -1) {
          updatedItems[itemIndex].endpoints.splice(endpointIndex, 1);
          if (updatedItems[itemIndex].endpoints.length === 0) {
            updatedItems.splice(itemIndex, 1);
          }
        } else {
          updatedItems[itemIndex].endpoints.push({
            endpoint: endpoint.endpoint,
            method: selectedMethod,
          });
        }
      } else {
        updatedItems.push({
          id: key,
          endpoints: [
            {
              endpoint: endpoint.endpoint,
              method: selectedMethod,
            },
          ],
        });
      }

      return updatedItems;
    });
  };

  useEffect(() => {
    const updatedFormData = { ...formData };
    const componentToUpdate = updatedFormData.selectedComponents.find(
      (comp) => comp.type === component
    );

    if (componentToUpdate) {
      const uniqueEndpoints = selectedItems.filter((item) => {
        const isDuplicate = componentToUpdate.endpoints?.some(
          (endpoint) => endpoint.id === item.id
        );
        return !isDuplicate;
      });

      if (componentToUpdate.endpoints) {
        componentToUpdate.endpoints.push(...uniqueEndpoints);
      } else {
        componentToUpdate.endpoints = uniqueEndpoints;
      }
    } else {
      updatedFormData.selectedComponents.push({
        type: component,
        endpoints: selectedItems,
      });
    }

    setFormData(updatedFormData);
  }, [selectedItems]);

  useEffect(() => {
    console.log('formData: ')
    console.log(formData)
    console.log('---------------')
  }, [formData]);

  return (
    <List style={{ background: "white", color: "rgb(0, 104, 74)" }}>
      {selectedEndpoints.map((endpoint, endpointIndex) => (
        <ListItem
          key={endpointIndex}
          style={{ padding: 0, marginBottom: "-15px", marginTop: "-20px" }}
        >
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
                    checked={selectedItems.some((item) =>
                      item.endpoints.some(
                        (e) =>
                          e.endpoint === endpoint.endpoint &&
                          e.method === selectedMethod
                      )
                    )}
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
