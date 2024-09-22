import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/CardHome.css';

import casado from '../assets/casado.jpeg';
import pinto from '../assets/pinto.jpeg';
import gordonblue from '../assets/gordonblue.jpg'
import empanadas from '../assets/Empanadas.jpg'
import olladecarne from '../assets/olladecarne.jpg'
import tortillas from '../assets/tortillas.jpg'
import sopazteca from '../assets/tortillas.jpg'
import sopademariscos from '../assets/sopademariscos.jpg'
import tamales from '../assets/tamal.png'
import chicharrones from '../assets/chicharrones.jpg'




import { BiCategory } from "react-icons/bi";

const CardHome = () => {
    const dishes = [
        {
            title: "Casado",
            description: "Arroz, Frijoles, Bistec de cerdo, Platano frito, Ensalada",
            category: "Categoria: Almuerzo",
            imgSrc: casado
        },
        {
            title: "Pinto",
            description: "Delicioso Pinto, con platano frito, queso frito, huevo y natilla",
            category: "Categoria: Desayuno",
            imgSrc: pinto
        },
        {
            title: "Gordon Blue de Pollo",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            imgSrc: gordonblue
        },
        {
            title: "Tortillas Palmeada",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
            imgSrc: tortillas
        },
        {
            title: "Sopa de Mariscos",
            description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
            imgSrc: sopademariscos
        },
        {
            title: "Empanadas",
            description: "Curabitur pretium tincidunt lacus.",
            imgSrc: empanadas
        },
        {
            title: "Olla de Carne",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
            imgSrc: olladecarne
        },
        {
            title: "Tamales",
            description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
            imgSrc: tamales
        },
        {
            title: "Chicharrones",
            description: "Curabitur pretium tincidunt lacus.",
            imgSrc: chicharrones
        }
    ];

    return (
        <div>
            <div>
                <br />
                <br />
            </div>
            <h1 id="title-p" className="text-center mb-4 title-text">Conoce nuestro menú</h1>
            <Row className="justify-content-center">
                {dishes.map((dish, index) => (
                    <Col xs={12} md={6} lg={4} key={index} className="mb-4">
                        <Card className="shadow hover-card">
                            <Card.Body className="d-flex justify-content-between align-items-center">
                                <div>
                                    <Card.Title className="title-text">{dish.title}</Card.Title>
                                    <Card.Text className="description-text">{dish.description}</Card.Text>
                                    <Card.Text className="description-text">{dish.category}</Card.Text>
                                </div>
                                <Card.Img variant="top" src={dish.imgSrc} style={{ width: '100px', height: '100px' }} />
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default CardHome;
