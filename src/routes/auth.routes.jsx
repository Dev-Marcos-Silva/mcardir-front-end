import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/home/Home.jsx"
import { Cars } from "../pages/cars/Cars.jsx";
import { Signup } from "../pages/signup/Signup.jsx"
import { Signin } from "../pages/signin/Signin.jsx"

export function AuthRouter(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/cars/:category" element={<Cars />} />
        </Routes>
    )
}