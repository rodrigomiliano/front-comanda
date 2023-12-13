import React from "react";
import {
  makeStyles,
  Grid,
  Card,
  CardContent,
  Typography,  
} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import DialogInfo from "./DialogInfo";
import DeleteIcon from "@material-ui/icons/Delete";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard({ reserva }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const { fecha, nombre, direccion, cantidad } = reserva;
  /* TODO: revisar la desestructuracion de reserva */

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {fecha}
        </Typography>
        <Typography variant="h5" component="h2">
          {nombre}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {direccion}
        </Typography>
        <Typography variant="body2" component="p">
          {cantidad} personas
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>

      <Grid
        container
        justifyContent="center"
        className={classes.flexMargin}
        spacing={2}
      >
        <Grid item xs={4}>
          <DialogInfo
            mensaje={<DeleteIcon size="small" aria-label="delete" />}
            pregunta="¿Realmente desea eliminar su reserva?"
            btnIzquierda="Atrás"
            btnDerecha="Eliminar"
            hrefIzquierda=""
            hrefDerecha="cancelar-reserva-2"
          />
        </Grid>

        <Grid item xs={4}>
          <DialogInfo
            mensaje={
              <NotificationImportantIcon size="small" aria-label="alert" />
            }
            pregunta="¿YA LLEGASTE AL LOCAL? Si ya llegaste, por favor selecciona 'Ocupar mesa'"
            btnIzquierda="Atrás"
            btnDerecha="Ocupar Mesa"
            hrefIzquierda=""
            hrefDerecha="ocupar-mesa-2"
          />
        </Grid>
      </Grid>
    </Card>
  );
}
