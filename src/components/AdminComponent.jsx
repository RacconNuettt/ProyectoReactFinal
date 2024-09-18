import React, { useState } from 'react';
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap';
import { FaHome, FaFileAlt, FaBell, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/AdminPage.css';
import { encode } from 'base64-arraybuffer';

const AdminPage = () => {
    const [Menu, setMenu] = useState('Bienvenida Reina Isabel, desde esta pagina podras observar ordenes y agregar nuevos platos');
    const [foodItems, setFoodItems] = useState([]);
    const [orderItems, setOrderItems] = useState([]);

    const OpcionMenu = (option) => {
        setMenu(option);
    };

    const Contenido = () => {
        switch (Menu) {
            case 'Inicio':
                window.location.href = '/Home'; 
                return null;
            case 'Documentos':
                return (
                    <div>
                        <h2>Agregar Comida</h2>
                        <Form onSubmit={handleFoodSubmit}>
                            <Form.Group controlId="formFoodName">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Nombre del plato" required />
                            </Form.Group>
                            <Form.Group controlId="formFoodCategory">
                                <Form.Label>Categoría</Form.Label>
                                <Form.Control type="text" placeholder="Categoría del plato" required />
                            </Form.Group>
                            <Form.Group controlId="formFoodPrice">
                                <Form.Label>Precio</Form.Label>
                                <Form.Control type="number" step="0.01" placeholder="Precio" required />
                            </Form.Group>
                            <Form.Group controlId="formFoodDescription">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Descripción" required />
                            </Form.Group>
                            <Form.Group controlId="formFoodImage">
                                <Form.Label>Imagen</Form.Label>
                                <Form.Control type="file" onChange={handleImageUpload} required />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Agregar
                            </Button>
                        </Form>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Categoría</th>
                                    <th>Precio</th>
                                    <th>Descripción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {foodItems.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.category}</td>
                                        <td>{item.price}</td>
                                        <td>{item.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                );
            case 'Órdenes':
                return (
                    <div>
                        <h2>Ordenes</h2>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Hora</th>
                                    <th>Comida</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderItems.map((order, index) => (
                                    <tr key={index}>
                                        <td>{order.name}</td>
                                        <td>{order.time}</td>
                                        <td>{order.food}</td>
                                        <td>{order.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                );
            case 'Salir':
                window.location.href = '/Login'; 
                return null;
            default:
                return <div><h2>{Menu}</h2></div>;
        }
    };

    const handleFoodSubmit = (e) => {
        e.preventDefault();
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = encode(reader.result);
            };
            reader.readAsArrayBuffer(file);
        }
    };

    return (
        <Container fluid>
            <Row>
                <Col xs={2} className="sidebar bg-success text-white">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Button variant="link" className="nav-link text-white d-flex align-items-center" onClick={() => OpcionMenu('Inicio')}>
                                <FaHome className="icon me-2" /> Inicio
                            </Button>
                        </li>
                        <li className="nav-item">
                            <Button variant="link" className="nav-link text-white d-flex align-items-center" onClick={() => OpcionMenu('Documentos')}>
                                <FaFileAlt className="icon me-2" /> Documentos
                            </Button>
                        </li>
                        <li className="nav-item">
                            <Button variant="link" className="nav-link text-white d-flex align-items-center" onClick={() => OpcionMenu('Órdenes')}>
                                <FaBell className="icon me-2" /> Órdenes
                            </Button>
                        </li>
                        <li className="nav-item">
                            <Button variant="link" className="nav-link text-white d-flex align-items-center" onClick={() => OpcionMenu('Salir')}>
                                <FaSignOutAlt className="icon me-2" /> Salir
                            </Button>
                        </li>
                    </ul>
                </Col>
                <Col xs={10} className="content bg-light p-4">
                    {Contenido()}
                </Col>
            </Row>
        </Container>
    );
};

export default AdminPage;
