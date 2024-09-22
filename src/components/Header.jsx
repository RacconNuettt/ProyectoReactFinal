import { Nav, Navbar, Container, NavDropdown, Form, Button } from "react-bootstrap";
import '../styles/Header.css';

const Header = () => {
    return (
        <Navbar expand="lg" className="navbar-custom">
            <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll" className="navbar-toggler-custom" />
                <Navbar.Collapse id="navbarScroll" className="navbar-collapse-custom">
                    <Nav
                        className="nav-links-custom me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/home" className="nav-link-custom">Inicio</Nav.Link>
                        <Nav.Link href="/AboutUs" className="nav-link-custom">Quienes Somos</Nav.Link>
                        <Nav.Link href="/Contacto" className="nav-link-custom">Contactenos</Nav.Link>
                        <Nav.Link href="/Menu" className="nav-link-custom">Menu</Nav.Link>
                        
                    </Nav>
                    <Form className="form-custom d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="form-control-custom me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success" className="button-custom">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
