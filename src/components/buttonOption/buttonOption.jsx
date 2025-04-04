import { Conteiner } from "./style";

export function ButtonOption( { title, isActive, background } ){
    return(
        <Conteiner 
            $isActive={isActive}
            $background={background}
        >
           <p>{title}</p>
        </Conteiner>
    )
}