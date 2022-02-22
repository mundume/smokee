import React from "react";
import Home from "./pages/Home";

import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import {Route,Switch , Routes, BrowserRouter} from "react-router-dom";
import { locale } from "moment";

export const App = ()=>{
    return(
        <>
        <Routes>
        <Route  path="/home" element={<Home/>} />
        <Route  path="/" element={<Login/>} />
        <Route  path="/signup" element={<SignUp/>} />
        
        
        </Routes>
        
        </>
    )
}
export default App
   
    
    


