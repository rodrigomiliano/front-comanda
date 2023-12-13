import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
  Divider,
  makeStyles,
} from "@material-ui/core";

import Fab from "@material-ui/core/Fab";
import ArrowBack from "@material-ui/icons/ArrowBack";
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

function RestablecerPassPage() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <Grid container justifyContent="center" className={classes.flexTop}>
        <Grid item>
          <Fab
            size="small"
            color="primary"
            aria-label="arrow"
            component={Link}
            /*TODO Definir esta ruta. */
            to="/admin/registrar-usuario"
          >
            <ArrowBack />
          </Fab>
        </Grid>
        <Grid item xs={11}>
          <Box textAlign="center">
            <Typography component="h1" variant="h3">
              COMANDA
            </Typography>
          </Box>
        </Grid>
        <Grid item>{/*TODO Sacar esto y ajustar distribución. */}</Grid>
      </Grid>

      <Divider />

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item>
          <Typography component="h1" variant="h6">
            CREAR USUARIO
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xl={6}>
          <LayoutTextFields titulo="Nombre" texto="Ingrese su nombre" />
        </Grid>
        <Grid item xl={6}>
          <LayoutTextFields titulo="Apellido" texto="Ingrese su apellido" />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xl={6}>
          <LayoutTextFields
            titulo="Correo electrónico"
            texto="Ingrese su correo electrónico"
          />
        </Grid>
        {/*TODO Ver validación de campos, en general. */}
        <Grid item xl={6}>
          <LayoutTextFields titulo="Celular" texto="Ingrese su celular" />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" className={classes.flexMargin}>
        {/*TODO Ver que la contraseña oculte los caracteres. */}
        <Grid item xl={6}>
          <LayoutTextFields titulo="Contraseña" texto="Ingrese su contraseña" />
        </Grid>
        <Grid item xl={6}>
          <LayoutTextFields
            titulo="Repetir Contraseña"
            texto="Ingrese nuevamente su contraseña"
          />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item>
          <AlertComanda
            sev="error"
            tit="Error"
            desc="Ya existe ese correo electrónico asociado a una cuenta."
          />
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/admin/registrar-usuario-2"
          >
            CREAR CUENTA
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default RestablecerPassPage;
