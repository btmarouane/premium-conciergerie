import './App.css';
import image1 from './assets/image1.png'
import image2 from './assets/image2.png'
import image3 from './assets/image3.jpg'
import image4 from './assets/image4.jpg'
import logo from './assets/LOGO_VF4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faPhone,faPen } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <header class="navbar">
        <div class="logo">
            <img src={logo} alt="Premium BNB Logo"/>
        </div>
        <nav class="nav-links">
            <a href="#">
                <FontAwesomeIcon icon={faUser} />
                Mon compte</a>
            <a href="#">
              <FontAwesomeIcon icon={faPhone} />
                Nous contacter</a>
            <a href="#">
              <FontAwesomeIcon icon={faPen} />
                Blog</a>
        </nav>
    </header>
    <div class="title-button-container">
        <p class="title-text">
            Votre conciergerie de location courte durée pour un service d'exception et une expérience inoubliable.
        </p>
        <a href="#" class="cta-button">
            Nous découvrir <span class="arrow">→</span>
        </a>
    </div>
    <div class="grid-container">
        <div class="grid-item" style={{ backgroundImage: `url(${image1})` }}>
          <div class="overlay">Estimez vos revenus locatifs</div>
        </div>
        <div class="grid-item" style={{ backgroundImage: `url(${image2})` }}>
          <div class="overlay">Pourquoi nous choisir ?</div>
        </div>
        <div class="grid-item" style={{ backgroundImage: `url(${image3})` }}>
          <div class="overlay">Découvrez notre offre</div>
        </div>
        <div class="grid-item" style={{ backgroundImage: `url(${image4})` }}>
          <div class="overlay">Réserver directement votre séjour</div>
        </div>
    </div>
    </div>
  );
}

export default App;
