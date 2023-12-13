import {
  Container,
  Typography,
  Grid,
  Button,
  Divider,
  makeStyles,
} from "@material-ui/core";

import { Link } from "react-router-dom";
import LayoutTextFields from "../../components/TextField";

const useStyles = makeStyles((theme) => ({
  flexTop: {
    marginTop: "30px",
  },
  flexMargin: {
    margin: "30px 0",
  },
}));

function LoginUsuarioPage() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item>
          <Button variant="outlined" color="primary">
            INGRESA CON GOOGLE
          </Button>
        </Grid>
      </Grid>

      <Divider />

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xs={12}>
          <LayoutTextFields
            titulo="Correo electrónico"
            texto="Ingrese su correo electrónico"
          />
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <LayoutTextFields titulo="Contraseña" texto="Ingrese su contraseña" />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/dashboard/reservar-mesa-e"
          >
            INGRESA
          </Button>
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item>
          <Button
            color="primary"
            component={Link}
            to="/dashboard/restablecer-usuario-pass"
          >
            ¿Has olvidado la contraseña?
          </Button>
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item>
          <Button color="primary" component={Link} to="/dashboard/registrar-usuario">
            ¿No tenés cuenta? Registrate
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LoginUsuarioPage;
