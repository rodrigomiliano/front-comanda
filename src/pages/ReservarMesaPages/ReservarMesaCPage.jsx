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
import RadioButtonsGroup from "../../components/CantidadComensales";
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
    width: "60%",
    justifyContent: "space-between",
  },
  flexTotal: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  flexEnd: {
    paddingBottom: "70px",
  },
}));

function ReservarMesaCPage() {
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

        {/*     <div className={classes.flexTotal}>
          <div className={classes.flexButtonsDate}> */}
        <Grid item xs={12}>
          <RadioButtonsGroup></RadioButtonsGroup>
        </Grid>
        {/*   </div>
        </div> */}

        <Grid item xs={12}>
          <Divider />
        </Grid>

        <Grid container alignContent="flex-end" className={classes.flexEnd}>
          <Grid item xs={12}>
            <Box className={classes.flexButtons}>
              <Button
                variant="contained"
                component={Link}
                to="/dashboard/reservar-mesa-b"
              >
                Volver
              </Button>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/dashboard/reservar-mesa-d"
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

export default ReservarMesaCPage;
