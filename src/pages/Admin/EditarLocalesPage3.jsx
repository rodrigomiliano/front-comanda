import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Divider,
  Fab,
  makeStyles,
  Button,
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import ArrowBack from "@material-ui/icons/ArrowBack";

import { Link } from "react-router-dom";
import TimePickers from "../../components/TimePickers";
import Checkboxes from "../../components/Checkbox";

const useStyles = makeStyles((theme) => ({
  flexTop: {
    marginTop: "30px",
  },
  flexMargin: {
    margin: "30px 0",
  },
}));

function AltaLocalesPage3() {
  const [days, setDays] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    fetch("http://localhost:8000/days")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDays(data);
      })
      .catch((err) => {
        console.error("Instalar json-server");
      });
  }, []);

  return (
    <Container maxWidth="xl">
      <Grid container justifyContent="center" className={classes.flexTop}>
        <Grid item>
          <Fab
            size="small"
            color="primary"
            aria-label="arrow"
            component={Link}
            to="/admin/editar-locales"
          >
            {/*TODO Ver cómo poner el link sin perder la imágen del botón (ArrowBack). */}
            <ArrowBack />
          </Fab>
        </Grid>
        <Grid item xs={11}>
          <Box textAlign="center">
            <Typography component="h1" variant="h3">
              Locales
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Fab
            size="small"
            color="primary"
            aria-label="add"
            component={Link}
            to=""
          >
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>

      <Divider />

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item>
          <Typography component="h1" variant="h6">
            EDITAR HORARIO
          </Typography>
        </Grid>
      </Grid>

      {days &&
        days.map(({ id, nombre }) => (
          <Grid
            container
            justifyContent="center"
            className={classes.flexMargin}
          >
            <Grid item>
              <Checkboxes></Checkboxes>
            </Grid>
            <Grid item xl={2}>
              <Typography component="h1" variant="h5" key={id}>
                {nombre}
              </Typography>
            </Grid>
            <Grid item>
              <TimePickers />
            </Grid>
            <Grid item>
              {/*TODO ¿Por qué dos? */}
              <TimePickers />
            </Grid>
          </Grid>
        ))}

      <Grid container justifyContent="center">
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/admin/editar-locales-3"
          >
            GUARDAR
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AltaLocalesPage3;
