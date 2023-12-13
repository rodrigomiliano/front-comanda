import {
  Grid,
  makeStyles,
  Paper,
  Typography,
  ButtonBase,
  Box,
  Button,
} from "@material-ui/core";
import RestaurantIcon from "@material-ui/icons/Restaurant";

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
  fixed: {
    bottom: "0px",
    backgroundColor: theme.palette.primary.contrastText,
    width: "100%",
    height: "50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  total: {
    marginRight: "20px",
    borderRadius: "30px",
    backgroundColor: theme.palette.success.dark,
    padding: "8px",
    color: "white",
    fontSize: "18px",
  },
}));

function CrearOrdenCPage() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={1}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src="../src/assets/images/lomito.jpg"
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Standard license
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Full resolution 1920x1080 • JPEG
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    ID: 1030114
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    Remove
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">$19.00</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src="../src/assets/images/lomito.jpg"
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Standard license
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Full resolution 1920x1080 • JPEG
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    ID: 1030114
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    Remove
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">$19.00</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
          <Grid container spacing={1}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src="../src/assets/images/lomito.jpg"
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Standard license
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Full resolution 1920x1080 • JPEG
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    ID: 1030114
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    Remove
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">$19.00</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
          <Grid container spacing={1}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src="../src/assets/images/lomito.jpg"
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Standard license
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Full resolution 1920x1080 • JPEG
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    ID: 1030114
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    Remove
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">$19.00</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Box className={classes.fixed}>
          <Button
            variant="contained"
            color="primary"
            style={{ marginLeft: "20px", borderRadius: "30px" }}
            startIcon={<RestaurantIcon />}
          >
            Cerrar mesa
          </Button>
          <Box className={classes.total}>Total: $9000</Box>
        </Box>
      </div>
    </>
  );
}

export default CrearOrdenCPage;
