import { Grid, Button, Container, makeStyles } from "@material-ui/core";
import AlertComanda from "../../components/AlertComanda";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  flexTop: {
    marginTop: "30px",
  },
  flexMargin: {
    margin: "30px 0",
  },
}));

function MarcharOrdenPage3() {
  const classes = useStyles();

  useEffect(() => {
    // Llamada a la API para obtener las categorías
    fetch(`http://localhost:8080/comanda/categoria`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCategoria(data || []);
      })
      .catch((error) => {
        console.error("Error al obtener categorías:", error);
      });

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.forEach((x) => setTotalAmount(totalAmount + x.precio));
    setCartCounter(cart.length);
  }, []);

  return (
    <>
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

        {/*TODO: linkear con el id del local, acá loe stoy seteando manualmente*/}
        <Grid container justifyContent="center" className={classes.flexMargin}>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/agregar-adicionales-1/1"
            >
              CONTINUAR
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default MarcharOrdenPage3;
