import { Conteiner } from "./style";
import { Link } from "react-router-dom";

import { Button } from "../button/button";

export function Login(){
    return(
        <Conteiner>
            <Link to="/signup" ><Button title="Criar"/></Link>
            <Link to="/signin" ><Button title="Entrar "/></Link>  
        </Conteiner>
    )
}