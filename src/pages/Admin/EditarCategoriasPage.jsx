import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  Box,
  Divider,
  makeStyles,
  Fab,
  Button,
  TextField,
} from "@material-ui/core";
import ArrowBack from "@material-ui/icons/ArrowBack";
import MultipleSelect from "../../components/MultipleSelect";
import AlertComanda from "../../components/AlertComanda";

const useStyles = makeStyles((theme) => ({
  flexTop: {
    marginTop: "30px",
  },
  flexMargin: {
    margin: "30px 0",
  },
}));

function EditarCategoriasPage() {
  const classes = useStyles();
  const [categoria, setCategoria] = useState(null);
  const [nombreCategoria, setNombreCategoria] = useState("");
  const { id } = useParams();  
  const [botonDeshabilitado, setBotonDeshabilitado] = useState(true);

  useEffect(() => {
    setBotonDeshabilitado(!nombreCategoria || nombreCategoria.trim() === "");
  }, [nombreCategoria]);

  useEffect(() => {
    //console.log("Estado local nombreCategoria:", nombreCategoria);
    fetch(`http://localhost:8080/comanda/categoria/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // Asegúrate de que nombreCategoria tenga el valor correcto antes de actualizar el estado
        setNombreCategoria(data.nombre);
        setCategoria(data);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  }, [id]);

  const handleGuardar = () => {
    if (botonDeshabilitado) {
      console.error("El nombre no puede estar vacío");
      return;
    }
  
    console.log("Nombre a guardar:", nombreCategoria);
    fetch(`http://localhost:8080/comanda/categoria/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre: nombreCategoria }),
    })
      .then((response) => {
        if (!response.ok) {
          console.error("Error al actualizar la categoría:", response.status);
          window.location.href = "/admin/editar-categorias-error-1";
          throw new Error("Error al actualizar la categoría");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Datos actualizados:", data);
      })
      .catch((error) => {
        console.error("Error al actualizar la categoría:", error);
      });
  };

  return (
    <Container maxWidth="xl">
      <Grid container justifyContent="center" className={classes.flexTop}>
        <Grid item>
          <Fab
            size="small"
            color="primary"
            aria-label="arrow"
            component={Link}
            to="/admin/alta-categorias"
          >
            <ArrowBack />
          </Fab>
        </Grid>
        <Grid item xs={11}>
          <Box textAlign="center">
            <Typography component="h1" variant="h3">
              Categorías
            </Typography>
          </Box>
        </Grid>        
      </Grid>

      <Divider />

      {/* Mostrar mensaje de error si el nombre está vacío */}
      {(!nombreCategoria || nombreCategoria.trim() === "") && (
        <Grid container justifyContent="center" className={classes.flexMargin}>
          <Grid item>
            <AlertComanda
              sev="warning"
              tit="¡Atención!"
              desc="El nombre no puede estar vacío"
            />
          </Grid>
        </Grid>
      )}

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item>
          {categoria && categoria.nombre && (
            <Typography component="h1" variant="h6">
              EDITAR CATEGORIA: {categoria.nombre}
            </Typography>
          )}
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xl={6}>
          {/*<LayoutTextFields
            id="nombreCategoria"  // Asegúrate de agregar un id
            titulo="Nombre"
            texto={nombreCategoria}
            value={nombreCategoria} // Asigna el valor del estado local al campo de entrada
            onChange={(e) => setNombreCategoria(e.target.value)} // Actualiza el estado local cuando el valor cambia
          />*/}
          <label htmlFor="nombreCategoria">
            <TextField
              id="nombreCategoria"
              label="Nombre"
              variant="outlined"
              fullWidth
              value={nombreCategoria}
              onChange={(e) => setNombreCategoria(e.target.value)}
            />
          </label>
        </Grid>
      </Grid>

      {/*<Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item>
          <MultipleSelect></MultipleSelect>
        </Grid>
      </Grid>*/}

      <Grid container justifyContent="center">
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/admin/editar-categorias-2"
            onClick={handleGuardar}
            disabled={botonDeshabilitado}
          >
            GUARDAR
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default EditarCategoriasPage;
