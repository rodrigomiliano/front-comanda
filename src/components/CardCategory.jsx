import { makeStyles } from "@material-ui/core/styles"
import { createTheme } from "@material-ui/core/styles"
import { Card, CardActionArea, CardContent, Typography } from "@material-ui/core"
import StoreIcon from "@material-ui/icons/Store";

const theme = createTheme();

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  space: {
    paddingBottom: theme.spacing(2),
  },
});

function MediaCard(props) {
  const classes = useStyles();

  return (
    <div className={classes.space}>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <StoreIcon fontSize="small"></StoreIcon>
              {props.nombre}
            </Typography>
            <Typography variant="h6" component="h2">              
              {props.direccion}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default MediaCard;
