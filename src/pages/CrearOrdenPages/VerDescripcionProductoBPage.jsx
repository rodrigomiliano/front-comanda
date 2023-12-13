import {
  Box,
  Button,
  Grid,
  Chip,
  Avatar,
  makeStyles,
  Fab,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

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
    width: 100,
    height: 100,
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
  media: {
    height: 200,
  },
  flexTop: {
    marginTop: "15px",
  },
}));

function VerDescripcionProductoBPage() {
  const classes = useStyles();

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <>
      <Grid container justifyContent="center" className={classes.flexTop}>
        <Grid item xs={5}>
          <Chip
            avatar={<Avatar>$</Avatar>}
            size="medium"
            label="Visualizar consumos"
            clickable
            color="primary"
            disabled
          />
        </Grid>
      </Grid>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="../../src/assets/images/gambas-al-ajillo.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Gambas al ajillo
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
              similique cum, corporis quia commodi, molestiae quis non aliquam
              ad temporibus itaque quidem facilis architecto accusantium.
            </Typography>
            <Typography gutterBottom variant="h4" component="h2">
              $1800
            </Typography>
          </CardContent>
        </CardActionArea>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Card>

      <Box>
        <Box className={classes.total}>
          <Button
            variant="contained"
            color="primary"
            style={{ marginLeft: "20px", borderRadius: "30px" }}
            startIcon={<ShoppingCartIcon />}
            component={Link}
            to="/dashboard/modificar-orden"
          >
            1
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{ borderRadius: "30px" }}
            component={Link}
            to="/dashboard/modificar-orden"
          >
            Ver mis pedidos
          </Button>
          <Box style={{ marginRight: "20px" }}>Total: $1800</Box>
        </Box>
      </Box>
    </>
  );
}

export default VerDescripcionProductoBPage;
