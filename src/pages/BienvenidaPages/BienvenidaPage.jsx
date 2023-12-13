import { Link } from "react-router-dom";
import { Container, Grid, Button, Typography } from "@material-ui/core";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode, Pagination } from "swiper";

import HouseIcon from "@material-ui/icons/House";
import CheckIcon from "@material-ui/icons/Check";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import ExploreIcon from "@material-ui/icons/Explore";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

function BienvenidaPage() {
  SwiperCore.use([FreeMode, Pagination]);

  return (
    <Container disableGutters={true}>
      <Container>
        <Swiper
          style={{ width: "100%", height: "100vh" }}
          pagination={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Grid
              container
              justifyContent="center"
              direction="column"
              spacing={3}
            >
              <Grid item>
                <Typography variant="h3" component="h1">
                  ComÁnda
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5" component="h2">
                  Te damos la bienvenida
                </Typography>
                <Typography>
                  La aplicación para ver la carta y pedir en tu restorante
                  favorito
                </Typography>
              </Grid>
              {/* <Grid item>
                <Button variant="contained" color="primary">
                  Empezar
                </Button>
              </Grid> */}
            </Grid>
          </SwiperSlide>

          <SwiperSlide>
            <Grid
              container
              justifyContent="center"
              direction="column"
              spacing={3}
            >
              <Grid item>
                <Typography variant="h4" component="h1">
                  ¿Cómo funciona?
                </Typography>
              </Grid>
              <Grid item>
                <HouseIcon fontSize="large"></HouseIcon>
                <Typography variant="h5" component="h2">
                  Encuentra un restaurante
                </Typography>
                <Typography>Según tus preferencias y antojos</Typography>
              </Grid>
              <Grid item>
                <CheckIcon fontSize="large"></CheckIcon>
                <Typography variant="h5" component="h2">
                  Productos actualizados
                </Typography>
                <Typography>Menú completo y detallado para vos</Typography>
              </Grid>
              <Grid item>
                <MenuBookIcon fontSize="large"></MenuBookIcon>
                <Typography variant="h5" component="h2">
                  La carta en tu mano
                </Typography>
                <Typography>
                  Llegas al local y puedes empezar a pedir desde tu celular
                </Typography>
              </Grid>
              {/* <Grid item>
                <Button variant="contained" color="primary">
                  Continuar
                </Button>
              </Grid> */}
            </Grid>
          </SwiperSlide>

          <SwiperSlide>
            <Grid
              container
              justifyContent="center"
              direction="column"
              spacing={3}
            >
              <Grid item>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  component={Link}
                  to="/dashboard/search"
                >
                  Continuar sin aceptar
                </Button>
              </Grid>
              <Grid item>
                <Typography variant="h4" component="h1">
                  Los mejores locales cerca tuyo
                </Typography>
              </Grid>
              <Grid item>
                <ExploreIcon fontSize="large"></ExploreIcon>
                <Typography>
                  Comparte tu ubicación con nosotros para que podemos mostrarte
                  los mejores locales cerca de donde estés
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/dashboard/search"
                >
                  Aceptar y continuar
                </Button>
              </Grid>
            </Grid>
          </SwiperSlide>
        </Swiper>
      </Container>
    </Container>
  );
}

export default BienvenidaPage;
