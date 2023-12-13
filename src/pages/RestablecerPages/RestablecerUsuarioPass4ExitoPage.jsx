import { Container, Typography, Grid, Button, makeStyles} from "@material-ui/core";

import { Link } from 'react-router-dom';
import AlertComanda from "../../components/AlertComanda";

const useStyles = makeStyles((theme) => ({
  flexTop: {
    marginTop: "30px",
  },
  flexMargin: {
    margin: "30px 0",
  },
}));

function RestablecerUsuarioPass4ExitoPage() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item>
          <Typography component="h1" variant="h6">
            ¿Olvidaste tu contraseña?
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item>
          <AlertComanda
            sev="success"
            tit="Éxito"
            desc="Te hemos enviado un mail para recuperar tu contraseña, y así puedas ingresar a la app"
          />
        </Grid>
      </Grid>

      <Grid container justifyContent="center"  className={classes.flexTop}>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="../login-usuario"
          >
            VOLVER AL LOGIN
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default RestablecerUsuarioPass4ExitoPage;
