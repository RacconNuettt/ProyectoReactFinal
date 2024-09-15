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
                        <Nav.Link href="#action1" className="nav-link-custom">Inicio</Nav.Link>
                        <Nav.Link href="#action2" className="nav-link-custom">Quienes Somos</Nav.Link>
                        <Nav.Link href="#action2" className="nav-link-custom">Contactenos</Nav.Link>
                        <NavDropdown title="Menu" id="navbarScrollingDropdown" className="nav-dropdown-custom">
                            <NavDropdown.Item href="#action3">Desayunos</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Almuerzos</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Cenas</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Mariscos</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Comidas</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Personalizar Orden</NavDropdown.Item>
                        </NavDropdown>
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
