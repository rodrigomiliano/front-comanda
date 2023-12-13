import { Grid, Button, Container, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import AlertComanda from "../../components/AlertComanda";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "20px",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    marginBottom: "10px",
    maxWidth: 500,
  },
  image: {
    width: 92,
    height: 92,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  total: {
    marginRight: "20px",
    borderRadius: "30px",
    backgroundColor: theme.palette.success.dark,
    padding: "8px",
    color: "white",
    width: "100%",
    fontSize: "18px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  total2: {
    marginRight: "20px",
    borderRadius: "30px",
    backgroundColor: theme.palette.primary.dark,
    color: "white",
    width: "100%",
    fontSize: "18px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flexTop: {
    marginTop: "30px",
  },
  flexMargin: {
    margin: "30px 0",
  },
}));

function MarcharOrdenPage3() {
  const classes = useStyles();

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center" className={classes.flexTop}>
        <Grid item>
          <AlertComanda
            sev="success"
            tit="Éxito"
            desc="Su orden fue marchada, por favor 
            seleccione “continuar” para volver 
            al menu principal."
          />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.flexMargin}>
        <Grid item>
          <Button
            variant="contained"
            component={Link}
            to="/dashboard/agregar-adicionales-1"
          >
            CONTINUAR
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MarcharOrdenPage3;
