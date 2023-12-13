import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Image from "material-ui-image";
import { Button, Card, Grid, CardMedia, CardContent, Typography, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Hidden } from "@mui/material";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  img: {
    width: 130,
    height: 130,
  },
  cover: {
    width: 130,
    height: 130,
    padding: 4,
  },
  button: {
    width: 210,
    height: 60,
    overflow: "hidden",
    color: "blue",
    fontWeight: "bold",
    padding: 0,
  },
  descPrice: {
    width: 210,
    height: 20,
    overflow: "hidden",
  },
  /* controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  }, */
}));

/* TODO: ver errores de consola */

export default function MediaControlCard({ itemMenu }) {
  const classes = useStyles();
  const theme = useTheme();
  const { link, nombre, descripcion, precio } = itemMenu;

  return (
    <Card className={classes.root} item xs={12}>
      <CardMedia
        className={classes.img}
        component="img"
        height="140"
        image={link}
        alt="foto plato"
      />

      <CardContent className={classes.cover}>
        <Typography variant="button">
          <Button className={classes.button} component={Link} to="/dashboard/item">
            {nombre}{" "}
          </Button>
        </Typography>
        <Typography className={classes.descPrice} variant="body2">
          {descripcion}
        </Typography>
        <Typography className={classes.descPrice} variant="body2">
          {precio}
        </Typography>
      </CardContent>
    </Card>
  );
}
