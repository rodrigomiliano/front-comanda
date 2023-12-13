import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import AlertComanda from "../../components/AlertComanda";

const useStyles = makeStyles((theme) => ({
  flexTop: {
    marginTop: "30px",
  },
  flexMargin: {
    margin: "30px 0",
  },
}));

function VerMisReservasErrorPage() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center" className={classes.flexTop}>
        <Grid item>
          <AlertComanda
            sev="warning"
            tit="¡Ups! Todavía no hay reservas"
            desc="Para ver el listado de reservas, comience por reservar mesa en un local, volviendo al inicio."
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default VerMisReservasErrorPage;
