import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Button,
  Divider,
  TextField,
  makeStyles,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  flexTop: {
    marginTop: "30px",
  },
  flexMargin: {
    margin: "30px 0",
  },
}));

function BienvenidaIngresoPage() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    fetch(`http://localhost:8080/comanda/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("user", JSON.stringify(data));
        navigate("ver-inicio");
      })
      .catch((error) => {
        console.error("Error al login", error);
      });
  };

  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center" className={classes.flexTop}>
        <Grid item>
          <Typography component="h1" variant="h3">
            Ingresar
          </Typography>
        </Grid>
      </Grid>

      <Divider />

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xs={12}>
          Correo electrónico:
          <TextField
            titulo="Correo electrónico"
            texto="Ingrese su correo electrónico"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item xs={12}>
          Contraseña:{" "}
          <TextField
            type="password"
            titulo="Contraseña"
            texto="Ingrese su contraseña"
            value={formData.password}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
          />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item>
          {/* <Button variant="contained" color="primary" component={Link} to="/admin/ver-inicio"> */}
          <Button variant="contained" color="primary" onClick={handleLogin}>
            INGRESAR
          </Button>
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item>
          <Button color="primary" component={Link} to="/admin/restablecer-pass">
            ¿Has olvidado la contraseña?
          </Button>
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item>
          <Button
            color="primary"
            component={Link}
            to="/admin/registrar-usuario"
          >
            ¿No tenés cuenta? Registrate
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default BienvenidaIngresoPage;
