import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  makeStyles,
  Button,
  Paper,
  ButtonBase,
  Fab,
  TextField,
  Chip,
  Avatar,
  Box,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import MediaControlCard from "../../components/MediaControlCard";
import AddIcon from "@material-ui/icons/Add";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios"; // Asegúrate de tener axios instalado

const useStyles = makeStyles((theme) => ({
  flexTop: {
    marginTop: "15px",
  },
  flexMargin: {
    margin: "15px 0",
  },
  flexEnd: {
    paddingBottom: "70px",
  },
  total: {
    marginRight: "20px",
    borderRadius: "30px",
    backgroundColor: theme.palette.success.dark,
    padding: "8px",
    color: "white",
    width: "100%",
    fontSize: "18px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

function AgregarAdicionalesPage1() {
  const { id } = useParams();
  const [productos, setProductos] = useState([]);
  const [local, setLocal] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [locales, setLocales] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState([]);
  const [filteredProductos, setFilteredProductos] = useState([]);
  const productosDelLocal = productos.filter(
    (producto) => producto.local.id === parseInt(id)
  );
  const classes = useStyles();
  // Agregar un estado para la categoría seleccionada
  const [selectedCategory, setSelectedCategory] = useState("");
  // Obtener categorías únicas de los productos del local seleccionado
  const categoriesFromProducts = productosDelLocal.map(
    (producto) => producto.categoria
  );
  const uniqueCategories = Array.from(new Set(categoriesFromProducts));

  // Función para filtrar productos por categoría seleccionada
  const filterProductsByCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  useEffect(() => {
    // Llamada a la API para obtener las categorías
    fetch(`http://localhost:8080/comanda/categoria`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCategoria(data || []);
      })
      .catch((error) => {
        console.error("Error al obtener categorías:", error);
      });
  }, []);

  // Filtrar productos por categoría seleccionada
  const filteredProducts = productosDelLocal.filter(
    (producto) =>
      selectedCategory === "" || producto.categoria === selectedCategory
  );

  useEffect(() => {
    console.log("ID del local:", id);
    fetch(`http://localhost:8080/comanda/producto/local/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Datos recibidos:", data);
        setProductos(data || []);
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
      });
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:8080/comanda/local/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setLocal(data);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  }, [id]);

  useEffect(() => {
    // Llamada a la API para obtener productos
    async function fetchData() {
      try {
        const productosResponse = await axios.get(
          "http://localhost:8080/comanda/producto"
        );
        setProductos(productosResponse.data);
      } catch (error) {
        console.error("Error al obtener datos desde el servidor", error);
      }
    }

    fetchData();
  }, []);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const getFilteredItems = () => {
    const filteredProductos = productos.filter(
      (producto) =>
        producto.local.id.toString() === id.toString() && // Comparar IDs del local
        producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return [...filteredProductos].map((item) => item.nombre);
  };

  return (
    <>
      <Grid container alignContent="flex-end" className={classes.flexMargin}>
        <LocalOfferIcon fontSize="small"></LocalOfferIcon>
        {local && local.nombre && (
          <Typography component="h1" variant="h6">
            {local.nombre}
          </Typography>
        )}
      </Grid>

      <Grid container justifyContent="center" className={classes.flexTop}>
        <Grid item xs={5}>
          <Chip
            avatar={<Avatar>$</Avatar>}
            size="medium"
            label="Visualizar consumos"
            clickable
            color="primary"
            component={Link}
            to="/visualizar-consumos"
          />
        </Grid>
      </Grid>

      <Container maxWidth="sm">
        <Grid container justifyContent="center" className={classes.flexMargin}>
          <Grid item xs={12}>
            <Autocomplete
              freeSolo
              disableClearable
              options={getFilteredItems()}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Buscar"
                  margin="normal"
                  variant="outlined"
                  onChange={(e) => handleSearch(e.target.value)}
                />
              )}
              onChange={(e, value) => {
                const selectedLocal = locales.find(
                  (local) => local.nombre === value
                );
                if (selectedLocal) {
                  // Redirige a la página de detalles del local con el ID del local seleccionado
                  window.location.href = `/resto/${selectedLocal.id}`;
                }
              }}
            />
          </Grid>
        </Grid>

        {/* Lista desplegable generada a partir de las categorías únicas */}
        <select value={selectedCategory} onChange={filterProductsByCategory}>
          <option value="">Todas las categorías</option>
          {categoria.map((cat) => (
            <option key={cat.id} value={cat.nombre}>
              {cat.nombre}
            </option>
          ))}
        </select>

        {/* Filtrar y mostrar los productos */}
        {productosDelLocal
          .filter((producto) => {
            if (selectedCategory === "") {
              return true; // Mostrar todos si no se ha seleccionado una categoría
            }
            return producto.categoria === selectedCategory;
          })
          .map((producto) => (
            // Aquí muestras los productos que coinciden con la categoría seleccionada
            <div key={producto.id}>{producto.nombre}</div>
          ))}

        {/* Mostrar locales y categorías filtrados */}
        {filteredProductos.map((producto) => (
          <div key={producto.id}>{producto.nombre}</div>
        ))}

        {productosDelLocal.map((producto) => (
          <Paper key={producto.id} className={classes.paper}>
            <Grid container spacing={1}>
              <Grid item>
                <ButtonBase
                  className={classes.image}
                  component={Link}
                  to={`/ver-descripcion-producto/${producto.id}`}
                >
                  <img
                    className={classes.img}
                    alt="Imagen del producto"
                    src={producto.imagen} // Ajusta esto según la estructura de tu objeto producto
                    style={{
                      maxWidth: "150px",
                      maxHeight: "100px",
                      objectFit: "cover", // Ajusta el objetoFit según tu preferencia
                    }}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      {producto.nombre}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {producto.descripcion}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: "pointer" }}>
                      ${producto.precio}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Fab
                    color="primary"
                    aria-label="add"
                    size="small"
                    component={Link}
                    to={`/crear-orden/${producto.id}`}
                  >
                    <AddIcon />
                  </Fab>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        ))}

        <Box>
          <Box className={classes.total}>
            <Button
              variant="contained"
              color="primary"              
              style={{ marginLeft: "20px", borderRadius: "30px" }}
              startIcon={<ShoppingCartIcon />}
              component={Link}
              to="/agregar-adicionales-3"
            >
              0
            </Button>
            <Button
              variant="contained"
              color="primary"              
              style={{ borderRadius: "30px" }}
              component={Link}
              to="/agregar-adicionales-3"
            >
              Seguir pidiendo
            </Button>
            <Box style={{ marginRight: "20px" }}>Total: $0</Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default AgregarAdicionalesPage1;
