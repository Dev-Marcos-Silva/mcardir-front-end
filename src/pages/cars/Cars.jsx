import { Conteiner, SectionCars } from "./style";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Button } from "../../components/button/button";
import { CardCars } from "../../components/cardCars/cardCars";

import { useParams, } from "react-router-dom";
import { useEffect, useState } from "react"

import { api } from "../../services/api"

export function Cars (){

    const [collection, setCollection ] = useState([])

    const { category } = useParams()

    useEffect( () => {
        
        async function getCategory(){
            try{
                const response = await api.get(`/category/${category}`)

                const [ data ] = response.data

                if(data.date){
                    
                }

                setCollection(response.data)

            }catch(error){
                if(error.response){
                    //alert(error.response.data.messagen)
                }else{
                    alert("Não foi possival entrar na página!")
                }
            }
        }
        getCategory()
        
    }, [])

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
                <SectionCars>
                    {
                        collection && collection.map(option => {
                            return(
                                <CardCars
                                    key={option.id}
                                    imagemCars={`${api.defaults.baseURL}/files/post/${option.imagem}`}
                                    title={option.title}
                                    date={option.date}
                                    prices={option.price}
                                    id={option.id}
                                    category={category}
                                /> 
                            )
                        })

                    }
                </SectionCars>
            </main>
        </Conteiner>
    )
}