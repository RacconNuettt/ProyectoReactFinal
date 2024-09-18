import '../styles/HomePage.css'; 
import logo from '../assets/logo.png'

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
      
    </div>
    
  );
}

export default HomePage;
