import {
  Container,
  Typography,
  Grid,
  Button,
  makeStyles,
} from "@material-ui/core";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image from "material-ui-image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

const useStyles = makeStyles((theme) => ({
  flexTop: {
    marginTop: "15px",
  },
  flexMargin: {
    margin: "15px 0",
  },
  flexEnd: {
    paddingBottom: "70px",
  },
}));

function MenuItem() {
  const [itemMenu, setItemMenu] = useState(null);
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="sm">
        <Grid container alignContent="flex-end" className={classes.flexMargin}>
          <LocalOfferIcon fontSize="small"></LocalOfferIcon>
          <Typography component="h1" variant="h6">
            Bodegón
          </Typography>
        </Grid>

        <Grid container justifyContent="center" className={classes.flexTop}>
          <Grid item xs={12}>
            <Image src="/img/fideos-estilo-singapur.jpg" />
          </Grid>
        </Grid>

        <Grid container alignContent="flex-end" className={classes.flexMargin}>
          <Grid item xs={12}>
            <Typography component="h2" variant="h5">
              Sandwich de Lomito Completo
            </Typography>
          </Grid>
        </Grid>

        <Grid container alignContent="flex-end" className={classes.flexMargin}>
          <Grid item xs={12}>
            <Typography component="h3" variant="subtitle1">
              Con jamón, queso, tomate, lechuga y huevo frito.
            </Typography>
          </Grid>
        </Grid>

        <Grid container alignContent="flex-end" className={classes.flexMargin}>
          <Grid item xs={12}>
            <Typography component="h4" variant="h6">
              $1800
            </Typography>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" className={classes.flexEnd}>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/dashboard/reservar-mesa-a"
            >
              RESERVAR MESA
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default MenuItem;
