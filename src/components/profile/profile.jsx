import { User } from "./style";
import { FaPowerOff, FaPlus  } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/authContext";

import imagemAvatar from "../../assets/img/perfil.jpeg"

import { Button } from "../button/button";
import { useState } from "react";

import { api } from "../../services/api";

export function Profile(){

    const { signOut, user }= useAuth()

    const avatar = user.avatar ? `${api.defaults.baseURL}/files/profile/${user.avatar}` : imagemAvatar

    const [ imagem, setImagem ] = useState(avatar)

    function handleSingnout(){
        signOut()
    }

    return(
        <User>
            <Link to="/profile" ><img src={imagem} alt={`avatar ${user.name}`} /></Link>

            <Link to="/new" >
                <Button
                    icon={<FaPlus />}
                />
            </Link>

            <Button 
                icon={<FaPowerOff />}
                onClick={handleSingnout}
            />
        </User>
    )
}