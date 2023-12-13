import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  makeStyles,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import StoreIcon from "@material-ui/icons/Store";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Image from "material-ui-image";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  contImg: {
    width: "100%",
    height: "220px",
    overflow: "hidden",
    //backgroundImage: 'url("../src/assets/images/fideos-estilo-singapur.jpg")',
    backgroundPosition: "center",
    backgroundSize: "cover", // Asegura que la imagen se ajuste al contenedor
  },
  flexTop: {
    marginTop: "30px",
  },
  flexMargin: {
    margin: "30px 0",
  },
}));

function SearchResto() {
  const classes = useStyles();
  const { id } = useParams(); // Utiliza el ID para obtener los detalles del local desde tu fuente de datos
  const [local, setLocal] = useState(null);
  //const [nombre, setNombre] = useState("");
  //const [calle, setCalle] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8080/comanda/local/${id}`)
      .then((response) => response.json())
      .then((data) => {
        //setNombre(data.nombre);
        //setCalle(data.calle);
        //setAltura(data.altura);
        //setCodigo_postal(data.codigo_postal); // Actualiza con el nombre de propiedad correcto
        //setTelefono(data.telefono);
        //setImagen(data.imagen);
        setLocal(data);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  }, [id]);

  return (
    <>
      <Container disableGutters={true}>
        {/*
        {local && local.imagen && ( // Verifica si hay datos y una URL de imagen
          <div
            className={classes.contImg}
            style={{ backgroundImage: `url(${local.imagen})` }}
          ></div>
        )}
        */}
        <div className={classes.contImg}>
          {local && local.imagen && ( // Verifica si hay datos y una URL de imagen
            <img src={local.imagen} alt="Local" style={{ width: "100%" }} />
          )}
        </div>
      </Container>

      <Container maxWidth="sm">
        <List>
          <ListItem>
            <ListItemIcon>
              <LocationOnIcon fontSize="large" />
            </ListItemIcon>
            {local ? (
              <ListItemText
                primary={local.nombre}
                secondary={`${local.calle} ${local.altura}`}
              />
            ) : (
              <ListItemText primary="Cargando datos..." />
            )}
          </ListItem>
        </List>

        <Divider />

        <Grid container alignContent="flex-end" className={classes.flexMargin}>
          <Grid item>
            <Typography component="h3" variant="body1">
              Bienvenidos a la 1° parrilla vegana de Capital Federal. Desde 2015
              nos ubicamos a unas cuadras del Congreso con nuestro local típico
              parrilla, pero sin sufrimiento animal. Contamos con platos de
              excelente calidad y...
            </Typography>
          </Grid>
        </Grid>

        <Divider />

        <Grid container justifyContent="center" className={classes.flexMargin}>
          <Grid item>
            <Button variant="contained" component={Link} to="/dashboard/items">
              VER MENÚ
            </Button>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" className={classes.flexMargin}>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/dashboard/reservar-mesa-a"
            >
              RESERVAR MESA
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default SearchResto;
