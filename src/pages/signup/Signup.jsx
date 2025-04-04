import { Conteiner, Forms } from "./style";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api.js"

export function Signup(){

    const [name, setName ] = useState("")
    const [email, setEmail ] = useState("")
    const [password, setPassword ] = useState("")

    const usenavigate = useNavigate()

    async function handleSingup(){

        if(!name || !email || !password){
           return alert("Preencha todos os campos!")
        }
        
        try{
            await api.post("/users", {name, email, password})
            .then(() => {
                alert("Conta criada com sucesso!")
                usenavigate("/signin")
            })

        }catch(error){

            if(error.response){
                alert(error.response.data.messagen)
            }else{
                alert("Não foi possível fazer o cadastro!")
            }
        }
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
                        <h1>Criar</h1>
                        <p>Digite os seus dados para criar uma conta.</p>
                    </section>

                    <section>
                        <Input 
                            label="Nome" 
                            type="text" 
                            placeholder="Digite seu nome" 
                            onChange={e => setName(e.target.value)}
                        />

                        <Input 
                            label="E-mail" 
                            type="email" 
                            placeholder="Crier seu e-mail" 
                            onChange={e => setEmail(e.target.value)}
                        />

                        <Input 
                            label="Senha" 
                            type="password" 
                            placeholder="Crier sua senha"
                            min={7}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </section>


                    <Button 
                        title="Criar"
                        type="button"
                        isActive
                        onClick={() => handleSingup()}
                    />
                </Forms>
            </main>
        </Conteiner>
    )
}