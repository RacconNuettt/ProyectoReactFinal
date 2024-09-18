import '../styles/HomePage.css'; 
import logo from '../assets/logo.png';
import tamal from '../assets/tamal.png'; 

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="welcome-message">
        <h1>BIENVENIDO/A</h1>
      </div>
      <div className="circle-logo-container">
        <div className="half-circle">
          <img src={logo} alt="El Alamo Logo" className="logo" />
        </div>
      </div>
      <img src={tamal} alt="Hojas de Plátano" className="hojas-platanos" />
    </div>
  );
}

export default HomePage;
