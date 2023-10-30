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
import styles from "./styles";

function ListEndpoints({ component, index }: ListEndpointsProps) {
  const { formData, setFormData } = useGeneratorContext();
  const { endpoints } = formData;
  const [selectedItems, setSelectedItems] = useState<
    ComponentsEndpointsGroup[]
  >([]);

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

  return (
    <List style={styles.ListExternal}>
      {endpoints.map((endpoint, endpointIndex) => (
        <ListItem key={endpointIndex}>
          <div
            style={styles.ListItemDiv}
          >
            <List style={styles.ListInternal}>
              {endpoint.methods && Object.keys(endpoint.methods).map((method) => (
                  <ListItem
                    button
                    onClick={handleToggle(endpoint, method)}
                  >
                    <Checkbox
                      edge="start"
                      checked={selectedItems.some((item) =>
                        item.endpoints.some(
                          (e) =>
                            e.endpoint === endpoint.endpoint &&
                            e.method === method
                        )
                      )}
                      tabIndex={-1}
                      disableRipple
                      color="success"
                    />
                    <ListItemText
                      primary={
                        <>
                          {`${endpoint.endpoint}`}
                          <span
                            style={styles.Span}
                          >
                            {method.toUpperCase()}
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
