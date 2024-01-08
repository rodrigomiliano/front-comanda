import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
import StoreIcon from "@material-ui/icons/Store";
import DoneIcon from "@mui/icons-material/Done";

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

function CrearOrdenAPage() {
  const { id } = useParams();
  const [productos, setProductos] = useState([]);
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);
  const [local, setLocal] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [locales, setLocales] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [mesas, setMesas] = useState([]);
  const [filteredProductos, setFilteredProductos] = useState([]);
  const navigate = useNavigate();
  const productosDelLocal = productosSeleccionados.filter(
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
    if (event.target.value != "") {
      setProductosSeleccionados(
        productos.filter((p) => p.categoria.nombre === event.target.value)
      );
    } else {
      setProductosSeleccionados(productos);
    }
  };

  useEffect(() => {
    // Llamada a la API para obtener las categorías
    fetch(`http://localhost:8080/comanda/mesa`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error obteniendo mesas");
        }
        return response.json();
      })
      .then((data) => {
        data = data.filter((m) => m.local.id == id);
        setMesas(data || []);
      })
      .catch((error) => {
        console.error("Error al obtener mesas:", error);
      });
  }, []);

  // Filtrar productos por categoría seleccionada

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const selectTable = (tableId) => {
    localStorage.setItem("tableId", tableId);
    navigate("/crear-orden-a/" + id);
  };

  return (
    <>
      <Grid container alignContent="flex-end" className={classes.flexMargin}>
        <StoreIcon fontSize="medium"></StoreIcon>
        {local && local.nombre && (
          <Typography component="h1" variant="h6">
            {local.nombre}
          </Typography>
        )}
      </Grid>

      <Grid container justifyContent="center" className={classes.flexTop}>
        <Grid item xs={5}>
          <Chip
            avatar={<Avatar></Avatar>}
            size="medium"
            label="Visualizar consumos"
            clickable
            color="primary"
            //disabled
          />
        </Grid>
      </Grid>

      <Container maxWidth="sm">
        <Box
          className={classes.fixed + " margin5 padding5 "}
          textAlign="center"
          fontSize="24px"
        >
          Seleccionar mesa
        </Box>
        <div>
          {/* Lista desplegable generada a partir de las categorías únicas */}

          {mesas.map((mesaItem) => (
            <Paper className="margin5 bc-gray" key={mesaItem.id}>
              <Grid container className="padding5" direction="column">
                <Grid item xs container>
                  <ButtonBase
                    className={classes.image}
                    component={Link}
                    to={`/ver-descripcion-producto/${mesaItem.id}`}
                  >
                    <Box>
                      <ul>
                        <li>{"Id: " + mesaItem.id}</li>
                        <li>{"Sillas: " + mesaItem.sillas}</li>
                        <li>{"Observaciones: " + mesaItem.observacion}</li>
                      </ul>
                    </Box>
                  </ButtonBase>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      className="underline"
                    >
                      {mesaItem.nombre}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {mesaItem.descripcion}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body2"
                      style={{ cursor: "pointer" }}
                    ></Typography>
                  </Grid>

                  <Grid item>
                    <Fab
                      color="primary"
                      aria-label="add"
                      size="small"
                      // component={Link}
                      // to={`/crear-orden/${producto.id}`}
                      onClick={() => selectTable(mesaItem.id)}
                    >
                      <DoneIcon />
                    </Fab>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </div>
        <br />
      </Container>
    </>
  );
}

export default CrearOrdenAPage;
