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

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { blue } from "@material-ui/core/colors";
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
    width: 180,
    height: 20,
    overflow: "hidden",
  },
}));

function AgregarAdicionalesPage3() {
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
            component={Link}
            to="/dashboard/visualizar-consumos"
          />
        </Grid>
      </Grid>
      <div className={classes.root}>
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
                    Standard license
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Full resolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    Remove
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">$19.00</Typography>
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
                  <Typography variant="body2" gutterBottom className={classes.descPrice}>
                    Sandwich de lomo, tomate, lechuga, queso, jamon, huevo.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    $1100
                  </Typography>
                </Grid>
              </Grid>

              <Grid xs="3">
                {/* <Grid item>
                <Typography variant="subtitle1">$19999.00</Typography>
              </Grid> */}

                <Grid item>
                  <Box>
                    <Box className={classes.total2}>
                      <Fab color="primary" aria-label="add" size="small">
                        <AddIcon />
                      </Fab>
                      <Typography variant="subtitle1">3</Typography>
                      <Fab color="primary" aria-label="remove" size="small">
                        <RemoveIcon />
                      </Fab>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        {/* TODO: ver de mejorar el boton para sumar y restar items del menu */}

        <Fab
          color="primary"
          aria-label="add"
          component={Link}
          to="/dashboard/crear-orden-b"
        >
          <AddIcon />
        </Fab>

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
                  <Typography variant="body2" gutterBottom className={classes.descPrice}>
                    Sandwich de lomo, tomate, lechuga, queso, jamon, huevo.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    $1100
                  </Typography>
                </Grid>
              </Grid>

              <Grid xs="3">
                {/* <Grid item>
                <Typography variant="subtitle1">$19999.00</Typography>
              </Grid> */}

                <Grid item>
                  <Box>
                    <Box className={classes.total2}>
                      <Fab
                        color="primary"
                        aria-label="add"
                        size="small"
                        disabled
                      >
                        <AddIcon />
                      </Fab>
                      <Typography variant="subtitle1">3</Typography>
                      <Fab
                        color="primary"
                        aria-label="remove"
                        size="small"
                        disabled
                      >
                        <RemoveIcon />
                      </Fab>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Box>
          <Box className={classes.total}>
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: "20px", borderRadius: "30px" }}
              startIcon={<ShoppingCartIcon />}
            >
              3
            </Button>
            <DialogInfo
              mensaje={
                <Button
                  variant="contained"
                  color="primary"
                  style={{ borderRadius: "30px" }}
                >
                  Marchar orden
                </Button>
              }
              pregunta="¿Desea marchar su orden"
              btnIzquierda="Atrás"
              btnDerecha="Marchar"
              hrefIzquierda=""
              hrefDerecha="marchar-orden-3"
            />
            <Box style={{ marginRight: "20px" }}>Total: $9000</Box>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default AgregarAdicionalesPage3;
