import { Routes, Route } from "react-router-dom"
import { Container } from "@material-ui/core"

import AppBarComensal from "../components/AppBarComensal"
import BottomBar from "../Components/BottomBar"

import HomePage from '../pages/HomePage'
import AlertPage from '../pages/AlertPage'
import PlatePage from '../pages/PlatePage'
import BienvenidaPage from '../pages/BienvenidaPages/BienvenidaPage'
import SideMenuPage from '../pages/SideMenuPage'
import CarouselPage from '../pages/CarouselPage'
import VerMisReservasPage from '../pages/VerReservasPages/VerMisReservasPage'
import VerMisReservasErrorPage from '../pages/VerReservasPages/VerMisReservasErrorPage'
import CancelarReservaPage2 from '../pages/VerReservasPages/CancelarReservaPage2'
import OcuparMesaPage2 from '../pages/VerReservasPages/OcuparMesaPage2'
import SearchPage from "../pages/BuscarPages/SearchPage";
import SearchCategory from "../pages/BuscarPages/SearchCategory";
import SearchResto from "../pages/BuscarPages/SearchResto";
import MenuItems from "../pages/BuscarPages/MenuItems";
import MenuItem from "../pages/BuscarPages/MenuItem";
import EscanearQrErrorPage from '../pages/VerReservasPages/EscanearQrErrorPage'
import EscanearQrPage3 from '../pages/VerReservasPages/EscanearQrPage3'
import LoginUsuarioPage from '../pages/LoginPages/LoginUsuarioPage'
import Login2ErrorPage from '../pages/LoginPages/Login2ErrorPage'
import Login2ErrorPage2 from '../pages/LoginPages/Login2ErrorPage2'
import RestablecerUsuarioPassPage from '../pages/RestablecerPages/RestablecerUsuarioPassPage'
import RestablecerUsuarioPass2ErrorPage from '../pages/RestablecerPages/RestablecerUsuarioPass2ErrorPage'
import RestablecerUsuarioPass3ErrorPage from '../pages/RestablecerPages/RestablecerUsuarioPass3ErrorPage'
import RestablecerUsuarioPass4ExitoPage from '../pages/RestablecerPages/RestablecerUsuarioPass4ExitoPage'
import MailPassPage from '../pages/RestablecerPages/MailPassPage'
import MailPassPage2 from '../pages/RestablecerPages/MailPassPage2'
import MailPassErrorPage from '../pages/RestablecerPages/MailPassErrorPage'
import MailPassErrorPage2 from '../pages/RestablecerPages/MailPassErrorPage2'
import RegistrarUsuarioPage from '../pages/RegistrarPages/RegistrarUsuarioPage'
import RegistrarUsuarioErrorPage2 from '../pages/RegistrarPages/RegistrarUsuarioErrorPage2'
import RegistrarUsuarioErrorPage3 from '../pages/RegistrarPages/RegistrarUsuarioErrorPage3'
import ReservarMesaA from "../pages/ReservarMesaPages/ReservarMesaAPage"
import ReservarMesaB from "../pages/ReservarMesaPages/ReservarMesaBPage"
import ReservarMesaC from "../pages/ReservarMesaPages/ReservarMesaCPage"
import ReservarMesaD from "../pages/ReservarMesaPages/ReservarMesaDPage"
import ReservarMesaE from '../pages/ReservarMesaPages/ReservarMesaEPage'
import CrearOrdenA from "../pages/CrearOrdenPages/CrearOrdenAPage"
import CrearOrdenB from "../pages/CrearOrdenPages/CrearOrdenBPage"
import VerDescripcionProductoAPage from "../pages/CrearOrdenPages/VerDescripcionProductoAPage"
import VerDescripcionProductoBPage from "../pages/CrearOrdenPages/VerDescripcionProductoBPage"
import ModificarOrden from "../pages/CrearOrdenPages/ModificarOrdenPage"
import MarcharOrdenPage3 from "../pages/CrearOrdenPages/MarcharOrdenPage3"
import AgregarAdicionalesPage1 from "../pages/CrearOrdenPages/AgregarAdicionalesPage1"
import AgregarAdicionalesPage2 from "../pages/CrearOrdenPages/AgregarAdicionalesPage2"
import AgregarAdicionalesPage3 from "../pages/CrearOrdenPages/AgregarAdicionalesPage3"
import VisualizarConsumos from '../pages/CrearOrdenPages/VisualizarConsumos'
import CrearOrdenC from "../pages/CrearOrdenPages/CrearOrdenCPage"
import CrearOrdenD from "../pages/CrearOrdenPages/CrearOrdenDPage"
import GestionarPagoPage1 from "../pages/CrearOrdenPages/GestionarPagoPage1"
import GestionarPagoPage2 from "../pages/CrearOrdenPages/GestionarPagoPage2"
import ConfirmaReservaPage from '../pages/ReservarMesaPages/ConfirmaReservaPage'

