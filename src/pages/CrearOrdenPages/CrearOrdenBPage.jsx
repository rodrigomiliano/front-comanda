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
  Fab,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AddIcon from "@material-ui/icons/Add";

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
  flexEnd: {
    paddingBottom: "70px",
  },
}));

function CrearOrdenBPage() {
  const classes = useStyles();
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const userCart = JSON.parse(localStorage.getItem("cart")) || [];
    setTotalCartItems(userCart.length);
    setCart(userCart);
  }, []);

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
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
            disabled
          />
        </Grid>
      </Grid>

      <SearchBar />
      {/* <Box my={3}>
          <Chip
            size="medium"
            label="Pasta"
            clickable
            color="primary"
            variant="outlined"
          />
          <Chip size="medium" label="Parilla" clickable color="primary" />
          <Chip
            size="medium"
            label="Ensaladas"
            clickable
            color="primary"
            variant="outlined"
          />
          <Chip
            size="medium"
            label="Entradas"
            clickable
            color="primary"
            variant="outlined"
          />
          <Chip
            size="medium"
            label="Postre"
            clickable
            color="primary"
            variant="outlined"
          />
          <Chip
            size="medium"
            label="Bebidas"
            clickable
            color="primary"
            variant="outlined"
          />
          <Chip
            size="medium"
            label="Vinos"
            clickable
            color="primary"
            variant="outlined"
          />
        </Box> */}

      {cart.map((p) => (
        <>
          <Paper className={classes.paper}>
            <Grid container spacing={1}>
              <Grid item>
                <ButtonBase
                  className={classes.image}
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
                  <Fab color="primary" aria-label="add" size="small">
                    <AddIcon />
                  </Fab>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </>
      ))}
      <Box className={classes.flexEnd}>
        <Box className={classes.total}>
          <Button
            variant="contained"
            color="primary"
            style={{ marginLeft: "20px", borderRadius: "30px" }}
            startIcon={<ShoppingCartIcon />}
          >
            {totalCartItems}
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{ borderRadius: "30px" }}
            component={Link}
            to="/dashboard/marchar-orden-3"
          >
            Marchar orden
          </Button>
          <Box style={{ marginRight: "20px" }}>Total: $9000</Box>
        </Box>
      </Box>
    </>
  );
}

export default CrearOrdenBPage;
