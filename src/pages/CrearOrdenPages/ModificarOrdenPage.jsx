import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
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
  const navigate = useNavigate();
  const classes = useStyles();
  const [cart, setCart] = useState([]);
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const [formDataMesaUso, setFormDataMesaUso] = useState({
    mesa: {
      id: 0,
    },
    comandas: [],
  });

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

  const sendOrder = async () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setTotalAmount(0);
    setTotalCartItems(0);

    const tableId = JSON.parse(localStorage.getItem("tableId"));
    debugger;
    setFormDataMesaUso({
      ...formDataMesaUso,
      mesa: tableId,
      comandas: id,
    });
    try {
      const response = await fetch("http://localhost:8080/comanda/mesauso", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataMesaUso), // Envía el nombre en formato JSON
      });

      if (response.ok) {
        console.log("Categoría agregada correctamente");
        // Redireccionar a la página siguiente si se agrega correctamente
        window.location.href = "/admin/alta-categorias-3";
      } else {
        console.error("Error al agregar la categoría");
        // Mostrar la página de error si falla la adición
        window.location.href = "/admin/alta-categorias-2-error-1";
      }
    } catch (error) {
      console.error("Error al agregar categoria:", error);
      // Puedes mostrar el error en un componente, por ejemplo, si es relevante
      // setErrorMessage("Error al agregar categoria: " + error.message);
    }
    cart = cart.filter((p) => p != null);
    cart.forEach((x) => setTotalAmount(totalAmount + x?.precio));
    setCart([]);
  };

  const marcharOrden = () => {
    navigate("/marchar-orden-3/");
  };

  const refreshInfo = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    setTotalCartItems(cart.length);
    setTotalAmount(0);
    cart = cart.filter((p) => p != null);
    cart.forEach((x) => setTotalAmount(totalAmount + x?.precio));
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
        onClick={sendOrder}
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
              onClick={marcharOrden}
            >
              {totalCartItems} - Marchar orden
            </Button>
          }
          pregunta="¿Desea marchar su orden"
          btnIzquierda="Atrás"
          btnDerecha="Marchar"
        />
        <Box style={{ marginRight: "20px" }}>Total: ${totalAmount}</Box>
      </Box>
    </>
  );
}

export default ModificarOrdenPage;
