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
import AlertComanda from "../../components/AlertComanda";

const useStyles = makeStyles((theme) => ({
  flexTop: {
    marginTop: "30px",
  },
  flexMargin: {
    margin: "30px 0",
  },
}));

function RegistrarUsuarioErrorPage2() {
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

      <Grid container justifyContent="center" className={classes.flexTop}>
        <Grid item>
          <Typography component="h1" variant="h6">
            Registrar Usuario
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexTop}>
        <Grid item>
          <AlertComanda
            sev="error"
            tit="Error"
            desc="Los datos ingresados ya existen en nuestro sistema"
          />
        </Grid>
      </Grid>

      <br></br>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xs={12}>
          <LayoutTextFields
            titulo="Nombre"
            texto="Ingrese nombre del usuario"
          />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xs={12}>
          <LayoutTextFields
            titulo="Apellido"
            texto="Ingrese apellido del usuario"
          />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xs={12}>
          <LayoutTextFields titulo="Teléfono" texto="Ingrese su teléfono" />
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

      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <LayoutTextFields titulo="Contraseña" texto="Ingrese su contraseña" />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item>
          <Button variant="contained" color="primary" component={Link} to="">
            CREAR CUENTA
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default RegistrarUsuarioErrorPage2;
