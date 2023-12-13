import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Divider,
  makeStyles,
  Fab,
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import ArrowBack from "@material-ui/icons/ArrowBack";

import { Link } from "react-router-dom";
import CustomizedTablesOrdenes from "../../components/CustomizedTablesOrdenes";

const useStyles = makeStyles((theme) => ({
  flexTop: {
    marginTop: "30px",
  },
  flexMargin: {
    margin: "30px 0",
  },
}));

function GestionOrdenesPage() {
  const [ordenes, setOrdenes] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    fetch("http://localhost:8000/ordenes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setOrdenes(data);
      })
      .catch((err) => {
        console.error("Instalar json-server");
      });
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
          <CustomizedTablesOrdenes ordenes={ordenes}></CustomizedTablesOrdenes>
        </Grid>
      </Grid>
    </Container>
  );
}

export default GestionOrdenesPage;
