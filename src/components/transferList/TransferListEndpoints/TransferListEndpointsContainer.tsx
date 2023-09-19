import React, { useState, useEffect } from "react";
import { useGeneratorContext } from "../../../contexts/GeneratorContext";
import TransferListEndpoints from "./TransferListEndpoints";
import { components, styles } from "./styles";

export default function TransferListEndpointsContainer() {
  const [left, setLeft] = useState<readonly string[]>([]);
  const [right, setRight] = useState<readonly string[]>([]);
  const [checked, setChecked] = useState<readonly string[]>([]);
  const { fileData, setFormData, formData } = useGeneratorContext();
  const { Title } = components;

  useEffect(() => {
    if (fileData) {
      const endpoints = Object.keys(fileData.paths);
      setLeft(endpoints);
    }
  }, [fileData]);

  useEffect(() => {
    if (right && fileData) {
      const selectedEndpoints = right.map((endpoint) => ({
        endpoint,
        methods: fileData.paths[endpoint],
      }));
  
      setFormData({
        ...formData,
        selectedEndpoints,
      });
    }
  }, [right, fileData]);
  

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
    setRight(right.concat(left));
    setLeft([]);
    setChecked([]);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(checked));
    setLeft(left.filter((value) => !checked.includes(value)));
    setChecked([]);
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(checked));
    setRight(right.filter((value) => !checked.includes(value)));
    setChecked([]);
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
    setChecked([]);
  };

  return (
    <div
      style={styles.ContainerStyle}
    >
      <Title>Endpoints</Title>
      <TransferListEndpoints
        left={left}
        right={right}
        onAllRight={handleAllRight}
        onCheckedRight={handleCheckedRight}
        onCheckedLeft={handleCheckedLeft}
        onAllLeft={handleAllLeft}
        onToggle={handleToggle}
        checked={checked}
      />
    </div>
  );
}
