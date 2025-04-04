import { Conteiner } from "./style"

export function Tags({ title, istag, onClick, icon }){
    return(
        <Conteiner>
            
            <p>{title}</p>
            
            {
                istag? <button type="button" onClick={onClick}>{icon}</button> : <span></span>
            }
            
        </Conteiner>
    )
}