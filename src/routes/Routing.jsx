import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Home from "../pages/Home"
import Admin from "../pages/Admin"

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Register />}></Route>
                <Route path='/Login' element={<Login />}></Route>
                <Route path='/Home' element={<Home />}></Route>
                <Route path='/Admin'element={<Admin />}></Route>
            </Routes>
        </Router>
    )
}


export default Routing;