import { useState } from "react";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import ModalComponentsEndpoints from "../../modals/ModalComponentsEndpoints";
import { ListComponentsProps } from "./interfaces/list-components.interface";
import { useGeneratorContext } from "../../../contexts/GeneratorContext";
import { components, styles } from "./styles";
import { Paper } from "@mui/material";

export default function ListComponents({
  onToggle,
  checked,
  selectedComponents,
}: ListComponentsProps) {
  const { setFormData, componentsList } = useGeneratorContext();
  const [openModal, setOpenModal] = useState("");
  const { ListItem, IconButton } = components;

  const handleOpenModal = (component: string) => {
    setOpenModal(component);
  };

  const handleCloseModal = () => {
    setOpenModal("");
  };

  const handleInputChange = (component: string, newValue: number) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      selectedComponents: prevFormData.selectedComponents.map((c) =>
        c.type === component ? { ...c, amount: newValue } : c
      ),
    }));
  };

  return (
    <div style={styles.DivListComponents}>
      <List dense style={styles.ListStyle}>
        <Paper variant="elevation" elevation={3}>
          <ListItem key={"header_list"} disablePadding>
            <ListItemText
              style={styles.ListItemTextHeader}
              id={"header_list_item"}
              primary={""}
            />
          </ListItem>
          {componentsList &&
            componentsList.map((component) => {
              const labelId = `checkbox-list-secondary-label-${component}`;
              const isChecked = checked.indexOf(component) !== -1;

              return (
                <ListItem key={component}>
                  <ListItemText
                    id={labelId}
                    primary={component.toString().toUpperCase()}
                  />
                  {isChecked && (
                    <>
                      <IconButton
                        onClick={() => handleOpenModal(component)}
                        aria-label="Open Modal"
                        title={`Configurar endpoints e métodos dos componentes do tipo ${component.toUpperCase()}`}
                      >
                        <FontAwesomeIcon
                          icon={faCog}
                          style={styles.FontAwesomeIcon}
                        />
                      </IconButton>
                      <TextField
                        type="number"
                        value={
                          selectedComponents.find((c) => c.type === component)
                            ?.amount || 1
                        }
                        onChange={(event) =>
                          handleInputChange(
                            component,
                            parseInt(event.target.value)
                          )
                        }
                        InputProps={{
                          inputProps: { min: 1 },
                          sx: styles.TextFieldProps,
                        }}
                      />

                      {openModal === component && (
                        <ModalComponentsEndpoints
                          component={component}
                          isOpen={openModal === component}
                          onClose={handleCloseModal}
                        />
                      )}
                    </>
                  )}
                  <Checkbox
                    edge="start"
                    onChange={() => onToggle(component)()}
                    checked={isChecked}
                    inputProps={{ "aria-labelledby": labelId }}
                    color="success"
                  />
                </ListItem>
              );
            })}
        </Paper>
      </List>
    </div>
  );
}
