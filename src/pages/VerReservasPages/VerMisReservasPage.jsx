import { useEffect, useState } from "react";
import { Container, Grid, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import SimpleCard from "../../components/SimpleCard";

const useStyles = makeStyles((theme) => ({
  flexTop: {
    marginTop: "30px",
  },
  flexMargin: {
    margin: "30px 0",
  },
}));

function VerMisReservasPage() {
  const [reservas, setReservas] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/reservas")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setReservas(data);
      })
      .catch((err) => {
        console.error("Instalar json-server");
      });
  }, []);

  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center" className={classes.flexTop}>
        <Grid item>
          <Typography component="h1" variant="h6">
            Mis Reservas
          </Typography>
        </Grid>
      </Grid>

      <Divider />
      {/*TODO: repasar funcion flecha, map y filter  */}

      {reservas &&
        reservas.map((reserva, idx) => (
          <Grid
            container
            justifyContent="center"
            className={classes.flexMargin}
            key={idx}
          >
            <Grid item xs={12}>
              <SimpleCard reserva={reserva}></SimpleCard>
            </Grid>
          </Grid>
        ))}

      <Grid container justifyContent="center" className={classes.flexEnd}>
        <Grid item>
          <Divider />
        </Grid>
      </Grid>
    </Container>
  );
}

export default VerMisReservasPage;
/* TODO: revisar errores de consola */
