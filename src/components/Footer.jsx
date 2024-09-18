import { Container, Row, Col } from 'react-bootstrap';
import { FaWhatsapp, FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <Container>
        <Row className="mb-4">
          <Col md={4} className="text-center text-md-left mb-3 mb-md-0">
            <h5>Información</h5>
            <p>Si quieres saber mas de nosotros, o de nuestros porfavor comunicate por medio de nuestras redes sociales</p>
          </Col>
          <Col md={4} className="text-center text-md-left mb-3 mb-md-0">
            <h5>Enlaces</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Sobre Nosotros</a></li>
              <li><a href="#" className="text-white">Contacto</a></li>
              <li><a href="#" className="text-white">Menu</a></li>
            </ul>
          </Col>
          <Col md={4} className="text-center">
            <h5>Redes Sociales</h5>
            <Row className="justify-content-center">
              <Col xs="auto" className="footer-icon-col mb-3">
                <a href="https://wa.me/+50683399812" target="_blank" rel="noopener noreferrer" className="footer-icon" id="whatsapp">
                  <FaWhatsapp className="footer-icon-img" />
                  <span className="footer-icon-text">WhatsApp</span>
                </a>
              </Col>
              <Col xs="auto" className="footer-icon-col mb-3">
                <a href="https://instagram.com/daniel_gonzalez_fuentes" target="_blank" rel="noopener noreferrer" className="footer-icon" id="instagram">
                  <FaInstagram className="footer-icon-img" />
                  <span className="footer-icon-text">Instagram</span>
                </a>
              </Col>
              <Col xs="auto" className="footer-icon-col mb-3">
                <a href="tel:71816948" className="footer-icon" id="phone">
                  <FaPhoneAlt className="footer-icon-img" />
                  <span className="footer-icon-text">Teléfono</span>
                </a>
              </Col>
              <Col xs="auto" className="footer-icon-col mb-3">
                <a href="https://www.google.com/maps/@9.9948717,-84.6590483,16.76z?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="footer-icon" id="address">
                  <FaMapMarkerAlt className="footer-icon-img" />
                  <span className="footer-icon-text">Dirección</span>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Soda El Alamo. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>


  );
};

export default Footer;
