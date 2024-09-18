import Header from "../components/Header"
import HomePage from "../components/HomePage"
import Carrusel from "../components/Carrusel"
import InformationUs from "../components/AboutUsCarpet/InformationUs"
import Footer from "../components/Footer"


function Home() {
    return (
        <div>
            <Header />
            <HomePage />
            <Carrusel />
            <InformationUs />
            <Footer />
        </div>
    )
}

export default Home