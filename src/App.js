import './App.css';
import user_icon from './assets/user-icon.png'
import phone_icon from './assets/phone-icon.png'
import pen_icon from './assets/pen-icon.png'
import image1 from './assets/image1.jpg'
import image2 from './assets/image2.jpg'
import image3 from './assets/image3.jpg'
import image4 from './assets/image4.jpg'
import logo from './assets/Logos VF2.png'
import bars_icon from './assets/bars-icon.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faUser, faPhone,faPen } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <header class="navbar">
        <div class="navbar-principal">
        <a href="#" >
          <img class="logo-menu" src={bars_icon}/>
        </a>
          <div class="logo">
              <img src={logo} alt="Premium BNB Logo"/>
          </div>
        </div>
        <nav class="nav-links">
            <a href="#">
                <img class="nl-icon" src={user_icon}/>
                <span>Mon compte</span>
            </a>
            <a href="#">
              <img class="nl-icon" src={phone_icon}/>
                Nous contacter</a>
            <a href="#">
            <img class="nl-icon" src={pen_icon}/>
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
          <div class="feat1-overlay">Estimez vos revenus locatifs</div>
        </div>
        <div class="grid-item" style={{ backgroundImage: `url(${image2})` }}>
          <div class="feat2-overlay">Pourquoi nous choisir ?</div>
        </div>
        <div class="grid-item" style={{ backgroundImage: `url(${image3})` }}>
          <div class="feat3-overlay">Découvrez notre offre</div>
        </div>
        <div class="grid-item" style={{ backgroundImage: `url(${image4})` }}>
          <div class="feat4-overlay">Réserver directement votre séjour</div>
        </div>
    </div>
    </div>
  );
}

export default App;
