import { Container, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GroupIcon from '@material-ui/icons/Group';

const useStyles = makeStyles((theme) => ({
  contImg: {
    width: '100%',
    height: '220px',
    overflow: 'hidden',
    backgroundImage: 'url("../src/assets/images/la-reverde.jpg")',
    backgroundPosition: 'center',
    borderRadius: '6px'
  },
  flexButtons: {
    margin: '20px 0',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },
  btn: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  flexButtonsDate: {
    margin: '20px 0 40px 0',
    display: 'flex',
    flexWrap: 'wrap',
    width: '60%',
    justifyContent: 'space-between',
  },
  flexTotal: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  }
}));

function ReservarMesaCPage() {

  const classes = useStyles()

  return (
    <>

      <div className={classes.contImg}></div>

      <Container>
        <List>
          <ListItem>
            <ListItemIcon>
              <LocationOnIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="La parrilla vegana" secondary="Montevideo 98, C.A.B.A." />
          </ListItem>
        </List>

        <Divider />

        <div className={classes.flexTotal}>
          <div className={classes.flexButtonsDate}>
            <Button className={classes.btn} variant="contained" startIcon={<GroupIcon />} style={{ width: '68px' }}>1</Button>
            <Button className={classes.btn} variant="contained" startIcon={<GroupIcon />} style={{ width: '68px' }}>2</Button>
            <Button className={classes.btn} variant="contained" startIcon={<GroupIcon />} style={{ width: '68px' }}>3</Button>
            <Button className={classes.btn} variant="contained" startIcon={<GroupIcon />} style={{ width: '68px' }}>4</Button>
            <Button className={classes.btn} variant="contained" color="primary" startIcon={<GroupIcon />} style={{ width: '68px' }}>5</Button>
            <Button className={classes.btn} variant="contained" startIcon={<GroupIcon />} style={{ width: '68px' }}>6</Button>
            <Button className={classes.btn} variant="contained" startIcon={<GroupIcon />} style={{ width: '68px' }}>7</Button>
            <Button className={classes.btn} variant="contained" startIcon={<GroupIcon />} style={{ width: '68px' }}>8</Button>
            <Button className={classes.btn} variant="contained" startIcon={<GroupIcon />} style={{ width: '68px' }}>9</Button>
            <Button className={classes.btn} variant="contained" startIcon={<GroupIcon />} style={{ width: '68px' }}>10</Button>
          </div>
        </div>


        <Divider />

        <div className={classes.flexButtons}>
          <Button variant="contained">Volver</Button>
          <Button variant="contained" color="primary">
            Siguiente
          </Button>
        </div>
      </Container>



    </>
  )
}

export default ReservarMesaCPage