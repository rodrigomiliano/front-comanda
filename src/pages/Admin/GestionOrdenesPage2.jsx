import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Divider,
  makeStyles,
  Fab,
  Button,
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import ArrowBack from "@material-ui/icons/ArrowBack";

import { Link } from "react-router-dom";
import CustomizedTablesOrdenes from "../../components/CustomizedTablesOrdenes";
import CustomizedTablesOrdenes2 from "../../components/CustomizedTablesOrdenes2";
import CustomizedTablesOrdenes3 from "../../components/CustomizedTablesOrdenes3";
/* import CustomizedTablesOrdenes3bis from "../../components/CustomizedTablesOrdenes3bis"; */
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  flexTop: {
    marginTop: "30px",
  },
  flexMargin: {
    margin: "30px 0",
  },
}));

/* const secondary = green[500]; */

function GestionOrdenesPage2() {
  const [pedidos, setPedidos] = useState(null);
  const [consumidos, setConsumidos] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    fetch("http://localhost:8000/pedidos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPedidos(data);
      })
      .catch((err) => {
        console.error("Instalar json-server");
      });

    fetch("http://localhost:8000/consumidos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setConsumidos(data);
      })
      .catch((err) => {
        console.error("Instalar json-server");
      });

    /* TODO: COPIAR FECTH Y LO DEMAS (CONSUMIDOS) */
  }, []);

  return (
    <Container maxWidth="xl">
      <Grid container justifyContent="center" className={classes.flexTop}>
        <Grid item>
          <Fab
            size="small"
            color="primary"
            aria-label="arrow"
            component={Link}
            to="/admin/ver-inicio"
          >
            <ArrowBack />
          </Fab>
        </Grid>
        <Grid item xs={11}>
          <Box textAlign="center">
            <Typography component="h1" variant="h3">
              Ordenes
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Fab
            size="small"
            color="primary"
            aria-label="add"
            component={Link}
            to=""
          >
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>

      <Divider />
      {/*TODO Probando pagina de gestion, como meter todo */}

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xs={12}>
          <Box textAlign="center">
            <Typography component="h1" variant="h4">
              Mesa n° 1
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xs={12}>
          <Box textAlign="center">
            <Typography component="h1" variant="h5">
              Por marchar
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xs={12}>
          <CustomizedTablesOrdenes2
            pedidos={pedidos}
          ></CustomizedTablesOrdenes2>
        </Grid>
      </Grid>

      {/* <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xs={12}>
          <CustomizedTablesOrdenes
            ordenes={ordenes}
          ></CustomizedTablesOrdenes>
        </Grid>
      </Grid> */}

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item>
          <Button variant="contained" color="secondary" component={Link} to="">
            {/*TODO: Ver color  */}
            MARCHAR SELECCION
          </Button>
        </Grid>
      </Grid>

      <Divider />

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xs={12}>
          <Box textAlign="center">
            <Typography component="h1" variant="h5">
              Consumos acumulados
            </Typography>
          </Box>
        </Grid>
      </Grid>


      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xs={12}>
          <CustomizedTablesOrdenes3
            consumidos={consumidos}
          ></CustomizedTablesOrdenes3>
        </Grid>
      </Grid>

      {/* TODO: ver el componente CustomizedTablesOrdenes3bis si puede tomarlo aca */}
      {/* <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xs={12}>
          <CustomizedTablesOrdenes3bis
            consumidos={consumidos}
          ></CustomizedTablesOrdenes3bis>
        </Grid>
      </Grid> */}

    </Container>
  );
}

export default GestionOrdenesPage2;
