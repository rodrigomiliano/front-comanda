import { Routes, Route } from "react-router-dom"
import { Container } from "@material-ui/core"

import AppBar from "../components/AppBar"

import BienvenidaPage from '../Pages/BienvenidaPages/BienvenidaPage'
import LoginUsuarioPage from '../Pages/LoginPages/LoginUsuarioPage'
import Login2ErrorPage from '../Pages/LoginPages/Login2ErrorPage'
import Login2ErrorPage2 from '../Pages/LoginPages/Login2ErrorPage2'
import RestablecerUsuarioPassPage from '../Pages/RestablecerPages/RestablecerUsuarioPassPage'
import RestablecerUsuarioPass2ErrorPage from '../Pages/RestablecerPages/RestablecerUsuarioPass2ErrorPage'
import RestablecerUsuarioPass3ErrorPage from '../Pages/RestablecerPages/RestablecerUsuarioPass3ErrorPage'
import RestablecerUsuarioPass4ExitoPage from '../Pages/RestablecerPages/RestablecerUsuarioPass4ExitoPage'
import MailPassPage from '../Pages/RestablecerPages/MailPassPage'
import MailPassPage2 from '../Pages/RestablecerPages/MailPassPage2'
import MailPassErrorPage from '../Pages/RestablecerPages/MailPassErrorPage'
import MailPassErrorPage2 from '../Pages/RestablecerPages/MailPassErrorPage2'
import RegistrarUsuarioPage from '../Pages/RegistrarPages/RegistrarUsuarioPage'
import RegistrarUsuarioErrorPage2 from '../Pages/RegistrarPages/RegistrarUsuarioErrorPage2'
import RegistrarUsuarioErrorPage3 from '../Pages/RegistrarPages/RegistrarUsuarioErrorPage3'

const LoginRouter = () => {

    return (
        <Container maxWidth="xs" disableGutters={true}>
          <AppBar />

            <Routes>
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

                <Route path="/" element={<BienvenidaPage />} />
            </Routes>

        </Container >
    )
}

export default LoginRouter