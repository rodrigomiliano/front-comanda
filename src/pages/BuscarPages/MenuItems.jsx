import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  Button,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import CarouselLink from "../../components/CarouselLink";
import MediaControlCard from "../../components/MediaControlCard";

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
  const [itemsMenu, setItemsMenu] = useState(null);
  const { id } = useParams();
  const [productos, setProductos] = useState([]);
  const [locales, setLocales] = useState([]);
  /* const [categories, setCategories] = useState(null); */
  /*
  useEffect(() => {
    fetch("http://localhost:8000/itemsMenu")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItemsMenu(data);
      })
      .catch((err) => {
        console.error("Instalar json-server");
      });

    /* fetch("http://localhost:8000/categories")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => {
        console.error("Instalar json-server");
      }); */
  //}, []);

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
        console.log("Datos recibidos:", data); // Verifica los datos que estás recibiendo
        setProductos(data || []);
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
      });
  }, [id]);

  console.log("Productos:", productos); // Verifica los productos después de establecerlos

  const classes = useStyles();
  return (
    <>
      <Container maxWidth="sm">
        <Grid container justifyContent="center" className={classes.flexMargin}>
          <Grid item xs={12}>
            <SearchBar />
          </Grid>
        </Grid>

        <Grid container alignContent="flex-end" className={classes.flexMargin}>
          <LocalOfferIcon fontSize="small"></LocalOfferIcon>
          <Typography component="h1" variant="h6">
            Bodegón
          </Typography>
        </Grid>

        <div>
          <h1>Productos del local</h1>
          {/* Verifica si productos tiene datos */}
          {productos.length > 0 ? (
            <ul>
              {productos.map((producto) => (
                <li key={producto.id}>{producto.nombre}</li>
              ))}
            </ul>
          ) : (
            <p>No se encontraron productos.</p>
          )}
        </div>

        {productos.length > 0 ? (
          <ul>
            {productos.map((producto) => (
              <li key={producto.id}>{producto.nombre}</li>
            ))}
          </ul>
        ) : (
          <p>No se encontraron productos.</p>
        )}

        <Grid container justifyContent="center" className={classes.flexTop}>
          <Grid item xs={12}>
            <CarouselLink slides={category} />
          </Grid>
        </Grid>

        {/*TODO: Tomar las categorias desde bd, no desde acá.  */}
        {/* {categories &&
          categories.map((categorie, idx) => (
            <Grid
              container
              justifyContent="center"
              className={classes.flexMargin}
              key={idx}
            >
              <Grid item xs={12}>
            <CarouselLink categorie={categorie}></CarouselLink>
          </Grid>
            </Grid>
          ))}        */}

        {itemsMenu &&
          itemsMenu.map((itemMenu, idx) => (
            <Grid
              container
              justifyContent="center"
              className={classes.flexMargin}
              key={idx}
            >
              <Grid item xs={12}>
                <MediaControlCard itemMenu={itemMenu}></MediaControlCard>
              </Grid>
            </Grid>
          ))}

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
