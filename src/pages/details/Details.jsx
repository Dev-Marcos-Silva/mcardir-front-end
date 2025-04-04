import { Conteiner, DetailsCar, SectionCar, SectionText, SectionProfile, SectionTags, SectionContact } from "./style";
import { FaArrowLeft } from "react-icons/fa";

import { Button } from "../../components/button/button";
import { Tags } from "../../components/tags/tags";

import imagemProfile from "../../assets/img/perfil.jpeg";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Details(){

    const [details, setDetails] = useState({})
    const [users, setUsers ] = useState({})
    const [tags, setTags ] = useState()

    const usenavigate = useNavigate()

    function handleBack(){
        usenavigate(-1)
    }

    const { category, id } = useParams()

    useEffect(() => {

        async function getFullCars() {
            try{
                const response = await api.get(`/category/${category}/${id}`)
                const { users, tags ,car } = response.data

                const { create_at } = car

                if(create_at){
                    const [ date ] = create_at.split(" ")

                    const formatDate = date.replace(/-/g,"/").split("/").reverse().join("/")

                    car.create_at = formatDate
                }

                setUsers(users)
                setTags(tags)
                setDetails(car)

            }catch(error){
                if(error.response){
                    alert(error.response.data.messagen)
                }else{
                    alert("Não foi possível carregar as informações!")
                }
            }
        } 
        getFullCars()

    }, [])

    return(
        <Conteiner>
            <nav>
                <Button 
                    icon={<FaArrowLeft />}
                    onClick={handleBack}
                />
            </nav>
            <main>
                <DetailsCar>
                    <SectionCar>
                        <img src={details.imagem && `${api.defaults.baseURL}/files/post/${details.imagem}` } alt={`${details.title}`} />
                    </SectionCar>

                    <SectionText>
                        <SectionProfile>
                                <img src={users.avatar ? `${api.defaults.baseURL}/files/profile/${users.avatar}` : imagemProfile} alt={`${users.name}`} />
                                <div>
                                    <h2>{users.name}</h2> 
                                    <h3>{details.create_at}</h3>
                                </div>
                        </SectionProfile>
                        <h1>{details.title}</h1>
                        <p>{details.description}</p>
                        
                        <SectionTags>
                            {tags && tags.map(tag => { 
                                return(
                                    <Tags
                                        key={tag.id}
                                        title={tag.title}
                                    /> 
                                )    
                            })}
                        </SectionTags>

                        <span>
                            <p>R$ {details.price}</p>
                        </span>
                        <SectionContact>
                            <span>Telefone: <a href={`tel:${details.phone}`}>({details.DDD}) {details.phone}</a></span>
                            <span>Email: <a href={`mailto:${details.email}`}>{details.email}</a></span> 
                        </SectionContact>

                    </SectionText>
                </DetailsCar>
            </main>
        </Conteiner>
    )

}