import React, { useState } from 'react';
import 'react-bootstrap';
import '../styles/LoginForm.css';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("Por favor completa todos los campos");
            return;
        }

        try {
            const response = await fetch('http://localhost:3008/users');
            const users = await response.json();

            const user = users.find(user => user.email === email && user.password === password);

            if (user) {
                

                if (email === 'admin@gmail.com' && password === 'Admin1234') {
                    localStorage.setItem('isAuthenticated', true);
                    localStorage.setItem('isAdmin', true);
                    setTimeout(() => navigate('/Admin'), 1500);
                    toast.success("Bienvenida devuelta Reina Isabel!");
                } else {
                    localStorage.setItem('isAuthenticated', true);
                    localStorage.setItem('isAdmin', false);
                    setTimeout(() => navigate('/Home'), 1500);
                    toast.success("Inicio de sesion exitoso!");
                }

            } else {
                toast.error("Usuario o contraseña incorrectos");
            }
        } catch (error) {
            toast.error("Error al conectar con el servidor");
        }
    };

    return (
        <div className="login-template d-flex justify-content-center align-items-center vh-100 bg-custom-green">
            <div className="form-container p-5 rounded">
                <h3 className='Text'>Inicio de Sesión</h3>
                <div className='cline'>
                    <div className='line'></div>
                </div>
                <br />
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label className='label-text' htmlFor="email">Correo Electrónico</label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label className='label-text' htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            placeholder="Contraseña"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <br />
                    <div className="d-grid">
                        <button type="submit" className="btn btn-custom-white">Ingresar</button>
                    </div>
                </form>
                <p className="text-right">
                    No tienes cuenta? <Link to="/">Regístrate</Link>
                </p>
            </div>
            <ToastContainer />
        </div>
    );
}

export default LoginForm;
