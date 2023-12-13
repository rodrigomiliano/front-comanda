import {
  Container,
  Typography,
  Grid,
  Button,
  makeStyles,
} from "@material-ui/core";

import { Link } from "react-router-dom";
import LayoutTextFields from "../../components/TextField";
import AlertComanda from "../../components/AlertComanda";

const useStyles = makeStyles((theme) => ({
  flexTop: {
    marginTop: "30px",
  },
  flexMargin: {
    margin: "30px 0",
  },
}));

function MailPassErrorPage2() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center" className={classes.flexTop}>
        <Grid item>
          <Typography component="h1" variant="h6">
            Restablecer contraseña
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xs={12}>
          <LayoutTextFields
            titulo="Nueva contraseña"
            texto="Ingrese su nueva contraseña"
          />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xs={12}>
          <LayoutTextFields
            titulo="Repetir contraseña"
            texto="Repita la contraseña"
          />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item>
          <AlertComanda
            sev="error"
            tit="Error"
            desc="Las contraseñas no coinciden, por favor intente de nuevo"
          />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/mail-pass-2"
          >
            RESTABLECER CONTRASEÑA
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MailPassErrorPage2;
