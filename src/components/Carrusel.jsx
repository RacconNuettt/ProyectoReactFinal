import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../assets/casado.jpeg"
import img2 from "../assets/Chifrijo.jpeg"
import img3 from "../assets/pinto.jpeg"
import '../styles/carrusel.css'


function Carrusel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <div>
                <br />
                <br />
            </div>
            <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                className="custom_carousel"
            >
                <Carousel.Item>
                    <img className="d-block w-100" src={img1} alt="Mitad" />
                    <Carousel.Caption>
                        <h3>Casados</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Queque de Fresa"
                    />
                    <Carousel.Caption>
                        <h3>Chifrijo</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Queque de Navidad"
                    />
                    <Carousel.Caption>
                        <h3>Gallo Pinto</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default Carrusel;