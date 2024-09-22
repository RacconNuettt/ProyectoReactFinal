import React, { useState } from 'react';
import 'react-bootstrap';
import '../styles/RegisterForm.css';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const validateForm = async () => {
        const { nombre, email, password } = formData;

        if (!nombre || !email || !password) {
            toast.error("Todos los campos son obligatorios");
            return false;
        }

        if (password.length < 8) {
            toast.error("La contraseña debe tener al menos 8 caracteres");
            return false;
        }

        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);

        if (!hasUpperCase || !hasLowerCase || !hasNumber) {
            toast.error("La contraseña debe contener al menos una mayúscula, una minúscula y un número");
            return false;
        }

        const users = await fetch('http://localhost:3008/users')
            .then(response => response.json());

        const emailExists = users.some(user => user.email === email);
        const nombreExists = users.some(user => user.nombre === nombre);

        if (emailExists) {
            toast.error("Este correo ya está registrado");
            return false;
        }

        if (nombreExists) {
            toast.error("Este nombre de usuario ya está en uso");
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (await validateForm()) {
            fetch('http://localhost:3008/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
                .then(response => response.json())
                .then(() => {
                    toast.success("Usuario registrado exitosamente");
                    setFormData({
                        nombre: '',
                        email: '',
                        password: ''
                    });
                })
                .catch(() => {
                    toast.error("Hubo un error al registrar el usuario");
                });
        }
    };

    return (
        <div className="login-template d-flex justify-content-center align-items-center vh-100 bg-custom-green">
            <div className="form-container p-5 rounded">
                <h3 className='Text'>Regístrate</h3>
                <div className='cline'>
                    <div className='line'></div>
                </div>
                <br />
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label className='label-text' htmlFor="nombre">Nombre Completo</label>
                        <input
                            type="text"
                            placeholder="Nombre"
                            className="form-control"
                            id="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-2">
                        <label className='label-text' htmlFor="email">Correo Electrónico</label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="form-control"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-2">
                        <label className='label-text' htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            placeholder="Contraseña"
                            className="form-control"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <br />
                    <div className="d-grid">
                        <button type="submit" className="btn btn-custom-white">Registrar</button>
                    </div>
                </form>
                <p className="text-right">
                    Ya tienes una cuenta? <Link to="/Login">Inicia Sesión</Link>
                </p>
            </div>
            <ToastContainer />
        </div>
    );
}

export default RegisterForm;
