import { Conteiner, Forms } from "./style";
import { FaArrowLeft } from "react-icons/fa";
import { Await, Link } from "react-router-dom";

import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";

import { useState } from "react";
import { useAuth } from "../../hooks/authContext";

import { useNavigate } from "react-router-dom";


export function Signin(){

    const [email, setEmail ] = useState("")
    const [password, setPassword ] = useState("")

    const {signIn}= useAuth()

    const usenavigate = useNavigate()

    async function handleSingnin(){
       const user = await signIn({email, password})

       user && usenavigate("/")
    }

    return(
        <Conteiner>
            <nav>
                <Link to="/" >
                    <Button 
                        icon={<FaArrowLeft />}
                    />
                </Link>
            </nav>
            <main>
                <Forms>
                    <section>
                        <h1>Entrar</h1>
                        <p>Digite os seus dados de acessos no campo abaixo.</p>
                    </section>

                    <section>
                        <Input 
                            label="E-mail" 
                            type="email" 
                            placeholder="Digite seu e-mail" 
                            onChange={e => setEmail(e.target.value)}
                        />

                        <Input
                            label="Senha" 
                            type="password" 
                            placeholder="Digite sua senha" 
                            onChange={e => setPassword(e.target.value)} 
                        />
                    </section>

                    <Button 
                        title="entrar"
                        type="button"
                        isActive
                        onClick={handleSingnin}
                    />
                </Forms>
            </main>
        </Conteiner>
    )
}