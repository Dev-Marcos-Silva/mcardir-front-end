import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/home/Home.jsx"
import { New } from '../pages/new/New.jsx';
import { Cars } from '../pages/cars/Cars.jsx';
import { Details } from '../pages/details/Details.jsx';
import { Profile } from "../pages/profile/Profile.jsx";

export function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New /> } />
            <Route path="/cars/:category" element={<Cars />} />
            <Route path="/details/:category/:id" element={<Details />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    )
}