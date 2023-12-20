import { Routes, Route } from "react-router-dom";
import { Container } from "@material-ui/core";

import AppBar from "../Components/AppBar";

import BienvenidaIngresoPage from "../pages/Admin/BienvenidaIngresoPage";
import BienvenidaIngresoPageError from "../pages/Admin/BienvenidaIngresoPageError";
import RestablecerPassPage from "../pages/Admin/RestablecerPassPage";
import RestablecerPassPage2 from "../pages/Admin/RestablecerPassPage2";
import RestablecerPassPageError from "../pages/Admin/RestablecerPassPageError";
import RestablecerPassPageError2 from "../pages/Admin/RestablecerPassPageError2";
import MailRestablecerPage from "../pages/Admin/MailRestablecerPage";
import MailRestablecerPageError1 from "../pages/Admin/MailRestablecerPageError1";
import MailRestablecerPageError2 from "../pages/Admin/MailRestablecerPageError2";
import MailRestablecerPage2 from "../pages/Admin/MailRestablecerPage2";
import VerInicioPage from "../pages/Admin/VerInicioPage";
import AltaLocalesPage from "../pages/Admin/AltaLocalesPage";
import AltaLocalesPage2 from "../pages/Admin/AltaLocalesPage2";
import AltaLocalesPage2Error1 from "../pages/Admin/AltaLocalesPage2Error1";
import AltaLocalesPage3 from "../pages/Admin/AltaLocalesPage3";
import BajaLocalesPage from "../pages/Admin/BajaLocalesPage";
import EditarLocalesPage from "../pages/Admin/EditarLocalesPage";
import EditarLocalesPage2 from "../pages/Admin/EditarLocalesPage2";
import EditarLocalesPage3 from "../pages/Admin/EditarLocalesPage3";
import RegistrarUsuarioPage from "../pages/Admin/RegistrarUsuarioPage";
import RegistrarUsuarioPage2 from "../pages/Admin/RegistrarUsuarioPage2";
import RegistrarUsuarioErrorPage from "../pages/Admin/RegistrarUsuarioErrorPage";
import RegistrarUsuarioErrorPage2 from "../pages/Admin/RegistrarUsuarioErrorPage2";
import AltaUsuariosPage from "../pages/Admin/AltaUsuariosPage";
import AltaUsuariosPage2 from "../pages/Admin/AltaUsuariosPage2";
import AltaUsuariosPage2Error1 from "../pages/Admin/AltaUsuariosPage2Error1";
import AltaUsuariosPage3 from "../pages/Admin/AltaUsuariosPage3";
import EditarUsuariosPage from "../pages/Admin/EditarUsuariosPage";
import EditarUsuariosPage2 from "../pages/Admin/EditarUsuariosPage2";
import BajaUsuariosPage from "../pages/Admin/BajaUsuariosPage";
import GestionOrdenesPage from "../pages/Admin/GestionOrdenesPage";
import GestionOrdenesPage2 from "../pages/Admin/GestionOrdenesPage2";
import AltaMesasPage from "../pages/Admin/AltaMesasPage";
import AltaMesasPage2 from "../pages/Admin/AltaMesasPage2";
import AltaMesasPage3 from "../pages/Admin/AltaMesasPage3";
import EditarMesasPage from "../pages/Admin/EditarMesasPage";
import EditarMesasPage2 from "../pages/Admin/EditarMesasPage2";
import BajaMesasPage from "../pages/Admin/BajaMesasPage";
import AltaProductosPage from "../pages/Admin/AltaProductosPage";
import AltaProductosPage2 from "../pages/Admin/AltaProductosPage2";
import AltaProductosPage2Error1 from "../pages/Admin/AltaProductosPage2Error1";
import AltaProductosPage3 from "../pages/Admin/AltaProductosPage3";
import EditarProductosPage from "../pages/Admin/EditarProductosPage";
import EditarProductosPage2 from "../pages/Admin/EditarProductosPage2";
import BajaProductosPage from "../pages/Admin/BajaProductosPage";
import AltaCategoriasPage from "../pages/Admin/AltaCategoriasPage";
import AltaCategoriasPage2 from "../pages/Admin/AltaCategoriasPage2";
import AltaCategoriasPage2Error1 from "../pages/Admin/AltaCategoriasPage2Error1";
import AltaCategoriasPage3 from "../pages/Admin/AltaCategoriasPage3";
import BajaCategoriasPage from "../pages/Admin/BajaCategoriasPage";
import EditarCategoriasPage from "../pages/Admin/EditarCategoriasPage";
import EditarCategoriasPageError1 from "../pages/Admin/EditarCategoriasPageError1";
import EditarCategoriasPage2 from "../pages/Admin/EditarCategoriasPage2";
import EstadisticasFacturacionPage from "../pages/Admin/EstadisticasFacturacionPage";

