import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ModalComponentsEndpointsProps } from "./interfaces/modalComponentsEndpoints.interface";
import { components, styles } from "./styles";
import { useGeneratorContext } from "../../../contexts/GeneratorContext";
import ListComponentsEndpoints from "../../list/ListComponentsEndpoints";

function ModalComponentsEndpoints({
  component,
  isOpen,
  onClose,
}: ModalComponentsEndpointsProps) {
  const { Title, FormHelperText } = components;
  const { formData} = useGeneratorContext();
  const componentToUpper = component.toUpperCase();

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={styles.ButtonStyle}>
        <div style={styles.DivBox}>
          <Title>
            <strong>{componentToUpper}</strong>
          </Title>
          <div>
            <Button onClick={onClose} style={styles.ButtonClose}>
              X
            </Button>
          </div>
        </div>

        <FormHelperText>
          {`Escolha os endpoints e os métodos que cada componente ${componentToUpper} usará para realizar requisições`}
        </FormHelperText>

        <ListComponentsEndpoints
          component={component}
          selectedComponents={formData.selectedComponents}
        />
      </Box>
    </Modal>
  );
}

export default ModalComponentsEndpoints;
