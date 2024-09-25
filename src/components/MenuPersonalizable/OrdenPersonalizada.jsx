import { useState } from "react";
import { Button, ButtonGroup, Form, ListGroup, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Orden.css';

const OrdenPersonalizada = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('bebidas');

    const items = {
        bebidas: ['Cerveza', 'Vino', 'Refresco'],
        comida: ['Pizza', 'Hamburguesa', 'Pasta'],
        ensaladas: ['Cesar', 'Fruta', 'Mediterránea'],
    };

    const handleCheckboxChange = (item) => {
        setSelectedItems((prevItems) =>
            prevItems.includes(item)
                ? prevItems.filter((i) => i !== item)
                : [...prevItems, item]
        );
    };

    return (
        <>
        <br />
            <Container className="menu-container mt-4">
                <ButtonGroup className="mb-3">
                    <Button variant="success" onClick={() => setCurrentCategory('bebidas')}>Bebidas</Button>
                    <Button variant="success" onClick={() => setCurrentCategory('comida')}>Comida</Button>
                    <Button variant="success" onClick={() => setCurrentCategory('ensaladas')}>Ensaladas</Button>
                </ButtonGroup>

                <div className="items-container mb-3">
                    {items[currentCategory].map((item) => (
                        <Form.Check
                            key={item}
                            type="checkbox"
                            id={item}
                            label={item}
                            onChange={() => handleCheckboxChange(item)}
                        />
                    ))}
                </div>

                <div className="orden-personalizada">
                    <h3>Orden Personalizada</h3>
                    <ListGroup>
                        {selectedItems.map((item, index) => (
                            <ListGroup.Item key={index}>{item}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </div>
            </Container>
            <br />
            <br />
            
        </>
    );
};

export default OrdenPersonalizada;
