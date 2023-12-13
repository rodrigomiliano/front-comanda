import React, { useEffect, useState } from "react";
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
import { Link } from "react-router-dom";
import MultipleSelect from "../../components/MultipleSelect";

const useStyles = makeStyles((theme) => ({
  flexTop: {
    marginTop: "30px",
  },
  flexMargin: {
    margin: "30px 0",
  },
}));

function AltaCategoriasPage2() {
  const classes = useStyles();
  const [nombre, setNombre] = useState(""); // Estado para almacenar el nombre de la categoría
  const [botonDeshabilitado, setBotonDeshabilitado] = useState(true);

  useEffect(() => {
    setBotonDeshabilitado(!nombre || nombre.trim() === "");
  }, [nombre]);

  // Manejar cambios en el campo de entrada de nombre
  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  // Función para enviar los datos al servidor
  const handleSubmit = async () => {
    if (botonDeshabilitado) {
      console.error("El nombre no puede estar vacío");
      return;
    }   

    // Configura la solicitud POST
    const response = await fetch("http://localhost:8080/comanda/categoria", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre }), // Envía el nombre en formato JSON
    });

    if (response.ok) {
      console.log("Categoría agregada correctamente");
      // Redireccionar a la página siguiente si se agrega correctamente
      window.location.href = "/admin/alta-categorias-3";
    } else {
      console.error("Error al agregar la categoría");
      // Mostrar la página de error si falla la adición
      window.location.href = "/admin/alta-categorias-2-error-1";
    }
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

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item>
          <Typography component="h1" variant="h6">
            AGREGAR CATEGORIA
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item>
          <TextField /*TODO: con LayoutTextFields no funciona*/
            label="Nombre"
            /*titulo="Nombre"*/
            /*texto="Ingrese el nombre de la categoría"*/
            variant="outlined"
            value={nombre}
            onChange={handleNombreChange}
          />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item>
          <MultipleSelect></MultipleSelect>
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/admin/alta-categorias-3"
            onClick={handleSubmit}
            disabled={botonDeshabilitado}
          >
            SIGUIENTE
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AltaCategoriasPage2;
