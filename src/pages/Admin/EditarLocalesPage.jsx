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
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl, // Asegúrate de importar FormControl
  Select,
} from "@material-ui/core";
import ArrowBack from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  flexTop: {
    marginTop: "30px",
  },
  flexMargin: {
    margin: "30px 0",
  },
}));

function EditarLocalesPage() {
  const classes = useStyles();
  const [local, setLocal] = useState(null);
  const [nombre, setNombre] = useState("");
  const [calle, setCalle] = useState("");
  const [altura, setAltura] = useState("");
  const [codigo_postal, setCodigo_postal] = useState("");
  const [telefono, setTelefono] = useState("");
  const [imagen, setImagen] = useState("");
  const { id } = useParams();
  const [botonDeshabilitado, setBotonDeshabilitado] = useState(true);
  const [showAlturaWarning, setShowAlturaWarning] = useState(false);
  const [showCPWarning, setShowCPWarning] = useState(false);
  const [showTelWarning, setShowTelWarning] = useState(false);

  useEffect(() => {
    const isNumericAltura = !altura || String(altura).trim() === "" || Number.isInteger(parseFloat(altura));
    const isNumericCP = !codigo_postal || String(codigo_postal).trim() === "" || Number.isInteger(parseFloat(codigo_postal));
    const isNumericTel = !telefono || String(telefono).trim() === "" || Number.isInteger(parseFloat(telefono));
  
    const camposCompletos =
      nombre.trim() && calle.trim() && imagen.trim() &&
      isNumericAltura &&
      isNumericCP &&
      isNumericTel;
  
    const camposNulos = !altura || !codigo_postal || !telefono;
  
    setBotonDeshabilitado(!camposCompletos || camposNulos);
  }, [nombre, calle, imagen, altura, codigo_postal, telefono]);
  
  /*
  const handleAlturaChange = (e) => {
    const value = e.target.value;
    setAltura(value);
    setShowAlturaWarning(
      value.trim() !== "" &&
        (isNaN(value) || !Number.isInteger(parseFloat(value)))
    );
  };

  const handleCodigoPostalChange = (e) => {
    const value = e.target.value;
    setCodigo_postal(value);
    setShowCPWarning(
      value.trim() !== "" &&
        (isNaN(parseInt(value)) || !Number.isInteger(parseFloat(value)))
    );
  };

  const handleTelefonoChange = (e) => {
    const value = e.target.value;
    setTelefono(value);
    setShowTelWarning(
      value.trim() !== "" &&
        (isNaN(parseInt(value)) || !Number.isInteger(parseFloat(value)))
    );
  };*/


  const handleAlturaChange = (e) => {
    const value = e.target.value;
    setAltura(value);
    setShowAlturaWarning(value.trim() !== '' && (isNaN(value) || !Number.isInteger(parseFloat(value))));
  };
  
  const handleCodigoPostalChange = (e) => {
    const value = e.target.value;
    setCodigo_postal(value);
    setShowCPWarning(value.trim() !== '' && (isNaN(parseInt(value)) || !Number.isInteger(parseFloat(value))));
  };
  
  const handleTelefonoChange = (e) => {
    const value = e.target.value;
    setTelefono(value);
    setShowTelWarning(value.trim() !== '' && (isNaN(parseInt(value)) || !Number.isInteger(parseFloat(value))));
  };
  


  useEffect(() => {
    fetch(`http://localhost:8080/comanda/local/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setNombre(data.nombre);
        setCalle(data.calle);
        setAltura(data.altura);
        setCodigo_postal(data.codigo_postal); // Actualiza con el nombre de propiedad correcto
        setTelefono(data.telefono);
        setImagen(data.imagen);
        setLocal(data);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  }, [id]);

  const handleGuardar = () => {
    if (botonDeshabilitado) {
      console.error("Por favor complete los campos correctamente");
      return;
    }

    fetch(`http://localhost:8080/comanda/local/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: nombre,
        calle: calle,
        altura: altura,
        codigo_postal: codigo_postal,
        telefono: telefono,
        imagen: imagen,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          console.error("Error al actualizar el local:", response.status);
          window.location.href = "/admin/editar-locales-error-1";
          throw new Error("Error al actualizar el local");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Datos actualizados:", data);
        // Obtener la lista actualizada de locales después de editar
        fetch("http://localhost:8080/comanda/local")
          .then((response) => response.json())
          .then((data) => {
            setLocales(data); // Actualizar el estado de locales
            // Redirigir a la página de lista de locales después de editar
            window.location.href = "/admin/editar-locales-2";
          })
          .catch((error) => {
            //console.error("Error al obtener locales después de editar:", error);
          });
      })
      .catch((error) => {
        //console.error("Error al actualizar el local:", error);
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
          {local && local.nombre && (
            <Typography component="h1" variant="h6">
              EDITAR LOCAL: {local.nombre}
            </Typography>
          )}
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xl={6}>
          <label htmlFor="nombre">
            <TextField
              id="nombre"
              label="Nombre"
              variant="outlined"
              fullWidth
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </label>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xl={6}>
          <label htmlFor="calle">
            <TextField
              id="calle"
              label="Calle"
              variant="outlined"
              fullWidth
              value={calle}
              onChange={(e) => setCalle(e.target.value)}
            />
          </label>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xl={6}>
          <label htmlFor="altura">
            <TextField
              id="altura"
              label="Altura"
              variant="outlined"
              fullWidth
              value={altura}
              onChange={(e) => handleAlturaChange(e)}
            />
          </label>
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
          <label htmlFor="codigo_postal">
            <TextField
              id="codigo_postal"
              label="Codigo Postal"
              variant="outlined"
              fullWidth
              value={codigo_postal}
              onChange={(e) => handleCodigoPostalChange(e)}
              //onChange={(e) => setCodigo_postal(e.target.value)}
            />
          </label>
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
          <label htmlFor="telefono">
            <TextField
              id="telefono"
              label="Telefono"
              variant="outlined"
              fullWidth
              value={telefono}
              onChange={(e) => handleTelefonoChange(e)}
              //onChange={(e) => setTelefono(e.target.value)}
            />
          </label>
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
          <label htmlFor="imagen">
            <TextField
              id="imagen"
              label="Imagen URL"
              variant="outlined"
              fullWidth
              value={imagen}
              onChange={(e) => setImagen(e.target.value)}
            />
          </label>
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/admin/editar-locales-2"
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

export default EditarLocalesPage;
