import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Grid,
  FormGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  FormControl,
  RadioGroup,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  contImg: {
    width: "100%",
    height: "220px",
    overflow: "hidden",
    backgroundImage: 'url("../src/assets/images/la-reverde.jpg")',
    backgroundPosition: "center",
  },
  flexButtons: {
    margin: "20px 0",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
}));

function VerDescripcionProductoAPage() {
  const [bookTime, setBookTime] = useState(null);
  const [selected, setSelected] = useState("12:00hs");

  useEffect(() => {
    fetch("http://localhost:8000/booktime")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBookTime(data);
      })
      .catch((err) => {
        console.error("Instalar json-server");
      });
  }, []);
  const classes = useStyles();

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <>
      <Container disableGutters={true}>
        <div className={classes.contImg}></div>
      </Container>

      <Container>
        <Grid container>
          <Grid item xs={12}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <LocationOnIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText
                  primary="La parrilla vegana"
                  secondary="Montevideo 98, C.A.B.A."
                />
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12}>
            <Divider />
          </Grid>
          {/* TODO: Problema centrado, investigar como centrar en este caso */}
          <Grid item xs={12}>
            <FormControl>
              <FormLabel>Horarios</FormLabel>
              <RadioGroup value={selected} onChange={handleChange}>
                {bookTime &&
                  bookTime.map(({ hora, isActive }, idx) => (
                    <FormControlLabel
                      key={idx}
                      disabled={!isActive}
                      value={hora}
                      control={<Radio />}
                      label={hora}
                    />
                  ))}
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Divider />
          </Grid>

          <Grid item xs={12}>
            <Box className={classes.flexButtons}>
              <Button
                variant="contained"
                component={Link}
                to="/dashboard/reservar-mesa-a"
              >
                Volver
              </Button>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/dashboard/reservar-mesa-c"
              >
                Siguiente
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default VerDescripcionProductoAPage;
