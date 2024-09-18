import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const historiaImg = '';
const quienesImg = '';
const menuImg = '';

const InformationUs = () => {
    return (
        <Container className="my-5">
            <h1 className="text-center mb-4">Sobre Nosotros</h1>
            <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vivamus lacinia odio vitae vestibulum. Fusce ut placerat orci nulla. 
                Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl 
                tempus convallis quis ac lectus.
            </p>

            <Row className="mt-4">
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={historiaImg} />
                        <Card.Body>
                            <Card.Title>Nuestra Historia</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Vivamus lacinia odio vitae vestibulum.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={quienesImg} />
                        <Card.Body>
                            <Card.Title>Quiénes Somos</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Sed do eiusmod tempor incididunt ut labore et dolore 
                                magna aliqua.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={menuImg} />
                        <Card.Body>
                            <Card.Title>Nuestro Menú</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Duis aute irure dolor in reprehenderit in voluptate velit 
                                esse cillum dolore eu fugiat nulla pariatur.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default InformationUs;
