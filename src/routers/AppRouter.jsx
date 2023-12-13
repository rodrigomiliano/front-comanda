import { Routes, Route } from "react-router-dom"

import AdminRouter from "./AdminRouter"
import DashboardRouter from "./DashboardRouter"
import LoginRouter from "./LoginRouter"

const AppRouter = () => {
    return (

        <Routes>
          <Route path="/*" element= { <LoginRouter />} />
          <Route path="/admin/*" element= { <AdminRouter />} />
          <Route path="/dashboard/*" element= { <DashboardRouter />} />
        </Routes>

    )
}

export default AppRouter;