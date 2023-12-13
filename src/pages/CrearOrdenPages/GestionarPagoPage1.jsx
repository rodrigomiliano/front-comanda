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
  Divider,
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
  flexTop: {
    marginTop: "15px",
  },
  flexMargin: {
    margin: "15px 0",
  },
  flexButtons: {
    margin: "20px 0",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
}));

function GestionarPagoPage() {
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
      
        <Box className={classes.fixed}>          
          <Box className={classes.total}>Total: $9000</Box>
        </Box>
      </div>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Typography component="h1" variant="h5">
          Por favor seleccione medio de pago
        </Typography>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to=""
          >
            MercadoPago
          </Button>
        </Grid>
      </Grid>

      <Divider />

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/dashboard/gestionar-pago-2"
          >
            Efectivo o tarjeta
          </Button>
        </Grid>
      </Grid>
        


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
          >
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default GestionarPagoPage;
