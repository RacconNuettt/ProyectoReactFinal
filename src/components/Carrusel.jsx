import {Navbar,Nav,Button,Container,Form,NavDropdown,Carousel,Offcanvas,Card,} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Carrusel() {
    return (
        <div>
            {" "}
            <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                className="custom_carousel"
            >
                <Carousel.Item>
                    <ExampleCarouselImage text="First slide" />
                    <Carousel.Caption>
                        <h3>Olla inoxidable</h3>
                        <p>esta olla a un precio razonable</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ExampleCarouselImage Botas="Second slide" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ExampleCarouselImage text="Third slide" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Carrusel;