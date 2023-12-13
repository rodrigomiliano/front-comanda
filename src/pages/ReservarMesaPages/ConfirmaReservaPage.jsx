import {
  Container,
  Typography,
  Grid,
  Button,
  Divider,
  makeStyles,
  List, ListItem, ListItemIcon, ListItemText
} from "@material-ui/core";

import { Link } from "react-router-dom";
import AlertComanda from "../../components/AlertComanda";
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
  flexTop: {
    marginTop: "30px",
  },
  flexMargin: {
    margin: "30px 0",
  },
  contImg: {
    width: '100%',
    height: '220px',
    overflow: 'hidden',
    backgroundImage: 'url("../src/assets/images/la-reverde.jpg")',
    backgroundPosition: 'center',
    borderRadius: '6px'
  },
}));

function ConfirmaReservaPage() {
  const classes = useStyles();

  return (
    <>

<div className={classes.contImg}></div>

<Container>
  <List>
    <ListItem>
      <ListItemIcon>
        <LocationOnIcon fontSize="large" />
      </ListItemIcon>
      <ListItemText primary="La parrilla vegana" secondary="Montevideo 98, C.A.B.A." />
    </ListItem>
  </List>      

      <Divider />

      <Grid container justifyContent="center" className={classes.flexTop}>
        <Grid item>
          <AlertComanda
            sev="success"
            tit="Reserva exitosa"
            desc="Lo esperamos en el día y horario acordado. Su reserva tiene una 
          tolerancia de 15 minutos, luego dependerá de la disponibilidad del local en el momento."
          />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item>
          <Button variant="outlined" color="primary" component={Link} to="../ver-mis-reservas">
            Ver mis reservas
          </Button>
        </Grid>
      </Grid>

    </Container>
    </>
  )
}

export default ConfirmaReservaPage;
