import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Button,
  makeStyles,
  Chip,
  Avatar,
  Box,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

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

function VerDescripcionProductoPage() {
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
      <Grid container justifyContent="center" className={classes.flexTop}>
        <Grid item xs={5}>
          <Chip
            avatar={<Avatar>$</Avatar>}
            size="medium"
            label="Visualizar consumos"
            clickable
            color="primary"
            disabled
          />
        </Grid>
      </Grid>

      <Container disableGutters={true}>
        <div className={classes.contImg}>
          <div className="margin5">
            {producto &&
              producto.imagen && ( // Verifica si hay datos y una URL de imagen
                <img
                  className={classes.contImg}
                  src={producto.imagen}
                  alt="Local"
                  style={{ width: "100%", borderRadius: "10px" }}
                />
              )}
          </div>
        </div>
      </Container>

      <Container maxWidth="sm">
        <Grid container alignContent="flex-end" className={classes.flexMargin}>
          <Grid item xs={12}>
            {producto && producto.nombre && (
              <Typography component="h2" variant="h5" className="bold">
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
              <Typography component="h4" variant="h6" className="bold">
                ${producto.precio}
              </Typography>
            )}
          </Grid>
        </Grid>

        <Box>
          <Box className={classes.total}>
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: "20px", borderRadius: "30px" }}
              startIcon={<ShoppingCartIcon />}
              component={Link}
              to="/modificar-orden"
              //disabled
            >
              0
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ borderRadius: "30px" }}
              component={Link}
              to="/modificar-orden"
              //disabled
            >
              Ver mis pedidos
            </Button>
            <Box style={{ marginRight: "20px" }}>Total: $0</Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default VerDescripcionProductoPage;
