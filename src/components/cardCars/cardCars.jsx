import { Conteiner } from "./style";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/authContext";

export function CardCars({imagemCars, title, date, prices, id, category }){

    const { user } = useAuth()

    function handleDetails(){
        if(!user){
            alert("Faça login para continuar a navegação")
        }
    }

    if(date){
        const [ newDate ] = date.split(" ")

        const formatDate = newDate.replace(/-/g,"/").split("/").reverse().join("/")

        date = formatDate
    }

    return(
        <Conteiner>
            <img src={imagemCars} alt={title}/>
            <section>
                <h3>{title}</h3>
                <p>anunciado em:</p>
                <p>{date}</p>
            </section>
            <span>
                <h3>R$ {prices}</h3>

                <Link 
                    onClick={handleDetails}
                    to={user ? `/details/${category}/${id}`: "/" }
                >view more</Link>
            </span>
        </Conteiner>
    )
}