import React from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { components, styles } from "./styles";
import { Grid } from "@mui/material";
import { TransferListEndpointsProps } from "./interfaces/transferList.interface";

const TransferListEndpoints: React.FC<TransferListEndpointsProps> = ({
  left,
  right,
  onAllRight,
  onCheckedRight,
  onCheckedLeft,
  onAllLeft,
  onToggle,
  checked,
}: TransferListEndpointsProps) => {
  const leftChecked = left.filter((value) => checked.indexOf(value) !== -1);
  const rightChecked = right.filter((value) => checked.indexOf(value) !== -1);
  const { List, ListItem, Paper, FormHelperText, Button } = components;
  const { GridStyle, ButtonStyle } = styles;

  const customList = (items: readonly string[]) => (
    <Paper variant={"elevation"} elevation={3}>
      <List dense role="list">
        {items.map((value: string) => {
          const labelId = `transfer-list-item-${value}-label`;

          return (
            <ListItem key={value} role="listitem" onClick={onToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    "aria-labelledby": labelId,
                  }}
                  color="success"
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value} />
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );

  return (
    <div>
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
          Selecione os endpoints desejados para a geração dos arquivos
        </FormHelperText>
      </div>
    </div>
  );
};

export default TransferListEndpoints;
