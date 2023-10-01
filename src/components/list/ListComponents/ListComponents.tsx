import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { components, styles } from "./styles";
import { useGeneratorContext } from "../../../contexts/GeneratorContext";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalComponentsEndpoints from "../../modals/ModalComponentsEndpoints";
import { ListComponentsProps } from "./interfaces/liste-components.interface";

export default function ListComponents({
  onToggle,
  checked,
}: ListComponentsProps) {
  const [inputValues, setInputValues] = React.useState<{
    [key: string]: number;
  }>({});
  const { setFormData, componentsList } = useGeneratorContext();
  const [modalComponent, setModalComponent] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const { ListItem, IconButton } = components;

  const handleOpenModal = (component: string) => {
    setModalComponent(component);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleInputChange =
    (value: string, type: string) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = parseInt(event.target.value);
      setInputValues((prevInputValues) => ({
        ...prevInputValues,
        [value]: newValue,
      }));

      setFormData((prevFormData) => ({
        ...prevFormData,
        selectedComponents: prevFormData.selectedComponents.map((component) =>
          component.type === type
            ? { ...component, amount: newValue }
            : component
        ),
      }));
    };

  const handleCheckboxChange = (component: string) => () => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [component]: 1,
    }));

    onToggle(component)();
  };

  return (
    <List dense sx={styles.ListStyle}>
      {componentsList &&
        componentsList.map((component) => {
          const labelId = `checkbox-list-secondary-label-${component}`;
          const isChecked = checked.indexOf(component) !== -1;

          return (
            <ListItem key={component} disablePadding>
              <ListItemButton sx={styles.ListItemButton}>
                <ListItemText
                  id={labelId}
                  primary={component.toString().toUpperCase()}
                />
                {isChecked && (
                  <>
                    <IconButton
                      onClick={() => handleOpenModal(component)}
                      aria-label="Open Modal"
                    >
                      <FontAwesomeIcon
                        icon={faList}
                        style={styles.FontAwesomeIcon}
                      />
                    </IconButton>
                    <TextField
                      type="number"
                      value={inputValues[component] || 1}
                      onChange={handleInputChange(component, component)}
                      InputProps={{
                        inputProps: { min: 1 },
                        sx: styles.TextFieldProps,
                      }}
                      style={{ margin: "0rem 1rem" }}
                    />
                    {openModal && modalComponent === component && (
                      <ModalComponentsEndpoints
                        component={component}
                        isOpen={openModal}
                        onClose={handleCloseModal}
                      />
                    )}
                  </>
                )}
                <Checkbox
                  edge="start"
                  onChange={handleCheckboxChange(component)}
                  checked={isChecked}
                  inputProps={{ "aria-labelledby": labelId }}
                  color="success"
                />
              </ListItemButton>
            </ListItem>
          );
        })}
    </List>
  );
}
