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
} from "@material-ui/core";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import CarouselLink from "../../components/CarouselLink";
import MediaControlCard from "../../components/MediaControlCard";
import AddIcon from "@material-ui/icons/Add";
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
}));

function MenuItems() {
  const { id } = useParams();
  const [productos, setProductos] = useState([]);
  const [local, setLocal] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [locales, setLocales] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [filteredProductos, setFilteredProductos] = useState([]);
  const productosDelLocal = productos.filter(
    (producto) => producto.local.id === parseInt(id)
  );
  const classes = useStyles();

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
                  window.location.href = `/dashboard/resto/${selectedLocal.id}`;
                }
              }}
            />
          </Grid>
        </Grid>

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
                  to={`/dashboard/item/${producto.id}`}
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
                    to={`/dashboard/crear-orden/${producto.id}`}
                  >
                    <AddIcon />
                  </Fab>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        ))}

        {/*TODO: Tomar las categorias desde bd, no desde acá.  */}
        <Grid container justifyContent="center" className={classes.flexTop}>
          <Grid item xs={12}>
            <CarouselLink slides={category} />
          </Grid>
        </Grid>

        <Grid container justifyContent="center" className={classes.flexEnd}>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/dashboard/reservar-mesa-a"
            >
              RESERVAR
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

const category = [
  { text: "Pastas", link: "/pastas" },
  { text: "Parrilla", link: "/parrilla" },
  { text: "Ensaladas", link: "/ensaladas" },
  { text: "Entradas", link: "/entradas" },
  { text: "Postres", link: "/postres" },
  { text: "Bebidas", link: "/bebidas" },
  { text: "Vinos", link: "/vinos" },
];

export default MenuItems;
