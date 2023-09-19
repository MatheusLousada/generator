import { useGeneratorContext } from "../../../contexts/GeneratorContext";
import TransferListMethods from "./TransferListMethods";
import { components, styles } from "./styles";
import { Endpoints } from "../../../contexts/interfaces/generator.interface";

export default function TransferListMethodsContainer() {
  const { formData } = useGeneratorContext();
  const { Title } = components;

  return (
    <div style={styles.ContainerStyle}>
      {formData?.selectedEndpoints.map((endpointData: Endpoints, index) => (
        <div key={index}>
          <Title>{endpointData.endpoint}</Title>
          <TransferListMethods endpoint={endpointData.endpoint ?? ""} />
        </div>
      ))}
    </div>
  );
}
