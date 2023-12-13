import {
  Container,
  Typography,
  Grid,
  Button,
  makeStyles,
} from "@material-ui/core";

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

function MailPassPage2() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item>
          <Typography component="h1" variant="h6">
            Restablecer contraseña
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item>
          <AlertComanda
            sev="success"
            tit="Éxito"
            desc="Tu contraseña fue modificada con éxito"
          />
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item>
          <Button variant="contained" color="primary" component={Link} to="/dashboard/login-usuario">
            CONTINUAR
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MailPassPage2;
