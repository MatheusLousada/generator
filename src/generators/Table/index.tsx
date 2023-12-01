import { ComponentsEndpoints } from "../../contexts/interfaces/generator.interface";
import AbstractGenerator from "../AbstractGenerator";

class TableGenerator extends AbstractGenerator {
  constructor(type: string, endpoints: ComponentsEndpoints[], count: number) {
    super(type, endpoints, count);
    super.setParameters(this.getParameters());
  }

  getParameters(): string[] {
    return ["columns", "rows"];
  }

  generateView(): string {
    return `
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

interface TableProps {
  columns: string[];
  rows: { [key: string]: any }[];
}

export default function ${this.type}${this.count}({ columns, rows }: TableProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns && columns.map((column) => (
              <TableCell key={column}>{column.toUpperCase()}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows && rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {columns && columns.map((column) => (
                <TableCell key={column} component="th" scope="row">
                  {typeof row[column] === 'boolean' ? (row[column] ? 'Sim' : 'Não') : row[column]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}`;
  }
}

export default TableGenerator;
