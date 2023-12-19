import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  Box,
  Divider,
  makeStyles,
  Fab,
  Button,
  TextField,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select,
} from "@material-ui/core";
import ArrowBack from "@material-ui/icons/ArrowBack";
import MultipleSelect from "../../components/MultipleSelect";

const useStyles = makeStyles((theme) => ({
  flexTop: {
    marginTop: "30px",
  },
  flexMargin: {
    margin: "30px 0",
  },
  formControl: {
    margin: theme.spacing(5),
    minWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}));

function EditarUsuariosPage() {
  const classes = useStyles();
  const [user, setUser] = useState([]);
  const [usuario, setUsuario] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [roles, setRoles] = useState([]);
  const [rolId, setRolId] = useState("");
  const { id } = useParams();
  const [botonDeshabilitado, setBotonDeshabilitado] = useState(true);
  const [showDniWarning, setShowDniWarning] = useState(false);
  const [showTelefonoWarning, setShowTelefonoWarning] = useState(false);
  const [showEmailWarning, setShowEmailWarning] = useState(false);

  // Función para obtener las categorías
  const obtenerRoles = async () => {
    try {
      const response = await fetch("http://localhost:8080/comanda/rol");
      if (response.ok) {
        const data = await response.json();
        setRoles(data);
      } else {
        console.error("Error al obtener roles");
      }
    } catch (error) {
      console.error("Error al obtener roles:", error);
    }
  };

  useEffect(() => {
    const camposVacios =
      !nombre ||
      !apellido ||
      !usuario ||
      !email ||
      !telefono ||
      !contrasena ||
      !rolId;
    const isDniEmpty = !dni || dni.toString().trim() === ""; // Verifica si el DNI está vacío o es nulo
    const isDniValid = !isNaN(dni) && Number.isInteger(+dni); // Verifica si el DNI es un número entero
    const isTelefonoValid = /^\d+$/.test(telefono); // Verifica si el teléfono contiene solo números
    const isEmailValid = email.includes("@"); // Verifica si el correo electrónico contiene el símbolo @

    setBotonDeshabilitado(
      camposVacios ||
        isDniEmpty ||
        !isDniValid ||
        !isTelefonoValid ||
        !isEmailValid
    );
    setShowDniWarning(isDniEmpty || !isDniValid);
    setShowTelefonoWarning(!isTelefonoValid);
    setShowEmailWarning(!isEmailValid);
  }, [nombre, apellido, usuario, dni, email, telefono, contrasena, rolId]);

  useEffect(() => {
    obtenerRoles().then((x) => {
      fetch(`http://localhost:8080/comanda/usuario/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setUsuario(data.usuario);
          setNombre(data.nombre);
          setApellido(data.apellido);
          setDni(data.dni);
          setEmail(data.email);
          setTelefono(data.telefono);
          setContrasena(data.contrasena);
          setUser(data);

          // Asegúrate de manejar correctamente la categoría si está presente en los datos del producto
          if (data.rol) {
            fetch("http://localhost:8080/comanda/rol")
              .then((responseRoles) => responseRoles.json())
              .then((dataRoles) => {
                console.log("dataroles ", dataRoles);
                const userRol = dataRoles.find((x) => x.nombre == data.rol);
                setRolId(userRol.id);
              });
          } else {
            setRolId(""); // o configúralo en una ID de categoría predeterminada
          }
        })
        .catch((error) => {
          console.error("Error al obtener datos:", error);
        });
    });
  }, [id]);

  const handleGuardar = () => {
    fetch(`http://localhost:8080/comanda/usuario/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usuario: usuario,
        nombre: nombre,
        apellido: apellido,
        dni: dni,
        email: email,
        telefono: telefono,
        contrasena: contrasena,
        rolId: rolId,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          console.error("Error al actualizar el usuario:", response.status);
          window.location.href = "/admin/editar-usuarios-error-1";
          throw new Error("Error al actualizar el usuario");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Datos actualizados:", data);
        // Obtener la lista actualizada de usuarios después de editar
        fetch("http://localhost:8080/comanda/usuario")
          .then((response) => response.json())
          .then((data) => {
            setUser(data); // Actualizar el estado de usuarios
            // Redirigir a la página de lista de usuarios después de editar
            window.location.href = "/admin/editar-usuarios-2";
          })
          .catch((error) => {
            //console.error("Error al obtener usuarios después de editar:", error);
          });
      })
      .catch((error) => {
        //console.error("Error al actualizar el usuario:", error);
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
              COMANDA
            </Typography>
          </Box>
        </Grid>
        <Grid item>{/*TODO Sacar esto y ajustar distribución. */}</Grid>
      </Grid>

      <Divider />

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item>
          {user && user.nombre && (
            <Typography component="h1" variant="h6">
              EDITAR USUARIO: {user.nombre}
            </Typography>
          )}
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xl={6}>
          <label htmlFor="nombre">
            <TextField
              id="nombre"
              label="Nombre"
              variant="outlined"
              fullWidth
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </label>
        </Grid>
        <Grid item xl={6}>
          <label htmlFor="apellido">
            <TextField
              id="apellido"
              label="Apellido"
              variant="outlined"
              fullWidth
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </label>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xl={6}>
          <label htmlFor="usuario">
            <TextField
              id="usuario"
              label="Usuario"
              variant="outlined"
              fullWidth
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </label>
        </Grid>
        <Grid item xl={6}>
          <label htmlFor="dni">
            <TextField
              id="dni"
              label="Dni"
              variant="outlined"
              fullWidth
              value={dni}
              onChange={(e) => setDni(e.target.value)}
            />
          </label>
          <Grid>
            {showDniWarning && (
              <Typography variant="caption" color="error">
                El dni debe ser un número válido.
              </Typography>
            )}
          </Grid>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xl={6}>
          <label htmlFor="email">
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <Grid>
            {showEmailWarning && (
              <Typography variant="caption" color="error">
                Ingrese un email válido. Ej: "...@asd.com"
              </Typography>
            )}
          </Grid>
        </Grid>
        <Grid item xl={6}>
          <label htmlFor="telefono">
            <TextField
              id="telefono"
              label="Telefono"
              variant="outlined"
              fullWidth
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </label>
          <Grid>
            {showTelefonoWarning && (
              <Typography variant="caption" color="error">
                El teléfono debe ser un número válido.
              </Typography>
            )}
          </Grid>
        </Grid>
      </Grid>

      <Grid item xl={6}>
        <label htmlFor="contrasena">
          <TextField
            id="contrasena"
            label="Contrasena"
            variant="outlined"
            fullWidth
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
        </label>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item xl={6}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-helper-label">Rol</InputLabel>
            <Select
              labelId="rol-select-label"
              id="rol-select"
              value={rolId}
              onChange={(e) => setRolId(e.target.value)}
            >
              <FormHelperText>Rol del usuario</FormHelperText>
              <MenuItem value="">
                <em>Seleccione un rol</em>
              </MenuItem>
              {roles.map((rol) => (
                <MenuItem key={rol.id} value={rol.id}>
                  {rol.nombre}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Rol del usuario</FormHelperText>
          </FormControl>
        </Grid>
      </Grid>

      {/*
      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item>
          <MultipleSelect></MultipleSelect>
        </Grid>
      </Grid>
      */}

      <Grid container justifyContent="center">
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/admin/editar-usuarios-2"
            onClick={handleGuardar}
            disabled={botonDeshabilitado}
          >
            GUARDAR
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default EditarUsuariosPage;
