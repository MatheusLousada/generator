import { useGeneratorContext } from "../../../contexts/GeneratorContext";
import TransferListMethods from "./TransferListMethods";
import { components } from "./styles";
import { Endpoints } from "../../../contexts/interfaces/generator.interface";

export default function TransferListMethodsContainer() {
  const { formData } = useGeneratorContext();
  const { Title } = components;

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "3rem",
      }}
    >
      {formData?.selectedEndpoints.map((endpointData: Endpoints) => (
        <div>
          <Title>{endpointData.endpoint}</Title>
          <TransferListMethods endpoint={endpointData.endpoint ?? ""} />
        </div>
      ))}
    </div>
  );
}
