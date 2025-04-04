import { Conteiner } from "./style"
import { Button } from "../button/button"

export function PostCard({imagem, title, date, evento }){
    
    return(
        <Conteiner>
            <section>
                <img src={imagem} alt="" />
                <span>
                    <h1>{title}</h1>
                    <p>criado em:</p>
                    <p>{date}</p>
                </span>
            </section>
            <section>
                <Button 
                    title="excluir"
                    onClick={evento}
                />
            </section>
        </Conteiner>
    )
}