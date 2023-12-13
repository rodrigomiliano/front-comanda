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

function CrearOrdenAPage() {
  const classes = useStyles();

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
      <div className={classes.root}>
        <Box my={3}>
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
        </Box>

        <Paper className={classes.paper}>
          <Grid container spacing={1}>
            <Grid item>
              <ButtonBase
                className={classes.image}
                component={Link}
                to="/dashboard/ver-descripcion-producto-a"
              >
                <img
                  className={classes.img}
                  alt="complex"
                  src="../src/assets/images/lomito.jpg"
                />
              </ButtonBase>
            </Grid>
            <Grid item xs sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Lomito clasico
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    className={classes.descPrice}
                  >
                    Sandwich de lomito, queso, tomate, lechuga
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    $1120
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Fab
                  color="primary"
                  aria-label="add"
                  size="small"
                  component={Link}
                  to="/dashboard/crear-orden-b"
                >
                  <AddIcon />
                </Fab>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src="../src/assets/images/lomito.jpg"
                />
              </ButtonBase>
            </Grid>
            <Grid item xs sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Lomito completo
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    className={classes.descPrice}
                  >
                    EL mas completo sandwich de lomito con tomate, lechuga,
                    chedar, huevo, jamon.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    $1390
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Fab
                  color="primary"
                  aria-label="add"
                  size="small"
                  component={Link}
                  to="/dashboard/crear-orden-b"
                >
                  <AddIcon />
                </Fab>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
          <Grid container spacing={1}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src="../src/assets/images/lomito.jpg"
                />
              </ButtonBase>
            </Grid>
            <Grid item xs sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Lomito vegano
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    className={classes.descPrice}
                  >
                    Lomito de seitan con pan vegano, queso vegano, tomate,
                    lechuga.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    $1200
                  </Typography>
                </Grid>
              </Grid>
              <Fab
                color="primary"
                aria-label="add"
                size="small"
                component={Link}
                to="/dashboard/crear-orden-b"
              >
                <AddIcon />
              </Fab>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
          <Grid container spacing={1}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src="../src/assets/images/lomito.jpg"
                />
              </ButtonBase>
            </Grid>
            <Grid item xs sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Lomito a los 4 quesos
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    className={classes.descPrice}
                  >
                    Lomito con 4 quesos, huevo, tomate, lechuga.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    $1300
                  </Typography>
                </Grid>
              </Grid>
              <Fab
                color="primary"
                aria-label="add"
                size="small"
                component={Link}
                to="/dashboard/crear-orden-b"
              >
                <AddIcon />
              </Fab>
            </Grid>
          </Grid>
        </Paper>

        <Box className={classes.flexEnd}>
          <Box className={classes.total}>
            <Button
              variant="contained"
              color="primary"
              disabled
              style={{ marginLeft: "20px", borderRadius: "30px" }}
              startIcon={<ShoppingCartIcon />}
            >
              0
            </Button>
            <Button
              variant="contained"
              color="primary"
              disabled
              style={{ borderRadius: "30px" }}
            >
              Ver mis pedidos
            </Button>
            <Box style={{ marginRight: "20px" }}>Total: $0</Box>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default CrearOrdenAPage;
