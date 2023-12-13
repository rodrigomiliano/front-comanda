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

function RestablecerUsuarioPass3ErrorPage() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item>
          <Typography component="h1" variant="h6">
            ¿Olvidaste tu contraseña?
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="h1" variant="h6">
            No te preocupes, es posible recuperarla
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xs={12}> 
          <LayoutTextFields
            titulo="Correo electrónico"
            texto="Ingrese su correo electrónico"
          />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item>
          <AlertComanda
            sev="error"
            tit="Error"
            desc="Todos los campos son obligatorios"
          />
        </Grid>
      </Grid>

      <Grid container justifyContent="center"  className={classes.flexTop}>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/restablecer-usuario-pass-4-exito"
          >
            RECUPERAR CONTRASEÑA
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default RestablecerUsuarioPass3ErrorPage;
