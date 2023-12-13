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
import CustomizedTablesMesas from "../../components/CustomizedTablesMesas";

const useStyles = makeStyles((theme) => ({
  flexTop: {
    marginTop: "30px",
  },
  flexMargin: {
    margin: "30px 0",
  },
}));

function AltaMesasPage() {
  const [mesas, setMesas] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetch("http://localhost:8080/comanda/mesa")
      .then((response) => response.json())
      .then((data) => {
        setMesas(data);
      })
      .catch((error) => {
        console.error("Error al obtener mesas desde el servidor", error);
      });
  }, []);

  const handleEdit = (id) => {
    // Realiza la redirección con el ID
    window.location.href = `/admin/editar-mesas/${id}`;
  };

  const handleDelete = (id) => {
    console.log("ID a eliminar:", id); // Verifica que el ID se imprima correctamente
    fetch(`http://localhost:8080/comanda/mesa/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}), // No parece que necesites enviar algún cuerpo en la solicitud DELETE
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Datos actualizados:", data);
      })
      .catch((error) => {
        console.error("Error al eliminar la mesa:", error);
      });
  };

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
              Mesas
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Fab
            size="small"
            color="primary"
            aria-label="add"
            component={Link}
            to="/admin/alta-mesas-2"
          >
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>

      <Divider />

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xs={12}>
          <CustomizedTablesMesas
            mesas={mesas}
            handleEdit={handleEdit}
            handleDelete={(id) => handleDelete(id)}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AltaMesasPage;
