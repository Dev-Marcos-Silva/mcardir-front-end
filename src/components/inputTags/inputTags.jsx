import { Conteiner } from "./style";

export function InputTags({onClick, icon, ...rest}){
    return(
        <Conteiner>
            
            <input type="text" autoComplete="off" {...rest}/>
            <button type="button" onClick={onClick}>{icon}</button>

        </Conteiner>
    )
}