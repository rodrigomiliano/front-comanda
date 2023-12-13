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
import SimpleSelect from "../../components/SimpleSelect";
import SimpleCard2 from "../../components/SimpleCard2";
import DatePickers from "../../components/Calendar";

const useStyles = makeStyles((theme) => ({
  flexTop: {
    marginTop: "30px",
  },
  flexMargin: {
    margin: "30px 0",
  },  
  flexButtons: {
    margin: "20px 0",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
}));

function EstadisticasFacturacionPage() {
  const [estadisticas, setEstadisticas] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    fetch("http://localhost:8000/estadisticas")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setEstadisticas(data);
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
              Estadísticas
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

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xs={3}>
          <SimpleSelect/>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Box className={classes.flexButtons}>          
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to=""
          >
            HOY
          </Button>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to=""
          >
            AYER
          </Button>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to=""
          >
            ESTA SEMANA
          </Button>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to=""
          >
            ULTIMA SEMANA
          </Button>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to=""
          >
            PERSONALIZAR
          </Button>

          <Grid container justifyContent="center"  xs={2}> 
            <Grid item  >
               <DatePickers ></DatePickers>
            </Grid>
         </Grid>

         <Grid container justifyContent="center"  xs={2}> 
            <Grid item  >
               <DatePickers ></DatePickers>
            </Grid>
         </Grid>

        </Box>
        
      </Grid>

      {estadisticas &&
        estadisticas.map((estadistica, idx) => (
          <Grid container justifyContent="center" className={classes.flexMargin} key={idx}>
            <Grid item xs={12}>
              <SimpleCard2 estadistica={estadistica}></SimpleCard2>
            </Grid>
          </Grid>
        ))}

    </Container>
  );
}

export default EstadisticasFacturacionPage;
