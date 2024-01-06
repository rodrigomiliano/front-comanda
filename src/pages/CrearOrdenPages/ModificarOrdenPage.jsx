import React, { useEffect, useState } from "react";
import {
  Chip,
  Grid,
  Paper,
  Box,
  Button,
  Typography,
  ButtonBase,
  Avatar,
  makeStyles,
  Fab,
} from "@material-ui/core";

import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DialogInfo from "../../components/DialogInfo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "20px",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    marginBottom: "10px",
    maxWidth: 500,
  },
  image: {
    width: 92,
    height: 92,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
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
  total2: {
    marginRight: "20px",
    borderRadius: "30px",
    backgroundColor: theme.palette.primary.dark,
    color: "white",
    width: "100%",
    fontSize: "18px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flexTop: {
    marginTop: "15px",
  },
  descPrice: {
    width: 210,
    height: 20,
    overflow: "hidden",
  },
}));

function ModificarOrdenPage() {
  const classes = useStyles();
  const [cart, setCart] = useState([]);
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const removeItem = (id) => {
    const element = cart.find((p) => p.id == id);
    const found = cart.indexOf(element);
    cart.splice(found, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    refreshInfo();
  };
  useEffect(() => {
    refreshInfo();
  }, []);

  const refreshInfo = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setTotalCartItems(cart.length);
    setTotalAmount(0);
    cart.forEach((x) => setTotalAmount(totalAmount + x.precio));
    setCart(cart);
  };

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
            component={Link}
            to={"/visualizar-consumos"}
          />
        </Grid>
      </Grid>
      <Box
        className={classes.flexEnd + " margin5"}
        textAlign="center"
        fontSize="24px"
      >
        Consumos para marchar
      </Box>

      {cart.map((p, index) => (
        <Paper className={classes.paper} key={"paper" + index}>
          <Grid container spacing={1}>
            <Grid item>
              <ButtonBase
                className={classes.image}
                title={p.descripcion}
                component={Link}
                to="/dashboard/ver-descripcion-producto-a"
              >
                <img className={classes.img} alt="complex" src={p.imagen} />
              </ButtonBase>
            </Grid>
            <Grid item xs sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {p.nombre}
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    className={classes.descPrice}
                  >
                    {p.descripcion}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    ${p.precio}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Fab
                  title="Eliminar este producto"
                  aria-label="remove"
                  size="small"
                  onClick={() => removeItem(p.id)}
                >
                  <RemoveIcon />
                </Fab>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}

      <Fab
        color="primary"
        title="Agregar productos"
        aria-label="add"
        component={Link}
        to="/dashboard/crear-orden-a"
      >
        <AddIcon />
      </Fab>

      <Box className={classes.total}>
        <DialogInfo
          mensaje={
            <Button
              variant="contained"
              color="primary"
              style={{ borderRadius: "30px" }}
              startIcon={<ShoppingCartIcon />}
            >
              {totalCartItems} - Marchar orden
            </Button>
          }
          pregunta="¿Desea marchar su orden"
          btnIzquierda="Atrás"
          btnDerecha="Marchar"
          hrefIzquierda=""
          hrefDerecha="marchar-orden-3"
        />
        <Box style={{ marginRight: "20px" }}>Total: ${totalAmount}</Box>
      </Box>
    </>
  );
}

export default ModificarOrdenPage;
