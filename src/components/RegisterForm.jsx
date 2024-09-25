import React, { useState } from 'react';
import 'react-bootstrap';
import '../styles/RegisterForm.css';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postRegister } from '../services/PostUser'; 

const RegisterForm = () => {

    //I initialize the values using useState for the form, setting them to empty strings
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate(); 

    //Through this function, I handle the changes of the form values
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    // With this arrow function, I perform various types of validations to create users
    const validateForm = async () => {z
        const { nombre, email, password } = formData;

        // This validation prevents the user from submitting an empty registration form
        if (!nombre || !email || !password) {
            toast.error("Todos los campos son obligatorios");
            return false;
        }
        
        /* REQUIRE THE USER TO CREATE a STRONG PASSWORD  */

        // This validation informs the user that the password must be more than 8 characters long
        if (password.length < 8) {
            toast.error("La contraseña debe tener al menos 8 caracteres");
            return false;
        }

        const hasUpperCase = /[A-Z]/.test(password); // This will return true or false to check if there is an uppercase letter in the password
        const hasLowerCase = /[a-z]/.test(password); // Basically the same as the previous one, but checks for lowercase letters
        const hasNumber = /\d/.test(password); // This is used to check if there are numbers present        

        //Here we validate that it contains everything we require for a strong password.
        if (!hasUpperCase || !hasLowerCase || !hasNumber) {
            toast.error("La contraseña debe contener al menos una mayúscula, una minúscula y un número");
            return false;
        }

        //In this part, we request the server for the information of stored users, to prevent registering existing users.
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

    // With this arrow function, when all the data has been correctly entered, it will save the user in db.json and redirect
    // to the login page.
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (await validateForm()) {
            try {
                await postRegister(formData.nombre, formData.email, formData.password); 
                toast.success("Usuario registrado exitosamente");
                setFormData({
                    nombre: '',
                    email: '',
                    password: ''
                });
                setTimeout(() => {
                    navigate('/login');
                }, 2000); 
            } catch (error) {
                toast.error("Hubo un error al registrar el usuario");
            }
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
