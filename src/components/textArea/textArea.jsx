import { Conteiner } from "./style";

export function TextArea({label, ...rest}){
    return(
        <Conteiner>
            <label htmlFor={label}>{label}</label>
            <textarea {...rest} id={label}></textarea>
        </Conteiner>
    )
}