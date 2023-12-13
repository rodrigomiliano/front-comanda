import { useState } from "react";
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
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
  flexCalendar: {
    display: "flex",
    justifyContent: "center",
    margin: "20px 0",
  },
  flexButtons: {
    margin: "20px 0",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
}));

function ReservarMesaAPage() {
  const classes = useStyles();

  const [date, onDate] = useState(new Date());

  return (
    <>
      <Container disableGutters={true}>
        <div className={classes.contImg}></div>
      </Container>

      <Container>
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

        <Divider />

        <Box className={classes.flexCalendar}>
          <Calendar onChange={onDate} value={date} />
        </Box>

        <Divider />

        <Box className={classes.flexButtons}>
          <Button variant="contained" component={Link} to="/dashboard/resto">
            Volver
          </Button>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/dashboard/reservar-mesa-b"
          >
            Siguiente
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default ReservarMesaAPage;
