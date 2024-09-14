import 'react-bootstrap';
import '../styles/RegisterForm.css';
import {Link, Navigate} from "react-router-dom"

const LoginForm = () => {
    return (
        <div className="login-template d-flex justify-content-center align-items-center vh-100 bg-custom-green">
            <div className="form-container p-5 rounded">
                <h3 className='Text'>Registrate</h3>
                <div className='cline'>
                    <div className='line'></div>
                </div>
                <br />
                <div className="mb-2">
                    <label className='label-text' htmlFor="text">Nombre Completo</label>
                    <input type="nombre" placeholder="Nombre" className="form-control" id="nombre" />
                </div>
                <div className="mb-2">
                    <label className='label-text' htmlFor="email">Correo Electronico</label>
                    <input type="email" placeholder="Email" className="form-control" id="email" />
                </div>
                <div className="mb-2">
                    <label className='label-text' htmlFor="password">Contraseña</label>
                    <input type="password" placeholder="Contraseña" className="form-control" id="password" />
                </div>
                <br />
                <div className="d-grid">
                    <button className="btn btn-custom-white">Ingresar</button>
                </div>
                <p className="text-right">
                    Ya tienes una cuenta? <Link to="/">Inicia Sesion</Link>
                </p>
            </div>
        </div>
    );
}

export default LoginForm;
