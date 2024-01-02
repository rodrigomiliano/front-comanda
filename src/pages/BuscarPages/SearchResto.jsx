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
  Fab,
} from "@material-ui/core";
import StoreIcon from "@material-ui/icons/Store";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import ArrowBack from "@material-ui/icons/ArrowBack";
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
    position: "relative", // Agregado para posicionar elementos hijos de manera absoluta
  },
  arrowBack: {
    position: "absolute",
    top: "10px",
    left: "10px",
    zIndex: 1, // Para que el ícono esté encima de la imagen
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
          <Fab
            size="small"
            color="primary"
            aria-label="arrow"
            component={Link}
            to="/search"
            className={classes.arrowBack}
          >
            <ArrowBack />
          </Fab>
          {local &&
            local.imagen && ( // Verifica si hay datos y una URL de imagen
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

          <ListItem>
            <ListItemIcon>
              <PhoneIcon fontSize="large" />
            </ListItemIcon>
            {local ? (
              <ListItemText primary={local.telefono} />
            ) : (
              <ListItemText primary="Cargando datos..." />
            )}
          </ListItem>
        </List>

        <Divider />

        <Grid container alignContent="flex-end" className={classes.flexMargin}>
          <Grid item>
            {local ? (
              <Typography component="h3" variant="body1">
                {local.descripcion}
              </Typography>
            ) : (
              <Typography component="h3" variant="body1">
                Cargando descripción...
              </Typography>
            )}
          </Grid>
        </Grid>

        <Divider />

        <Grid container justifyContent="center" className={classes.flexMargin}>
          <Grid item>
            <Button variant="contained" component={Link} to={`/items/${id}`}>
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
              to="/crear-orden-a/1"
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
