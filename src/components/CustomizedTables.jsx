import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { LocalSee } from "@material-ui/icons";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(id, nombre, direccion, horarios) {
  return { id, nombre, direccion, horarios };
}

const rows = [
  /* createData('01', 'local 1', 'calle 1', 'hora 1', 4.0), */
  /* createData('02', 'local 2', 'calle 2', 'hora 2', 4.3), */
  /* createData('03', 'local 3', 'calle 3', 'hora 3', 6.0), */
  /* createData('04', 'local 4', 'calle 4', 'hora 4', 4.3), */
  /* createData("05", "local 5", "calle 5", "hora 5", 3.9), */
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables({ locales }) {
  const classes = useStyles();
  /* const { id, nombre, direccion, horarios } = local; */

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="right">Nombre</StyledTableCell>
            <StyledTableCell align="right">Direccion</StyledTableCell>
            <StyledTableCell align="right">Horarios</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {locales &&
            locales.map(({ id, nombre, direccion, horarios }) => (
              <StyledTableRow key={id}>
                <StyledTableCell align="right">{id}</StyledTableCell>
                <StyledTableCell align="right">{nombre}</StyledTableCell>
                <StyledTableCell align="right">{direccion}</StyledTableCell>
                <StyledTableCell align="right">{horarios}</StyledTableCell>                
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
