import { Conteiner } from "./style";

export function Input({label, ...rest}){
    return(
        <Conteiner>
            <label htmlFor={label}>{label}</label>
            <input id={label} autoComplete="off" {...rest}/>
        </Conteiner>
    )
}