import { useEffect, useState } from "react";
import { Container, Typography, Grid, makeStyles, Paper, ButtonBase, Fab } from "@material-ui/core";
import { useParams, Link } from "react-router-dom";

import CardCategory from "../../components/CardCategory";
import StoreIcon from "@material-ui/icons/Store";
import ArrowBack from "@material-ui/icons/ArrowBack";
import axios from "axios"; 

const useStyles = makeStyles((theme) => ({
  flexTop: {
    marginTop: "15px",
  },
  flexMargin: {
    margin: "15px 0",
  },
  storeIcon: {
    marginRight: theme.spacing(1),
  },
  img: {
    maxWidth: "150px",
    maxHeight: "100px",
    objectFit: "cover",
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
  },
  productName: {
    fontWeight: "bold",
  },
  productPrice: {
    cursor: "pointer",
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
      fetch(`http://localhost:8080/comanda/categoria/${categoria.id}/locales`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((data) => {
          setLocalesConProductos(data);
        })
        .catch((err) => {
          console.error("Error al obtener locales con productos de la categoría:", err);
        });
    }
  }, [id, categoria]);
  

  return (
    <Container maxWidth="xs">
      {localesConProductos.length > 0 &&
        localesConProductos.map((local) => (
          <Paper key={local.id} className={classes.paper}>
          {/*<div key={`local-${local.id}`}>*/}
            <Typography variant="h6" gutterBottom>
              {local.nombre}
            </Typography>
           
          {/*</div>*/}
          </Paper>
        ))}
    </Container>
  );
}

 export default SearchCategory;
