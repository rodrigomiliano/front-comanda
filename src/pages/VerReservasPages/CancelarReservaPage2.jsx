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

function CancelarReservaPage2() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center" className={classes.flexTop}>
        <Grid item>
          <AlertComanda sev="success" tit="Éxito" desc="Reserva eliminada" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default CancelarReservaPage2;
