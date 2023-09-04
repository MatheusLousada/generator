import React, { useEffect } from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { components, styles } from "./styles";
import { Grid } from "@mui/material";
import { TransferListMethodsProps } from "./interfaces/transferList.interface";
import { useGeneratorContext } from "../../../contexts/GeneratorContext";

const TransferListMethods: React.FC<TransferListMethodsProps> = ({
  left,
  setLeft,
  right,
  onAllRight,
  onCheckedRight,
  onCheckedLeft,
  onAllLeft,
  onToggle,
  checked,
  endpoint,
}: TransferListMethodsProps) => {
  const { List, ListItem, Paper, FormHelperText, Button } = components;
  const { GridStyle, ButtonStyle } = styles;
  const { formData, setFormData, fileData } = useGeneratorContext();
  const leftChecked = left.filter((value) => checked.indexOf(value) !== -1);
  const rightChecked = right.filter((value) => checked.indexOf(value) !== -1);

  useEffect(() => {
    if (formData) {
      console.log("formData: ", formData);
    }
  }, [formData]);

  useEffect(() => {
    if (fileData) {
      console.log("fileData: ", fileData);
    }
  }, [fileData]);

  useEffect(() => {
    if (fileData && endpoint) {
      const methods = fileData.paths[endpoint];
      setLeft(Object.keys(methods));

      // Atualize selectedMethods no objeto formData
      // const updatedSelectedEndpoints = formData.selectedEndpoints.map(
      //   (selectedEndpoint) => {
      //     if (selectedEndpoint.endpoint === endpoint) {
      //       return {
      //         ...selectedEndpoint,
      //         selectedMethods: Object.keys(methods),
      //       };
      //     }
      //     return selectedEndpoint;
      //   }
      // );

      // setFormData(updatedSelectedEndpoints);
    }
  }, [fileData, endpoint, setLeft, setFormData]);

  const customList = (items: readonly string[]) => (
    <Paper>
      <List dense role="list">
        {items.map((value: string) => (
          <ListItem key={value} role="listitem" onClick={() => onToggle(value)}>
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
                onClick={onAllRight}
                disabled={left.length === 0}
                aria-label="move all right"
                sx={ButtonStyle}
              >
                ≫
              </Button>
              <Button
                variant="outlined"
                size="small"
                onClick={onCheckedRight}
                disabled={leftChecked.length === 0}
                aria-label="move selected right"
                sx={ButtonStyle}
              >
                &gt;
              </Button>
              <Button
                variant="outlined"
                size="small"
                onClick={onCheckedLeft}
                disabled={rightChecked.length === 0}
                aria-label="move selected left"
                sx={ButtonStyle}
              >
                &lt;
              </Button>
              <Button
                variant="outlined"
                size="small"
                onClick={onAllLeft}
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

export default TransferListMethods;
