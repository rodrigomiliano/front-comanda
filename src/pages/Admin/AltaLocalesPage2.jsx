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

function AltaLocalesPage2() {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    nombre: "",
    calle: "",
    altura: "",
    codigo_postal: "",
    telefono: "",
    imagen: "",
  });
  const [botonDeshabilitado, setBotonDeshabilitado] = useState(true);
  const [showAlturaWarning, setShowAlturaWarning] = useState(false);
  const [showCPWarning, setShowCPWarning] = useState(false);
  const [showTelWarning, setShowTelWarning] = useState(false);
  const [imageName, setImageName] = useState("");

  useEffect(() => {
    const isFormDataValid =
      formData.nombre.trim() &&
      formData.calle.trim() &&
      //formData.altura.trim() &&
      //formData.codigo_postal.trim() &&
      //formData.telefono.trim() &&
      formData.imagen.trim();

    setBotonDeshabilitado(
      !isFormDataValid || showAlturaWarning || showCPWarning || showTelWarning
    );
  }, [formData, showAlturaWarning, showCPWarning, showTelWarning]);

  const handleAlturaChange = (value) => {
    const isAlturaValid = !isNaN(parseInt(value)) && value.trim();
    setShowAlturaWarning(!isAlturaValid);
    setFormData({ ...formData, altura: value });
  };

  const handleCPChange = (value) => {
    const isCPValid = !isNaN(parseInt(value)) && value.trim();
    setShowCPWarning(!isCPValid);
    setFormData({ ...formData, codigo_postal: value });
  };

  const handleTelChange = (value) => {
    const isTelValid = !isNaN(parseInt(value)) && value.trim();
    setShowTelWarning(!isTelValid);
    setFormData({ ...formData, telefono: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      // Aquí puedes realizar acciones con el archivo leído, por ejemplo, enviarlo al servidor
      const base64String = reader.result;
      setFormData({ ...formData, imagen: base64String });
      setImageName(file.name); // Actualiza el nombre del archivo
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Función para enviar los datos al servidor
  const handleSubmit = async () => {
    if (botonDeshabilitado) {
      console.error("Todos los campos son obligatorios");
      return;
    }

    // Configura la solicitud POST
    const response = await fetch("http://localhost:8080/comanda/local", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // Envía el nombre en formato JSON
    });

    if (response.ok) {
      console.log("Local agregado correctamente");
      // Redireccionar a la página siguiente si se agrega correctamente
      window.location.href = "/admin/alta-locales-3";
    } else {
      console.error("Error al agregar el local");
      // Mostrar la página de error si falla la adición
      window.location.href = "/admin/alta-locales-2-error-1";
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
            to="/admin/alta-locales"
          >
            <ArrowBack />
          </Fab>
        </Grid>
        <Grid item xs={11}>
          <Box textAlign="center">
            <Typography component="h1" variant="h3">
              Locales
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Divider />

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item>
          <Typography component="h1" variant="h6">
            AGREGAR LOCAL
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xl={6}>
          <TextField
            label="Nombre"
            /*titulo="Local gastronómico"*/
            /*texto="Ingrese el nombre del local"*/
            variant="outlined"
            value={formData.nombre}
            onChange={(e) =>
              setFormData({ ...formData, nombre: e.target.value })
            }
          />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xl={6}>
          <TextField
            label="Calle"
            /*titulo="Local gastronómico"*/
            /*texto="Ingrese el nombre del local"*/
            variant="outlined"
            value={formData.calle}
            onChange={(e) =>
              setFormData({ ...formData, calle: e.target.value })
            }
          />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xl={6}>
          <TextField
            label="Altura"
            /*titulo="Local gastronómico"*/
            /*texto="Ingrese el nombre del local"*/
            variant="outlined"
            value={formData.altura}
            onChange={(e) => handleAlturaChange(e.target.value)}
          />
          <Grid>
            {showAlturaWarning && (
              <Typography variant="caption" color="error">
                La altura debe ser un número válido.
              </Typography>
            )}
          </Grid>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xl={6}>
          <TextField
            label="Codigo Postal"
            /*titulo="Local gastronómico"*/
            /*texto="Ingrese el nombre del local"*/
            variant="outlined"
            value={formData.codigo_postal}
            onChange={(e) => handleCPChange(e.target.value)}
          />
          <Grid>
            {showCPWarning && (
              <Typography variant="caption" color="error">
                El CP debe ser un número válido.
              </Typography>
            )}
          </Grid>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xl={6}>
          <TextField
            label="Teléfono"
            /*titulo="Local gastronómico"*/
            /*texto="Ingrese el nombre del local"*/
            variant="outlined"
            value={formData.telefono}
            onChange={(e) => handleTelChange(e.target.value)}
          />
          <Grid>
            {showTelWarning && (
              <Typography variant="caption" color="error">
                El teléfono debe ser un número válido.
              </Typography>
            )}
          </Grid>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xl={6}>
          {/*<TextField
            label="Imagen"         
            variant="outlined"
            value={formData.imagen}
            onChange={(e) =>
              setFormData({ ...formData, imagen: e.target.value })
            }
          />*/}
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="raised-button-file"
            type="file"
            onChange={handleImageChange}
          />
          <label htmlFor="raised-button-file">
            <Button variant="contained" color="primary" component="span">
              {imageName ? imageName : "Cargar Imagen"}
            </Button>
          </label>
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/admin/alta-locales-3"
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

export default AltaLocalesPage2;