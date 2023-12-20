import { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import {
  AppBar as AppBarMIU,
  CssBaseline,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from "@material-ui/core";

import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import HomeIcon from "@material-ui/icons/Home";
import BusinessIcon from "@material-ui/icons/Business";
import PeopleIcon from "@material-ui/icons/People";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import LocalDiningIcon from "@material-ui/icons/LocalDining";
import RoomServiceIcon from "@material-ui/icons/RoomService";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function AppBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const getUser = () => {
    debugger;
    const user = localStorage.getKey("user");
    return user != null;
  };

  return (
    <>
      <CssBaseline />
      <AppBarMIU
        position="static"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            COMANDA
          </Typography>
        </Toolbar>
      </AppBarMIU>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        {/* <List>
          {['Inicio', 'Locales', 'Usuarios'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <CalendarTodayIcon /> : <FavoriteIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Gestión de órdenes', 'Mesas', 'Productos', ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}

        <List component="nav">
          <ListItem button component={Link} to="/admin/ver-inicio">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Inicio" />
          </ListItem>

          <ListItem
            button
            component={Link}
            to="/admin/alta-locales"
            hidden={getUser}
          >
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText primary="Locales" />
          </ListItem>

          <ListItem button component={Link} to="/admin/alta-usuarios">
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Usuarios" />
          </ListItem>

          <ListItem button component={Link} to="/admin/gestion-ordenes">
            <ListItemIcon>
              <FreeBreakfastIcon />
            </ListItemIcon>
            <ListItemText primary="Gestión de órdenes" />
          </ListItem>

          <ListItem button component={Link} to="/admin/alta-mesas">
            <ListItemIcon>
              <LocalDiningIcon />
            </ListItemIcon>
            <ListItemText primary="Mesas" />
          </ListItem>

          <ListItem button component={Link} to="/admin/alta-productos">
            <ListItemIcon>
              <RoomServiceIcon />
            </ListItemIcon>
            <ListItemText primary="Productos" />
          </ListItem>

          <ListItem
            button
            component={Link}
            to="/admin/estadisticas-facturacion"
          >
            <ListItemIcon>
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary="Estadísticas y facturación" />
          </ListItem>

          <ListItem button component={Link} to="/admin/alta-categorias">
            <ListItemIcon>
              <LocalOfferIcon />
            </ListItemIcon>
            <ListItemText primary="Categorías populares" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default AppBar;
