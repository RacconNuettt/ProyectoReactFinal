import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagen1 from '../../assets/historia.jpg'
import imagen2 from '../../assets/soda.jpg'
import imagen3 from '../../assets/soda2.jpg'


const InformationUs = () => {
    return (
        <Container className="my-5">
            <h1 className="text-center mb-4">Sobre Nosotros</h1>
            <p className="text-center">
                Bienvenidos a el Alamo, una sodita con corazón costarricense. Desde nuestras raíces, hemos trabajado con pasión para ofrecerles lo mejor de la cocina tradicional costarricense. En El Alamo, cada plato es preparado con ingredientes frescos, locales y una buena dosis de cariño.
            </p>

            <Row className="mt-4">
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={imagen1} />
                        <Card.Body>
                            <Card.Title>Nuestra Historia</Card.Title>
                            <Card.Text>
                            Somos una sodita que inicio como una oportunidad maravillosa que se presento, gracias a nuestros clientes hemos logrado crear una reputacion la cual respalda nuestra calidad. Cocina con amor y con gracia a tu trabajo ese es nuestro lema.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={imagen2} />
                        <Card.Body>
                            <Card.Title>Quiénes Somos</Card.Title>
                            <Card.Text>
                            Cada miembro de nuestro equipo comparte una profunda conexión con la cocina, y juntos trabajamos para preservar y reinventar las recetas tradicionales que han sido transmitidas de generación en generación. <br /> Creemos en la importancia de utilizar ingredientes frescos y locales, apoyando a nuestros agricultores y productores de la zona.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={imagen3} />
                        <Card.Body>
                            <Card.Title>Nuestro Objetivo</Card.Title>
                            <Card.Text>
                                El principal objetivo es crear un espacio acogedor donde puedas disfrutar de sabores auténticos, como los que siempre has amado. Desde un casado bien cargado hasta el típico gallo pinto, nuestras recetas se inspiran en la sazón de nuestras abuelas y en los productos frescos de la región.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default InformationUs;