const AdminRouter = () => {
  return (
    <Container maxWidth="xl" disableGutters={true}>
      <Routes>
        <Route path="/" element={<BienvenidaIngresoPage />} />
        <Route path="bienvenida-ingreso-error" element={<BienvenidaIngresoPageError />} />
          <Route path="restablecer-pass" element={<RestablecerPassPage />} />
          <Route path="restablecer-pass-2" element={<RestablecerPassPage2 />} />
          <Route path="restablecer-pass-error-1" element={<RestablecerPassPageError />} />
          <Route path="restablecer-pass-error-2" element={<RestablecerPassPageError2 />} />
          <Route path="mail-restablecer" element={<MailRestablecerPage />} />
          <Route path="mail-restablecer-error-1" element={<MailRestablecerPageError1 />} />
          <Route path="mail-restablecer-error-2" element={<MailRestablecerPageError2 />} />
          <Route path="mail-restablecer-2" element={<MailRestablecerPage2 />} />
          <Route path="registrar-usuario" element={<RegistrarUsuarioPage />} />
          <Route path="registrar-usuario-2" element={<RegistrarUsuarioPage2 />} />
          <Route path="registrar-usuario-error-1" element={<RegistrarUsuarioErrorPage />} />
          <Route path="registrar-usuario-error-2" element={<RegistrarUsuarioErrorPage2 />} />
        <Route path="/*" element={<WithAppBar />} />
      </Routes>
    </Container>
  );
};

const WithAppBar = ({ children }) => {
  return (
    <Container maxWidth="xl" disableGutters={true}>
      <AppBar />
      {children}
      <Container>
        <Routes>          
          <Route path="ver-inicio" element={<VerInicioPage />} />
          <Route path="alta-locales" element={<AltaLocalesPage />} />
          <Route path="alta-locales-2" element={<AltaLocalesPage2 />} />
          <Route path="alta-locales-2-error-1" element={<AltaLocalesPage2Error1 />} />
          <Route path="alta-locales-3" element={<AltaLocalesPage3 />} />          
          <Route path="baja-locales" element={<BajaLocalesPage />} />
          <Route path="editar-locales/:id" element={<EditarLocalesPage />} />
          <Route path="editar-locales-2" element={<EditarLocalesPage2 />} />
          <Route path="editar-locales-3" element={<EditarLocalesPage3 />} />          
          <Route path="alta-usuarios" element={<AltaUsuariosPage />} />
          <Route path="alta-usuarios-2" element={<AltaUsuariosPage2 />} />
          <Route path="alta-usuarios-2-error-1" element={<AltaUsuariosPage2Error1 />} />
          <Route path="alta-usuarios-3" element={<AltaUsuariosPage3 />} />
          <Route path="editar-usuarios/:id" element={<EditarUsuariosPage />} />
          <Route path="editar-usuarios-2" element={<EditarUsuariosPage2 />} />
          <Route path="baja-usuarios" element={<BajaUsuariosPage />} />
          <Route path="gestion-ordenes" element={<GestionOrdenesPage />} />
          <Route path="gestion-ordenes-2" element={<GestionOrdenesPage2 />} />
          <Route path="alta-mesas" element={<AltaMesasPage />} />
          <Route path="alta-mesas-2" element={<AltaMesasPage2 />} />
          <Route path="alta-mesas-3" element={<AltaMesasPage3 />} />
          <Route path="editar-mesas/:id" element={<EditarMesasPage />} />
          <Route path="editar-mesas-2" element={<EditarMesasPage2 />} />
          <Route path="baja-mesas" element={<BajaMesasPage />} />
          <Route path="alta-productos" element={<AltaProductosPage />} />
          <Route path="alta-productos-2" element={<AltaProductosPage2 />} />
          <Route path="alta-productos-2-error-1" element={<AltaProductosPage2Error1 />} />
          <Route path="alta-productos-3" element={<AltaProductosPage3 />} />
          <Route path="editar-productos/:id" element={<EditarProductosPage />} />
          <Route path="editar-productos-2" element={<EditarProductosPage2 />} />
          <Route path="baja-productos" element={<BajaProductosPage />} />
          <Route path="estadisticas-facturacion" element={<EstadisticasFacturacionPage />} />
          <Route path="alta-categorias" element={<AltaCategoriasPage />} />
          <Route path="alta-categorias-2" element={<AltaCategoriasPage2 />} />
          <Route path="alta-categorias-2-error-1" element={<AltaCategoriasPage2Error1 />} />
          <Route path="alta-categorias-3" element={<AltaCategoriasPage3 />} />
          <Route path="baja-categorias" element={<BajaCategoriasPage />} />
          <Route path="editar-categorias/:id" element={<EditarCategoriasPage />} />
          <Route path="editar-categorias-error-1" element={<EditarCategoriasPageError1 />} />
          <Route path="editar-categorias-2" element={<EditarCategoriasPage2 />} />          
        </Routes>
      </Container>
    </Container>
  );
};

export default AdminRouter;
