import { Container, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";
import AlertComanda from "../../components/AlertComanda";

const useStyles = makeStyles((theme) => ({
  flexTop: {
    marginTop: "30px",
  },
  flexMargin: {
    margin: "30px 0",
  },
}));

function EscanearQrPage3() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center" className={classes.flexTop}>
        <Grid item>
          <AlertComanda
            sev="success"
            tit="¡Exito!"
            desc="Su mesa ha sido abierta, ahora puede ver el menú"
          />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item>
          <Button variant="outlined" color="primary" size="small" component={Link} to="/dashboard/crear-orden-a">
            Aceptar
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default EscanearQrPage3;
