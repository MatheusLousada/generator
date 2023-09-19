import { useGeneratorContext } from "../../../contexts/GeneratorContext";
import { Endpoints } from "../../../contexts/interfaces/generator.interface";
import TransferListMethods from "../TransferListMethods/TransferListMethods";
import { components, styles } from "./styles";

export default function TransferListMethodsContainer() {
  const { formData } = useGeneratorContext();
  const { Title } = components;

  return (
    <div style={styles.ContainerStyle}>
      {formData?.selectedEndpoints.map((endpointData: Endpoints) => (
        <div key={endpointData.endpoint}>
          <Title>{endpointData.endpoint}</Title>
          <TransferListMethods endpoint={endpointData.endpoint ?? ""} />
        </div>
      ))}
    </div>
  );
}
