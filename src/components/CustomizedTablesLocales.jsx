import React from "react";
import {
  withStyles,
  makeStyles,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
  Switch,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
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

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

/*
export default function CustomizedTables({ locales }) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
*/

export default function CustomizedTables({
  locales,
  handleEdit,
  handleDelete,
}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="center">NOMBRE</StyledTableCell>
            <StyledTableCell align="center">CALLE</StyledTableCell>
            <StyledTableCell align="center">ALTURA</StyledTableCell>
            <StyledTableCell align="center">CP</StyledTableCell>
            <StyledTableCell align="center">TEL</StyledTableCell>
            <StyledTableCell align="center">IMG</StyledTableCell>
            <StyledTableCell align="center">HORARIOS</StyledTableCell>
            <StyledTableCell align="center">ACTIVO</StyledTableCell>
            <StyledTableCell align="center">ACCIONES</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {locales &&
            locales.map(
              ({
                id,
                nombre,
                calle,
                altura,
                codigo_postal,
                telefono,
                imagen,
                horarios,
                activo,
              }) => (
                <StyledTableRow key={id}>
                  <StyledTableCell align="center">{id}</StyledTableCell>
                  <StyledTableCell align="center">{nombre}</StyledTableCell>
                  <StyledTableCell align="center">{calle}</StyledTableCell>
                  <StyledTableCell align="center">{altura}</StyledTableCell>
                  <StyledTableCell align="center">
                    {codigo_postal}
                  </StyledTableCell>
                  <StyledTableCell align="center">{telefono}</StyledTableCell>                  
                  <StyledTableCell align="center">
                    <img
                      src={imagen}
                      alt="Imagen del local"
                      style={{ width: "100px", height: "auto" }}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="center">{horarios}</StyledTableCell>
                  <StyledTableCell align="center">
                    <Switch checked={activo} readOnly />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Grid
                      container
                      justifyContent="center"
                      className={classes.flexMargin}
                      spacing={2}
                    >
                      <Grid item xs={3}>
                        <IconButton
                          /* CAMBIA */
                          /*
                        size="small"
                        aria-label="edit"
                        component={Link}
                        to="/admin/editar-locales"
                        */
                          aria-label="edit"
                          onClick={() => handleEdit(id)}
                        >
                          <EditIcon />
                        </IconButton>
                      </Grid>

                      <Grid item xs={3}>
                        <DialogInfo
                          mensaje={
                            <DeleteIcon size="small" aria-label="delete" />
                          }
                          pregunta="¿Realmente desea eliminar el local?"
                          btnIzquierda="Cancelar"
                          btnDerecha="Aceptar"
                          /* AGREGAMOS ESTA LÍNEA */
                          onConfirm={() => handleDelete(id)}
                          hrefIzquierda=""
                          hrefDerecha="baja-locales"
                        />
                      </Grid>
                    </Grid>
                  </StyledTableCell>
                </StyledTableRow>
              )
            )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
