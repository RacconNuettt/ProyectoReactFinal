import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Home from "../pages/Home"
import Admin from "../pages/Admin"
import AboutUs from "../pages/AboutUs"
import Contacto from "../pages/Contacto"


const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Register />}></Route>
                <Route path='/Login' element={<Login />}></Route>
                <Route path='/Home' element={<Home />}></Route>
                <Route path='/Admin'element={<Admin />}></Route>
                <Route path='/AboutUs' element={<AboutUs />}></Route>
                <Route path='/Contacto' element={<Contacto />}></Route>
            </Routes>
        </Router>
    )
}


export default Routing;