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
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select,
} from "@material-ui/core";

import ArrowBack from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import MultipleSelect from "../../components/MultipleSelect";
//import cloudinaryImage from "../../components/cloudinary/cloudinaryimage";
import UploadWidget from "../../components/cloudinary/UploadWidget";

const useStyles = makeStyles((theme) => ({
  flexTop: {
    marginTop: "30px",
  },
  flexMargin: {
    margin: "30px 0",
  },
}));

function AltaProductosPage2() {
  const classes = useStyles();
  const [categorias, setCategorias] = useState([]);
  const [locales, setLocales] = useState([]);
  const [formData, setFormData] = useState({
    nombre: "",
    categoriaId: "", // La propiedad se llama categoriaId en el front-end
    descripcion: "",
    precio: "",
    imagen: "",
    localId: "",
  });
  const [botonDeshabilitado, setBotonDeshabilitado] = useState(true);
  const [showWarning, setShowWarning] = useState(false);

  const handleImageUpload = (imageUrl) => {
    setFormData({ ...formData, imagen: imageUrl });
  };

  const handlePriceChange = (value) => {
    const isNumber = !isNaN(parseFloat(value)) && isFinite(value);
    const isFormDataValid =
      formData.nombre.trim() &&
      formData.descripcion.trim() &&
      value.trim() &&
      isNumber;

    setShowWarning(!isNumber);
    setFormData({ ...formData, precio: value });
    setBotonDeshabilitado(!isFormDataValid);
  };

  useEffect(() => {
    const isFormDataValid =
      formData.nombre.trim() &&
      formData.descripcion.trim() &&
      typeof formData.categoriaId !== "string" &&
      formData.precio.trim();

    setBotonDeshabilitado(!isFormDataValid || showWarning);
  }, [formData, showWarning]);

  // Código para obtener categorías...
  const obtenerCategorias = async () => {
    try {
      const response = await fetch("http://localhost:8080/comanda/categoria");
      if (response.ok) {
        const data = await response.json();
        setCategorias(data);
      } else {
        console.error("Error al obtener las categorías");
      }
    } catch (error) {
      console.error("Error al obtener las categorías:", error);
    }
  };

  // Código para obtener locales...
  const obtenerLocales = async () => {
    try {
      const response = await fetch("http://localhost:8080/comanda/local");
      if (response.ok) {
        const data = await response.json();
        setLocales(data);
      } else {
        console.error("Error al obtener los locales");
      }
    } catch (error) {
      console.error("Error al obtener los locales:", error);
    }
  };

  useEffect(() => {
    obtenerCategorias();
    obtenerLocales();
  }, []);

  const handleSubmit = async () => {
    if (botonDeshabilitado) {
      console.error("El nombre no puede estar vacío");
      return;
    }
    console.log(formData);
    try {
      const response = await fetch("http://localhost:8080/comanda/producto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Producto agregado correctamente");
        window.location.href = "/admin/alta-productos-3";
      } else {
        console.error(
          "Error al agregar el producto - Respuesta del servidor:",
          response.status
        );
        window.location.href = "/admin/alta-productos-2-error-1";
      }
    } catch (error) {
      console.error("Error al agregar el producto:", error);
      // Puedes mostrar el error en un componente, por ejemplo, si es relevante
      // setErrorMessage("Error al agregar el producto: " + error.message);
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
            to="/admin/alta-productos"
          >
            <ArrowBack />
          </Fab>
        </Grid>
        <Grid item xs={11}>
          <Box textAlign="center">
            <Typography component="h1" variant="h3">
              Productos
            </Typography>
          </Box>
        </Grid>
        <Grid item>{/*TODO Sacar esto y ajustar distribución. */}</Grid>
      </Grid>

      <Divider />

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item>
          <Typography component="h1" variant="h6">
            AGREGAR PRODUCTO
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xl={6}>
          <TextField
            label="Nombre"
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
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-helper-label">
              Categoría
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={formData.categoriaId}
              onChange={(e) =>
                setFormData({ ...formData, categoriaId: e.target.value })
              }
            >
              <FormHelperText>Categoría del producto</FormHelperText>
              <MenuItem value="">
                <em>Seleccione una categoría</em>
              </MenuItem>
              {categorias.map((cat) => (
                <MenuItem key={cat.id} value={cat.id}>
                  {cat.nombre}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Categoría del producto</FormHelperText>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xl={6}>
          <TextField
            label="Descripción"
            variant="outlined"
            value={formData.descripcion}
            onChange={(e) =>
              setFormData({ ...formData, descripcion: e.target.value })
            }
          />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xl={6}>
          <TextField
            label="Precio"
            variant="outlined"
            value={formData.precio}
            /*onChange={(e) =>
              setFormData({ ...formData, precio: e.target.value })
            }*/
            onChange={(e) => handlePriceChange(e.target.value)}
            //error={showWarning}
            //helperText={showWarning ? "Ingrese un valor numérico" : ""}
          />
          <Grid>
            {showWarning && (
              <Typography variant="caption" color="error">
                El precio debe ser un número válido.
              </Typography>
            )}
          </Grid>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xl={6}>
          <UploadWidget onImageUpload={handleImageUpload} />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xl={6}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-helper-label">Local</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={formData.localId}
              onChange={(e) =>
                setFormData({ ...formData, localId: e.target.value })
              }
            >
              <FormHelperText>Local del producto</FormHelperText>
              <MenuItem value="">
                <em>Seleccione un local</em>
              </MenuItem>
              {locales.map((loc) => (
                <MenuItem key={loc.id} value={loc.id}>
                  {loc.nombre}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Local del producto</FormHelperText>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/admin/alta-productos-3"
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
export default AltaProductosPage2;
