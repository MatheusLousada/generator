import React, { useEffect, useState } from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { components, styles } from "./styles";
import { Grid } from "@mui/material";
import { TransferListComponentsProps } from "./interfaces/transferList.interface";
import { useGeneratorContext } from "../../../contexts/GeneratorContext";

const TransferListComponents: React.FC<TransferListComponentsProps> = ({
  endpoint,
}: TransferListComponentsProps) => {
  const { List, ListItem, Paper, FormHelperText, Button } = components;
  const { GridStyle, ButtonStyle } = styles;
  const { formData, setFormData, fileData } = useGeneratorContext();
  const [left, setLeft] = useState<string[]>([]);
  const [right, setRight] = useState<string[]>([]);
  const [checked, setChecked] = useState<string[]>([]);
  const [started, setStarted] = useState<boolean>(false);
  const leftChecked = left.filter((value) => checked.indexOf(value) !== -1);
  const rightChecked = right.filter((value) => checked.indexOf(value) !== -1);

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

  useEffect(() => {
    if (fileData && endpoint && !started) {
      const methods = fileData.paths[endpoint];
      setLeft(Object.keys(methods));
      setStarted(true);
    }
  }, [fileData, endpoint, started, formData]);

  useEffect(() => {
    if (right && formData && endpoint) {
      setFormData((prevFormData) => {
        const updatedSelectedEndpoints = prevFormData.selectedEndpoints.map(
          (item) =>
            item.endpoint === endpoint
              ? { ...item, selectedMethods: right }
              : item
        );
        return {
          ...prevFormData,
          selectedEndpoints: updatedSelectedEndpoints,
        };
      });
    }
  }, [right, endpoint]);

  const customList = (items: readonly string[]) => (
    <Paper>
      <List dense role="list">
        {items.map((value: string) => (
          <ListItem key={value} role="listitem" onClick={handleToggle(value)}>
            <ListItemIcon>
              <Checkbox
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{
                  "aria-labelledby": `transfer-list-item-${value}-label`,
                }}
                color="success"
              />
            </ListItemIcon>
            <ListItemText primary={value} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );

  return (
    <div style={{ marginBottom: "3rem" }}>
      <div>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item>{customList(left)}</Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              alignItems="center"
              style={GridStyle}
            >
              <Button
                variant="outlined"
                size="small"
                onClick={handleAllRight}
                disabled={left.length === 0}
                aria-label="move all right"
                sx={ButtonStyle}
              >
                ≫
              </Button>
              <Button
                variant="outlined"
                size="small"
                onClick={handleCheckedRight}
                disabled={leftChecked.length === 0}
                aria-label="move selected right"
                sx={ButtonStyle}
              >
                &gt;
              </Button>
              <Button
                variant="outlined"
                size="small"
                onClick={handleCheckedLeft}
                disabled={rightChecked.length === 0}
                aria-label="move selected left"
                sx={ButtonStyle}
              >
                &lt;
              </Button>
              <Button
                variant="outlined"
                size="small"
                onClick={handleAllLeft}
                disabled={right.length === 0}
                aria-label="move all left"
                sx={ButtonStyle}
              >
                ≪
              </Button>
            </Grid>
          </Grid>
          <Grid item>{customList(right)}</Grid>
        </Grid>
      </div>
      <div>
        <FormHelperText>
          Selecione os métodos desejados para este endpoint
        </FormHelperText>
      </div>
    </div>
  );
};

export default TransferListComponents;
