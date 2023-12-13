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

function EscanearQrErrorPage() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center" className={classes.flexTop}>
        <Grid item>
          <AlertComanda
            sev="error"
            tit="Error de lectura"
            desc="Error al leer el código QR, por favor vuelva a intentarlo"
          />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            component={Link}
            to="/dashboard/ocupar-mesa-2"
          >
            Aceptar
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default EscanearQrErrorPage;
