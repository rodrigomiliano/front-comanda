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
  const [categoria, setCategoria] = useState(null); 
 const { id } = useParams();  
 //const [localesConCategoria, setLocalesConCategoria] = useState([]);

 useEffect(() => {    
  fetch(`http://localhost:8080/comanda/categoria/${id}`)
    .then((res) => res.json())
    .then((data) => {
      setCategoria(data);
    })
    .catch((err) => {
      console.error("Error al obtener datos:", err);
    });    
}, [id]);
  
  return (
    <Container maxWidth="xs">
      <Grid container justifyContent="center" className={classes.flexMargin}>
      {categoria && categoria.nombre && (
        <Typography component="h1" variant="h5">
          Categoria: {categoria.nombre}  
        </Typography>
        )}
      </Grid>

      {/*{locales &&
        locales.map(({ nombre, direccion }, index) => (
          <Link to="/dashboard/resto" key={index}>
            <CardCategory nombre={nombre} direccion={direccion} />
          </Link>
        ))}*/}
        {/* Muestra los locales con productos de la categoría */}
      {/*{localesConCategoria.map((local, index) => (
        <Link to={`/dashboard/resto/${local.id}`} key={index}>
          <CardCategory nombre={local.nombre} direccion={local.direccion} />
        </Link>
      ))}*/}
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
] */;

export default SearchCategory;
