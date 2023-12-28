import { useEffect, useState } from "react";
import { Container, Typography, Grid, makeStyles } from "@material-ui/core";
import { useParams, Link } from "react-router-dom";

import CardCategory from "../../components/CardCategory";

const useStyles = makeStyles((theme) => ({
  flexTop: {
    marginTop: "15px",
  },
  flexMargin: {
    margin: "15px 0",
  },
}));

function SearchCategory() {
  const classes = useStyles();
  //const [locales, setLocales] = useState(null);
  //const [categoria, setCategoria] = useState(null);
  const { id } = useParams();
  //const [localesConCategoria, setLocalesConCategoria] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState({});
  const [localesConCategoria, setLocalesConCategoria] = useState([]);
  const [localesConProductos, setLocalesConProductos] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:8080/comanda/categoria/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoria(data);
      })
      .catch((err) => {
        console.error("Error al obtener datos de la categoría:", err);
      });
  }, [id]);

  useEffect(() => {
    console.log("Datos de categoría:", categoria);
    console.log("Locales con categoría:", localesConCategoria);

    if (categoria && categoria.id) {
      fetch(`http://localhost:8080/comanda/producto/categoria/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setLocalesConCategoria(data);
        })
        .catch((err) => {
          console.error("Error al obtener locales con la categoría:", err);
        });
    }
  }, [id, categoria]);

  useEffect(() => {
    if (categoria && categoria.id) {
      fetch(`http://localhost:8080/comanda/local/producto/categoria/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setLocalesConProductos(data);
        })
        .catch((err) => {
          console.error(
            "Error al obtener locales con productos de la categoría:",
            err
          );
        });
    }
  }, [id, categoria]);

  return (
    <Container maxWidth="xs">
      {localesConProductos.length > 0 &&
        localesConProductos.map((local) => (
          <div key={local.id}>
            <Typography variant="h6" gutterBottom>
              {local.nombre}
            </Typography>
            {local.productos &&
              local.productos.length > 0 &&
              local.productos.map((producto) => (
                <Paper key={producto.id} className={classes.paper}>
                  {/* Renderizar los detalles del producto */}
                  {/* Aquí colocarías el código para mostrar los detalles del producto */}
                  <Typography>{producto.nombre}</Typography>
                  {/* ... otros detalles del producto */}
                </Paper>
              ))}
          </div>
        ))}
    </Container>
  );
}

/* const topPlates = [
  {
    plate: "Il Balo del Mattone",
    img: "/img/fideos-estilo-singapur.jpg",
    text: "Niceto Vega 2339",
  },
  { plate: "La Choza", img: "/img/gambas-al-ajillo.jpg", text: "Aráoz 129" },
  { plate: "Tempo de Pasta", img: "/img/lemon-pie.jpg", text: "Riobamba 2521" },
  {
    plate: "Los 33 Orientales",
    img: "/img/lemon-pie.jpg",
    text: "33 Orientales 212",
  },
] */ export default SearchCategory;
