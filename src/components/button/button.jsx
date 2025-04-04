import { Conteiner } from "./style";

export function Button( { title, icon, isActive=false, ...rest } ){
    return(
        <Conteiner $isActive={isActive} {...rest}>
            {title}{icon}
        </Conteiner>
    )
}