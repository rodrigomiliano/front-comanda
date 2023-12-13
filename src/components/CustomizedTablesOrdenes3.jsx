import React from "react";
import { withStyles, makeStyles, Grid } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Switch from "@material-ui/core/Switch";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import DialogInfo from "./DialogInfo";

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

/* function createData(id, nombre, descripcion, id_local, estado, acciones) {
  return {
    id,
    nombre,
    descripcion,
    id_local,
    estado,
    acciones,
  };
} */

const rows = [
  /* createData('01', 'local 1', 'calle 1', 'hora 1', 4.0), */
  /* createData('02', 'local 2', 'calle 2', 'hora 2', 4.3), */
  /* createData('03', 'local 3', 'calle 3', 'hora 3', 6.0), */
  /* createData('04', 'local 4', 'calle 4', 'hora 4', 4.3), */
  /*createData("05", "local 5", "calle 5", "hora 5", 3.9),*/
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables({ consumidos }) {
  const classes = useStyles();
  /* const { id, nombre, direccion, horarios } = local; */

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {/* <StyledTableCell align="center">ID</StyledTableCell> */}
            <StyledTableCell align="center">CANTIDAD</StyledTableCell>
            <StyledTableCell align="center">NOMBRE</StyledTableCell>
            <StyledTableCell align="center">PRECIO</StyledTableCell>
            <StyledTableCell align="center">ACCIONES</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {consumidos &&
            consumidos.map(
              ({ id, cantidad, nombre, precio, acciones }) => (
                <StyledTableRow key={id}>
                  {/* <StyledTableCell align="center">{id}</StyledTableCell> */}
                  <StyledTableCell align="center">{cantidad}</StyledTableCell>
                  <StyledTableCell align="center">{nombre}</StyledTableCell>
                  <StyledTableCell align="center">{precio}</StyledTableCell>
                  <StyledTableCell align="center">
                    {/*TODO Si muevo uno, se mueven todos. Revisar! */}
                    <Switch
                      checked={state.checkedB}
                      onChange={handleChange}
                      color="primary"
                      name="checkedB"
                      inputProps={{ "aria-label": "primary checkbox" }}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              )
            )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
