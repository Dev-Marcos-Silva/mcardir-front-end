import { Conteiner, Menu } from "./style";

import { Logo } from "../logo/logo"
import { Profile } from "../profile/profile";
import { Login } from "../login/login";
import { useAuth } from "../../hooks/authContext";


export function Header({}){

    const { user } = useAuth()

    return(
        <Conteiner>
            <Logo/>

            <Menu>
                { 
                    user? <Profile/> : <Login/>
                }
            </Menu>
        </Conteiner>
    )
}