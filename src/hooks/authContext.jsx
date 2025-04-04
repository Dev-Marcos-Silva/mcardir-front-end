import { createContext, useContext, useEffect, useState, } from "react"
import { api } from "../services/api"

export const AuthContext = createContext({})

export function AuthProvider({children}){
    const [ data, setData ] = useState({})

    async function signIn({email, password}){

        if(!email || !password){
            return alert("Preencha todos os campos!")
        }
        try{
            const response = await api.post("/session", { email, password })
            const { user, token } = response.data

            localStorage.setItem("@mcardir:user", JSON.stringify(user))
            localStorage.setItem("@mcardir:token", token)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({user, token})

            return true

        }catch(error){

            if(error.response){
                alert(error.response.data.messagen)
            }else{
                alert("Não foi possível entrar na contar!")
            }
        }
    }

    function signOut(){
        localStorage.removeItem("@mcardir:user")
        localStorage.removeItem("@mcardir:token")

        setData({ })
    }

    async function upData(userUpdata, imgUpdata) {

        try{
            if(imgUpdata){
                const formData = new FormData()
                formData.append("avatar", imgUpdata)

                const response = await api.patch("/users/user", formData)

                const { user } = response.data

                localStorage.setItem("@mcardir:user", JSON.stringify(user))

                setData({
                    user: user
                })

                alert("Foto de perfil atualizada!")
                return
            }

            const response = await api.put("/users/", userUpdata)

            const { user } = response.data

            localStorage.setItem("@mcardir:user", JSON.stringify(user))

            setData({
                user: user
            })

            alert("Informações atualizadas!")

        }catch(error){

            if(error.response){
                alert(error.response.data.messagen)
            }else{
                alert("Não foi possível atualizar!")
            }
        }
        
    }

    useEffect(() => {
        const user = localStorage.getItem("@mcardir:user")
        const token = localStorage.getItem("@mcardir:token")

        if(user && token){
            api.defaults.headers.common['Authorization'] = `Bearer ${token} `

            setData({
                user: JSON.parse(user), 
                token
            })
        }
    }, [])

    return(
        <AuthContext.Provider value={{ signIn, signOut, upData, user: data.user }} >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext);

    return context;
}