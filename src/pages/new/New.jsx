import { Conteiner, Forms, SectionProfile, SectionCar, SectionImagem, SectionSelect, SectionTags, Phone } from "./style";
import { FaArrowLeft } from "react-icons/fa";
import { FaPlus, FaX   } from "react-icons/fa6";
import { IoMdCamera } from "react-icons/io";
import { Link } from "react-router-dom";

import { useState } from "react";

import imagemProfile from"../../assets/img/perfil.jpeg";
import imagemCar from"../../assets/img/Honda_Fit.png";

import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { TextArea } from "../../components/textArea/textArea";
import { InputTags } from "../../components/inputTags/inputTags";
import { Tags } from "../../components/tags/tags";

import { useAuth } from "../../hooks/authContext"
import { api } from "../../services/api";

export function New (){

    const { user } = useAuth()

    const [ title, setTitle ] = useState()
    const [ price, setPrice ] = useState()
    const [ category, setCategory] = useState()
    const [ description, setDescription ] = useState()
    const [ tags, setTags ] = useState([])
    const [ email, setEmail ] = useState(user.email)
    const [ ddd, setDdd ] = useState()
    const [ phone, setPhone ] = useState()

    const [ img, setImg ] = useState(imagemCar)
    const [ fileImg, setFileImg ] = useState(null)
    const [ newTag, setNewTag ] = useState("")
    
    function handleImg(event){
        const fileImg = event.target.files[0]
        setFileImg(fileImg)

        const imagemPreviw = URL.createObjectURL(fileImg)
        setImg(imagemPreviw)
    }

    function handleNewTags(){
        setTags(prevState => [...prevState, newTag]);
        setNewTag("")
    }

    function handleDeleteTags(deleted){
        setTags(prevState => prevState.filter(Tag => Tag !== deleted))
    }

    const data = new Date()

    let year = data.getFullYear()
    let day = data.getDate()
    let month = String(data.getMonth() + 1).padStart(2, '0'); 

    async function handleForm(){
        newTag && alert("Certifique de adicionar as tags!")

        if(!title || !price || !category || !description || !email || !ddd || !phone ){
            alert("Preencha o formulário completo!")
            return
        }
        if(!fileImg){
            alert("Escolha uma imagem valida!")
            return
        }

        try{
            const post = {
                title,
                price,
                category,
                description,
                tags,
                email,
                phone,
                ddd
            }

            const newPost = JSON.stringify(post)
            const formData = new FormData()

            formData.append("imagem", fileImg)
            formData.append("dados", newPost)

            const response = await api.post("/post", formData)

            alert(response.data.messagen)

            window.location.reload()

        }catch(error){

            if(error.response){
                alert(error.response.data.messagen)
            }else{
                alert("Não foi possível criar o anúncio!")
            }

        }
        
    }

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
                <Forms>
                    <div>
                        <SectionProfile>
                            <img src={user.avatar ? `${api.defaults.baseURL}/files/profile/${user.avatar}` : imagemProfile} alt={`${user.name}`} />
                                <div>
                                    <h2>{user.name}</h2> 
                                    <h3>{day}/{month}/{year}</h3>
                                </div>
                        </SectionProfile>

                        <SectionCar>
                            <Input
                                label="Preço"
                                type="number"
                                min="0"
                                placeholder="00.000"
                                onChange={e => setPrice(e.target.value)}
                            />
                            
                            <Input
                                label="Carro"
                                type="text"
                                placeholder="Nome do carro"
                                onChange={e => setTitle(e.target.value)}
                            />
                        </SectionCar>

                        <SectionImagem>
                            <img src={img} alt="imagens carros" />

                            <span>
                                <div>
                                    <IoMdCamera />
                                    <input type="file" onChange={handleImg} />
                                </div>
                            </span>
                        </SectionImagem>

                        <SectionSelect>
                            <span>
                                <Input 
                                    type="radio" 
                                    name="category" 
                                    id="sedan" 
                                    value="sedan"
                                    onClick={e => setCategory(e.target.value)}
                                />
                                <label htmlFor="sedan">Sedan</label>
                            </span>
                            
                            <span>
                                <Input 
                                    type="radio" 
                                    name="category" 
                                    id="compact" 
                                    value="compact"
                                    onClick={e => setCategory(e.target.value)}
                                />
                                <label htmlFor="compact">Compact</label>
                            </span>

                            <span>
                                <Input 
                                    type="radio"
                                    name="category" 
                                    id="sport" 
                                    value="sport"
                                    onClick={e => setCategory(e.target.value)}
                                />
                                <label htmlFor="sport">Sport</label>
                            </span>

                            <span>
                                <Input 
                                    type="radio" 
                                    name="category" 
                                    id="suv" 
                                    value="suv"
                                    onClick={e => setCategory(e.target.value)}
                                />
                                <label htmlFor="suv">Suv</label>

                            </span>
                        </SectionSelect>
                    </div>

                    <section>
                        <TextArea
                            label="Descrição"
                            onChange={e => setDescription(e.target.value) }
                        />

                        <SectionTags>
                            <h3>Add Tags</h3>
                            
                                <InputTags
                                    placeholder="Novo tag" 
                                    value={newTag}
                                    onChange={e => setNewTag(e.target.value)} 
                                    onClick={handleNewTags}
                                    icon={<FaPlus />}
                                />
                                

                                <section>
                                {
                                    tags.map((tag, index) => (
                                        <Tags 
                                            key={index} 
                                            title={tag} 
                                            istag={true} 
                                            icon={<FaX />} 
                                            onClick={() => handleDeleteTags(tag)}
                                        />
                                    )) 
                                }            
                                </section>  
        
                        </SectionTags>

                        <Input
                            label="Email"
                            type="email"
                            value={email}
                            placeholder="Email para contato"
                            onChange={e => setEmail(e.target.value)}
                        />

                        <Phone>
                            <Input
                                label="DDD"
                                type="tel"
                                maxLength="2"
                                placeholder="00"
                                onChange={e => setDdd(e.target.value)}
                            />
                            <Input
                                label="Telefone"
                                type="tel"
                                maxLength="9"
                                placeholder="000000000"
                                onChange={e => setPhone(e.target.value)}
                            />
                        </Phone>

                        <Button
                            isActive
                            title="Enviar"
                            type="button"
                            onClick={handleForm}
                        />
                    </section>
                </Forms>

            </main>
        </Conteiner>
    )
}