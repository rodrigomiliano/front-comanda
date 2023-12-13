import {
  Container,
  Divider,
  Grid,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import GroupIcon from "@material-ui/icons/Group";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  contImg: {
    width: "100%",
    height: "220px",
    overflow: "hidden",
    backgroundImage: 'url("../src/assets/images/la-reverde.jpg")',
    backgroundPosition: "center",
    borderRadius: "6px",
  },
  flexButtons: {
    margin: "20px 0",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  btn: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  flexButtonsDate: {
    margin: "20px 0 40px 0",
    display: "flex",
    flexWrap: "wrap",
    width: "30%",
    justifyContent: "center",
  },
  flexTotal: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
}));

function ReservarMesaEPage() {
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
            <ListItemText
              primary="La parrilla vegana"
              secondary="Montevideo 98, C.A.B.A."
            />
          </ListItem>
        </List>

        <Grid item xs={12}>
          <Divider />
        </Grid>

        <Grid container alignContent="flex-end" className={classes.flexTotal}>
          <Grid item xs={6} className={classes.flexButtonsDate}>
            <Button
              className={classes.btn}
              variant="contained"
              color="primary"
              style={{ width: "auto" }}
            >
              DOM 13 JUN
            </Button>
            <Button
              className={classes.btn}
              variant="contained"
              color="primary"
              style={{ width: "100px" }}
            >
              22:00HS
            </Button>
            <Button
              className={classes.btn}
              variant="contained"
              startIcon={<GroupIcon />}
              style={{ width: "100px" }}
              color="primary"
            >
              4
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Divider />
        </Grid>

        <Grid item xs={12} className={classes.flexEnd}>
          <Box className={classes.flexButtons}>
            <Button
              variant="contained"
              component={Link}
              to="/dashboard/reservar-mesa-c"
            >
              Volver
            </Button>
            <Button variant="contained" color="primary" component={Link} to="/dashboard/confirma-reserva">
              Confirmar reserva
            </Button>
          </Box>
        </Grid>
      </Container>
    </>
  );
}

export default ReservarMesaEPage;
