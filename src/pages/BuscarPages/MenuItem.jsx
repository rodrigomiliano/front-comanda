import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Button,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  contImg: {
    width: "100%",
    //height: "220px",
    overflow: "hidden",
    //backgroundImage: 'url("../src/assets/images/fideos-estilo-singapur.jpg")',
    backgroundPosition: "center",
    backgroundSize: "cover", // Asegura que la imagen se ajuste al contenedor
  },
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

function MenuItem() {
  const { id } = useParams();
  const [producto, setProducto] = useState([]);
  const classes = useStyles();
  
  

  useEffect(() => {
    console.log("ID del producto:", id);
    fetch(`http://localhost:8080/comanda/producto/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProducto(data);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  }, [id]);

  return (
    <>
      <Container disableGutters={true}>
        <div className={classes.contImg}>
          {producto &&
            producto.imagen && ( // Verifica si hay datos y una URL de imagen
              <img
                src={producto.imagen}
                alt="Local"
                style={{ width: "100%" }}
              />
            )}
        </div>
      </Container>

      <Container maxWidth="sm">
        <Grid container alignContent="flex-end" className={classes.flexMargin}>
          <Grid item xs={12}>
            {producto && producto.nombre && (
              <Typography component="h2" variant="h5">
                {producto.nombre}
              </Typography>
            )}
          </Grid>
        </Grid>

        <Grid container alignContent="flex-end" className={classes.flexMargin}>
          <Grid item xs={12}>
            {producto && producto.descripcion && (
              <Typography component="h3" variant="subtitle1">
                {producto.descripcion}
              </Typography>
            )}
          </Grid>
        </Grid>

        <Grid container alignContent="flex-end" className={classes.flexMargin}>
          <Grid item xs={12}>
            {producto && producto.precio && (
              <Typography component="h4" variant="h6">
                ${producto.precio}
              </Typography>
            )}
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
              RESERVAR MESA
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default MenuItem;
