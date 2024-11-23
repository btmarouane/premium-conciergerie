import './App.css';
import user_icon from './assets/user-icon.png'
import phone_icon from './assets/phone-icon.png'
import pen_icon from './assets/pen-icon.png'
import image1 from './assets/image1.jpg'
import image2 from './assets/image2.jpg'
import image3 from './assets/image3.jpg'
import image4 from './assets/image4.jpg'
import image5 from './assets/image5.jpg'
import image6 from './assets/image6.jpg'
import image7 from './assets/image7.jpg'
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
      <section class="about-section">
        <div class="container">
          <div class="left-content">
            <h1>À propos de <span class="highlight">Premium Conciergerie</span></h1>
            <p>Chez Premium Conciergerie, nous redéfinissons la gestion de la location courte durée en combinant innovation, professionnalisme et une attention exceptionnelle aux détails. Notre conciergerie s'adresse aux propriétaires exigeants qui souhaitent maximiser leurs revenus locatifs tout en déléguant en toute sérénité la gestion de leurs biens.</p>
            <p>Grâce à une expertise pointue et des outils technologiques avancés, nous offrons une gestion complète et fluide.</p>
          </div>
          <div class="right-content">
            <img src={image5} alt="Conciergerie Bell and Stars" />
            <div class="text-below">
                <p>Chaque bien que nous gérons bénéficie d'une attention personnalisée et de standards de qualité élevés, assurant à la fois la tranquillité des propriétaires et une expérience mémorable pour les locataires.</p>
                <p>Que ce soit pour un séjour d'affaires ou de loisirs, nous offrons un accueil soigné, des logements d'exception et une disponibilité continue. Nous faisons de chaque séjour une expérience unique, alliant confort, luxe et réactivité.</p>
            </div>
          </div>
        </div>
      </section>
      <section class="offer-section">
        <header>
            <h1>Notre offre</h1>
            <p>De l’aménagement du bien la sortie du locataire, nous vous offrons un service premium, alliant expertise et tranquillité d’esprit.</p>
        </header>
        <div class="services">
            <div class="service">
              <a href="#" class="offer-button-1">
              Préparation et optimisation du bien <span class="arrow">→</span>
              </a>
              <img src={image6} alt="Sketch of interior design" />
            </div>
            <div class="service">
              <a href="#" class="offer-button-2">
              Gestion de la location <span class="arrow">→</span>
              </a>
              <img src={image7} alt="Door handle and key" />
            </div>
            <div class="service">
              <a href="#" class="offer-button-3">
              Services + <span class="arrow">→</span>
              </a>
                <img src={image5} alt="Service bell near a window" />
            </div>
        </div>
      </section>
    </div>
  );
}

export default App;
