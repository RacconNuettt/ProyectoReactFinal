import React from 'react';
import { Carousel, Button, Card } from 'react-bootstrap';
import '../styles/MenuComponent.css';
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

const MenuComponent = () => {
    const menuData = {
        desayuno: [
            { nombre: "Pinto", descripcion: "Arroz y frijoles sazonado con cebolla, chile dulce y un toque de culantro con nuestra salsa lisano casera"  ,precio: "₡2000", imagen: pinto },
            { nombre: "Platillo 2", descripcion: "Descripción breve", precio: "₡2500", imagen: empanadas },
            { nombre: "Platillo 3", descripcion: "Descripción breve", precio: "₡3000", imagen: tortillas },
            { nombre: "Platillo 4", descripcion: "Descripción breve", precio: "₡3500", imagen: tamales },
        ],

        almuerzo: [
            { nombre: "Platillo 1", descripcion: "Descripción breve", precio: "₡2000", imagen: casado },
            { nombre: "Platillo 2", descripcion: "Descripción breve", precio: "₡2500", imagen: olladecarne },
            { nombre: "Platillo 3", descripcion: "Descripción breve", precio: "₡3000", imagen: chicharrones },
            { nombre: "Platillo 4", descripcion: "Descripción breve", precio: "₡3500", imagen: sopazteca },
        ],
        
        cenas: [
            { nombre: "Platillo 1", descripcion: "Descripción breve", precio: "₡2000", imagen: sopademariscos },
            { nombre: "Platillo 2", descripcion: "Descripción breve", precio: "₡2500", imagen: gordonblue },
            { nombre: "Platillo 3", descripcion: "Descripción breve", precio: "₡3000", imagen: casado },
            { nombre: "Platillo 4", descripcion: "Descripción breve", precio: "₡3500", imagen: pinto },
        ],
    
    };

    const renderMenuItems = (items) => {
        return items.map((item, index) => (
            <Card className="menu-item" key={index} style={{ width: '12rem', margin: '0 auto' }}>
                <Card.Img variant="top" src={item.imagen} alt={item.nombre} style={{ height: '150px', objectFit: 'cover' }} />
                <Card.Body>
                    <Card.Title>{item.nombre}</Card.Title>
                    <Card.Text>{item.descripcion}</Card.Text>
                    <Card.Text>{item.acompanamiento}</Card.Text>
                    <Card.Text><strong>{item.precio}</strong></Card.Text>
                    <Button variant="success">Ordenar</Button>
                </Card.Body>
            </Card>
        ));
    };

    return (
        <div className="menu-container letters-container">
            <h1 className="text-success">MENU</h1>

            <br />
            <br />

            <div className="menu-section">
                <h2 className="text-success">Desayunos</h2>
                <br />
                <Carousel 
                    controls={true} 
                    indicators={false} 
                    interval={null}
                    prevIcon={<span className="custom-prev-icon">&#8249;</span>}
                    nextIcon={<span className="custom-next-icon">&#8250;</span>}
                >
                    <Carousel.Item>
                        <div className="d-flex justify-content-around">
                            {renderMenuItems(menuData.desayuno.slice(0, 4))}
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="d-flex justify-content-around">
                            {renderMenuItems(menuData.desayuno.slice(4, 8))}
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>

            <br />
            <br />

            <div className="menu-section">
                <h2 className="text-success">Almuerzos</h2>
                <br />
                <Carousel 
                    controls={true} 
                    indicators={false} 
                    interval={null}
                    prevIcon={<span className="custom-prev-icon">&#8249;</span>}
                    nextIcon={<span className="custom-next-icon">&#8250;</span>}
                >
                    <Carousel.Item>
                        <div className="d-flex justify-content-around">
                            {renderMenuItems(menuData.almuerzo.slice(0, 4))}
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="d-flex justify-content-around">
                            {renderMenuItems(menuData.almuerzo.slice(4, 8))}
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>

            <br />
            <br />

            <div className="menu-section">
                <h2 className="text-success">Cenas</h2>
                <br />
                <Carousel 
                    controls={true} 
                    indicators={false} 
                    interval={null}
                    prevIcon={<span className="custom-prev-icon">&#8249;</span>}
                    nextIcon={<span className="custom-next-icon">&#8250;</span>}
                >
                    <Carousel.Item>
                        <div className="d-flex justify-content-around">
                            {renderMenuItems(menuData.cenas.slice(0, 4))}
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="d-flex justify-content-around">
                            {renderMenuItems(menuData.cenas.slice(4, 8))}
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>

            <br />
            <br />
            <br />
            
        </div>
    );
};

export default MenuComponent;
