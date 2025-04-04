import { Conteiner, SectionProfile, Imagem, SectionUpdade, SectionPostes } from "./style";
import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { PostCard } from "../../components/postCard/postCard";

import { FaArrowLeft } from "react-icons/fa";
import { IoMdCamera } from "react-icons/io";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import imgPerfil from "../../assets/img/perfil.jpeg";

import { useAuth } from "../../hooks/authContext"
import { api } from "../../services/api";

export function Profile(){

    const { user, upData } = useAuth()

    const avatar = user.avatar ? `${api.defaults.baseURL}/files/profile/${user.avatar}` : imgPerfil

    const [ imagem, setImagem ] = useState(avatar)
    const [ imgUpdata, setImgUpdata] = useState()

    const [ posts, setPosts ] = useState([])

    const [ name, setName ] = useState(user.name)
    const [ email, setEmail ] = useState(user.email)
    const [ passoword, setPassword ] = useState()
    const [ newPassword, setNewPassword ] = useState()


    function handleImg(event){
        const fileImg = event.target.files[0]
        setImgUpdata(fileImg)

        const imagemPreviw = URL.createObjectURL(fileImg)
        setImagem(imagemPreviw)
    }

    async function handleUpdata() {

        const updata = {
            name,
            email,
            password: newPassword,
            old_password: passoword
        }

        const userUpdata = Object.assign(user, updata) 

        upData(userUpdata, imgUpdata)

    }

    async function deletaPost(id){
        const confirmDel = confirm("Tem certeza que deseja excluir?")

        if(confirmDel){
            try{
                await api.delete(`/post/${id}`)

                alert("Anúncio deletado!")

                window.location.reload()

            }catch(error){

                if(error.response){
                    alert(error.response.data.messagen)
                }else{
                    alert("Não foi possível carregar seus anúncios!")
                }
            }
        }
    }

    useEffect(() => {

        async function handlePost() {

            try{
                const response = await api.get("/post/index", user.id)

                response.data && response.data.map(post =>{
                    if(post.create_at){
                        const [ date ] = post.create_at.split(" ")

                        const formatDate = date.replace(/-/g,"/").split("/").reverse().join("/")
    
                        post.create_at = formatDate
                    }
                } )

                setPosts( response.data )

            }catch(error){

                if(error.response){
                    alert(error.response.data.messagen)
                }else{
                    alert("Não foi possível carregar seus anúncios!")
                }
    
            } 
            
        }
        handlePost()

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
                    <SectionProfile>
                        <Imagem>
                            <img src={imagem} alt="avatar user" />
                            <span>
                                <div>
                                    <IoMdCamera />
                                    <input type="file" onChange={handleImg} />
                                </div>
                            </span>
                        </Imagem>
                        <SectionUpdade>
                            <form>
                                <Input 
                                    label="Nome" 
                                    type="text"
                                    value={name}
                                    onChange={e => setName(e.target.value)} 
                                />
                                <Input 
                                    label="E-mail" 
                                    type="email"
                                    value={email} 
                                    onChange={e => setEmail(e.target.value)} 

                                />
                                 <Input 
                                    label="Senha nova" 
                                    type="password" 
                                    onChange={e => setNewPassword(e.target.value)}

                                />
                                <Input 
                                    label="Senha atual" 
                                    type="password" 
                                    onChange={e => setPassword(e.target.value)}
                                />
                               
                                <Button 
                                    title="Enviar" 
                                    type="button" 
                                    isActive
                                    onClick={handleUpdata}
                                />
                            </form>
                        </SectionUpdade>
                    </SectionProfile>

                    <SectionPostes>
                        {
                            posts && posts.map(post => {
                                return(
                                    <PostCard
                                        key={post.id}
                                        imagem={`${api.defaults.baseURL}/files/post/${post.imagem}`}
                                        title={post.title}
                                        date={post.create_at}
                                        evento={() => deletaPost(post.id)}
                                    />
                                )
                            })
                        }

                    </SectionPostes>
            </main>
        </Conteiner>
    )
}