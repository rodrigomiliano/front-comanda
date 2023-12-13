import { makeStyles } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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
  }
});




function MediaCard(props) {
  const classes = useStyles();

  return (
    <div className={classes.space}>
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={"https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2021/03/30/6063031b90a87.r_d.1083-871-0.jpeg"}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.nombre}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Categoría
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}

export default MediaCard