const DashboardRouter = () => {

  return (
    <Container maxWidth="xs" disableGutters={true}>
      <AppBarComensal />

      <Routes>
        <Route path="alert" element={<AlertPage />} />
        <Route path="plate" element={<PlatePage />} />
        
        <Route path="sidemenu" element={<SideMenuPage />} />
        <Route path="ver-mis-reservas" element={<VerMisReservasPage />} />
        <Route path="ver-mis-reservas-error" element={<VerMisReservasErrorPage />} />
        <Route path="escanear-qr-error" element={<EscanearQrErrorPage />} />
        <Route path="escanear-qr-3" element={<EscanearQrPage3 />} />
        <Route path="cancelar-reserva-2" element={<CancelarReservaPage2 />} />
        <Route path="ocupar-mesa-2" element={<OcuparMesaPage2 />} />
        <Route path="carousel" element={<CarouselPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="category/:id" element={<SearchCategory />} />
        <Route path="resto/:id" element={<SearchResto />} />
        <Route path="items/:id" element={<MenuItems />} />        
        <Route path="item/:id" element={<MenuItem />} />
        <Route path="login-usuario" element={<LoginUsuarioPage />} />
        <Route path="login-2-error-1" element={<Login2ErrorPage />} />
        <Route path="login-2-error-2" element={<Login2ErrorPage2 />} />
        <Route path="restablecer-usuario-pass" element={<RestablecerUsuarioPassPage />} />
        <Route path="restablecer-usuario-pass-2-error" element={<RestablecerUsuarioPass2ErrorPage />} />
        <Route path="restablecer-usuario-pass-3-error" element={<RestablecerUsuarioPass3ErrorPage />} />
        <Route path="restablecer-usuario-pass-4-exito" element={<RestablecerUsuarioPass4ExitoPage />} />
        <Route path="mail-pass" element={<MailPassPage />} />
        <Route path="mail-pass-2" element={<MailPassPage2 />} />
        <Route path="mail-pass-error" element={<MailPassErrorPage />} />
        <Route path="mail-pass-error-2" element={<MailPassErrorPage2 />} />
        <Route path="registrar-usuario" element={<RegistrarUsuarioPage />} />
        <Route path="registrar-usuario-error-2" element={<RegistrarUsuarioErrorPage2 />} />
        <Route path="registrar-usuario-error-3" element={<RegistrarUsuarioErrorPage3 />} />
        <Route path="reservar-mesa-a" element={<ReservarMesaA />} />
        <Route path="reservar-mesa-b" element={<ReservarMesaB />} />
        <Route path="reservar-mesa-c" element={<ReservarMesaC />} />
        <Route path="reservar-mesa-d" element={<ReservarMesaD />} />
        <Route path="reservar-mesa-e" element={<ReservarMesaE />} />
        <Route path="crear-orden-a" element={<CrearOrdenA />} />
        <Route path="crear-orden-b" element={<CrearOrdenB />} />
        <Route path="ver-descripcion-producto-a" element={<VerDescripcionProductoAPage />} />
        <Route path="ver-descripcion-producto-b" element={<VerDescripcionProductoBPage />} />
        <Route path="modificar-orden" element={<ModificarOrden />} />
        <Route path="marchar-orden-3" element={<MarcharOrdenPage3 />} />            
        <Route path="agregar-adicionales-1" element={<AgregarAdicionalesPage1 />} />  
        <Route path="agregar-adicionales-2" element={<AgregarAdicionalesPage2 />} />  
        <Route path="agregar-adicionales-3" element={<AgregarAdicionalesPage3 />} />  
        <Route path="visualizar-consumos" element={<VisualizarConsumos />} />
        <Route path="crear-orden-c" element={<CrearOrdenC />} />
        <Route path="crear-orden-d" element={<CrearOrdenD />} />    
        <Route path="gestionar-pago-1" element={<GestionarPagoPage1 />} />    
        <Route path="gestionar-pago-2" element={<GestionarPagoPage2 />} />    
        <Route path="confirma-reserva" element={<ConfirmaReservaPage />} />

        <Route path="/" element={<BienvenidaPage />} />


      </Routes>

      <BottomBar />

    </Container >
  )
}

export default DashboardRouter