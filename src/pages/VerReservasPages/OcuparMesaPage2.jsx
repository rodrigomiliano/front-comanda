import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import AlertComanda from "../../components/AlertComanda";
import DialogInfo from "../../components/DialogInfo";

const useStyles = makeStyles((theme) => ({
  flexTop: {
    marginTop: "30px",
  },
  flexMargin: {
    margin: "30px 0",
  },
}));

function OcuparMesaPage2() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center" className={classes.flexTop}>
        <Grid item>
          <AlertComanda
            sev="success"
            tit="Éxito"
            desc="El local ya sabe que llegaste, espera a que te lleven a tu mesa.
          Luego escanea el código QR que está en ella."
          />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item>
          <DialogInfo
            mensaje="ESCANEAR QR"
            pregunta="¿Permitir que COMANDA acceda a la cámara?"
            btnIzquierda="Rechazar"
            btnDerecha="Permitir"
            hrefIzquierda="escanear-qr-error"
            hrefDerecha="escanear-qr-3"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default OcuparMesaPage2;
/* TODO: revisar errores de consola */