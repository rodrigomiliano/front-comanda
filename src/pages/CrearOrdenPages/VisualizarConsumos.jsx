import {
  Grid,
  makeStyles,
  Paper,
  Typography,
  ButtonBase,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
} from "@material-ui/core";

import { useState } from "react";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Link } from "react-router-dom";

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
    width: 100,
    height: 100,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  fixed: {
    bottom: "0px",
    backgroundColor: theme.palette.primary.contrastText,
    width: "100%",
    height: "50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  total: {
    marginRight: "20px",
    borderRadius: "30px",
    backgroundColor: theme.palette.success.dark,
    padding: "8px",
    color: "white",
    fontSize: "18px",
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
  descPrice: {
    width: 180,
    height: 20,
    overflow: "hidden",
  },
}));

function VisualizarConsumos() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
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

        <Box className={classes.fixed}>
          <Button
            variant="contained"
            color="primary"
            style={{ marginLeft: "20px", borderRadius: "30px" }}
            startIcon={<RestaurantIcon />}
            onClick={handleClickOpen}
          >
            Cerrar mesa
          </Button>
          <Box className={classes.total}>Total: $9000</Box>
        </Box>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Cierre de mesa"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ¿Realmente desea cerrar la mesa?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="contained">
            Cancelar
          </Button>
          <Button
            onClick={handleClose}
            color="primary"
            variant="contained"
            autoFocus
            component={Link}
                to="/dashboard/gestionar-pago"
          >
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default VisualizarConsumos;
