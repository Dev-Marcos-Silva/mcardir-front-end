import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./app.route.jsx"
import { AuthRouter } from "./auth.routes.jsx"
import { useAuth } from "../hooks/authContext.jsx";

export function Router(){

    const { user } = useAuth()
    
    return(

        <BrowserRouter>
            { user ? <AppRouter/>:  <AuthRouter/> }
        </BrowserRouter>

    )
}