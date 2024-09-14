import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Home from "../pages/Home"

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />}></Route>
                <Route path='/Register' element={<Register />}></Route>
                <Route path='/Home' element={<Home />}></Route>
            </Routes>
        </Router>
    )
}


export default Routing;