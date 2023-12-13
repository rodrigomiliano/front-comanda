import React from "react";
import { makeStyles, Grid, Card, CardContent, Typography, IconButton } from "@material-ui/core";
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

export default function SimpleCard({ estadistica }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const { nombre, valor } = estadistica;
  /* TODO: revisar la desestructuracion de reserva */

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {}
        </Typography>
        <Typography variant="h5" component="h2">
          {nombre}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {valor}
        </Typography>
        {/* <Typography variant="body2" component="p">
          {} personas
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
      </CardContent>
            
    </Card>
  );
}
