import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ModalComponentsEndpointsProps } from "./interfaces/modalComponentsEndpoints.interface";
import { components } from "./styles";
import { useGeneratorContext } from "../../../contexts/GeneratorContext";
import ListComponentsEndpoints from "../../list/ListComponentsEndpoints";

function ModalComponentsEndpoints({
  component,
  isOpen,
  onClose,
}: ModalComponentsEndpointsProps) {
  const { Title, FormHelperText } = components;
  const { formData } = useGeneratorContext();
  const componentToUpper = component.toUpperCase();
  
  console.log('formData: ')
  console.log(formData)
  console.log('-------------')

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "50%",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          maxHeight: "80vh",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#888",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#555",
          },
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Title>
            <strong>{componentToUpper}</strong>
          </Title>
          <div>
            <Button onClick={onClose} style={{ color: "gray" }}>
              X
            </Button>
          </div>
        </div>

        <FormHelperText>
          Escolha os endpoints e os métodos que cada componente{" "}
          {componentToUpper} usará para realizar requisições
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
