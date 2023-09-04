import { useState } from "react";
import { useGeneratorContext } from "../../../contexts/GeneratorContext";
import TransferListMethods from "./TransferListMethods";
import { components } from "./styles";
import { Endpoints } from "../../../contexts/interfaces/generator.interface";

export default function TransferListMethodsContainer() {
  const [left, setLeft] = useState<string[]>([]);
  const [right, setRight] = useState<string[]>([]);
  const [checked, setChecked] = useState<string[]>([]);
  const { formData, setFormData } = useGeneratorContext();
  const { Title } = components;

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setRight([...right, ...left]);
    setLeft([]);
    setChecked([]);
  };

  const handleCheckedRight = () => {
    setRight([...right, ...checked]);
    setLeft(left.filter((value) => !checked.includes(value)));
    setChecked([]);
  };

  const handleCheckedLeft = () => {
    setLeft([...left, ...checked]);
    setRight(right.filter((value) => !checked.includes(value)));
    setChecked([]);
  };

  const handleAllLeft = () => {
    setLeft([...left, ...right]);
    setRight([]);
    setChecked([]);
  };

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
      {formData?.selectedEndpoints.map(
        (endpointData: Endpoints) => (
          <div>
            <Title>{endpointData.endpoint}</Title>
            <TransferListMethods
              left={left}
              setLeft={setLeft}
              right={right}
              onAllRight={handleAllRight}
              onCheckedRight={handleCheckedRight}
              onCheckedLeft={handleCheckedLeft}
              onAllLeft={handleAllLeft}
              onToggle={handleToggle}
              checked={checked}
              endpoint={endpointData.endpoint ?? ''}
            />
          </div>
        )
      )}
    </div>
  );
}
