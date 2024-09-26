import React, { useEffect, useState } from 'react';
import { Carousel, Button, Card } from 'react-bootstrap';
import '../styles/MenuComponent.css';
import { getMenu } from '../services/GetMenu'; 
import { Link } from 'react-router-dom';

const MenuComponent = () => {
    const [menuData, setMenuData] = useState({
        desayuno: [],
        almuerzo: [],
        cena: [],
    });

    useEffect(() => {
        loadMenu();
    }, []);

    const loadMenu = async () => {
        const items = await getMenu(); 
        const categorizedMenu = {
            desayuno: [],
            almuerzo: [],
            cena: [],
        };

        items.forEach(item => {
            if (item.category === 'Desayunos') {
                categorizedMenu.desayuno.push(item);
            } else if (item.category === 'Almuerzos') {
                categorizedMenu.almuerzo.push(item);
            } else if (item.category === 'Cenas') {
                categorizedMenu.cena.push(item);
            }
        });

        setMenuData(categorizedMenu);
    };

    const renderMenuItems = (items) => {
        return items.map((item, index) => (
            <Card className="menu-item" key={index} style={{ width: '12rem', margin: '0 auto' }}>
                <Card.Img variant="top" src={item.image} alt={item.name} style={{ height: '150px', objectFit: 'cover' }} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Card.Text><strong>{item.price}</strong></Card.Text>
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
                            {renderMenuItems(menuData.desayuno)}
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
                            {renderMenuItems(menuData.almuerzo)}
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
                            {renderMenuItems(menuData.cena)}
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <br />
            <br />
            <br />  

            <div className='menu-section'>
                <h2><Link to={'/Order'} style={{textDecoration:"none"}}>También puedes personalizar tu pedido</Link></h2>
            </div>

            <br />
            <br />
            <br />
            
        </div>
    );
};

export default MenuComponent;
