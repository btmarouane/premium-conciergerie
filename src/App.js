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
import image9 from './assets/image9.png'
import image10 from './assets/image10bis.png'
import image12 from './assets/image12bis.png'
import image14 from './assets/image14bis.png'
import image16 from './assets/image16.jpeg'
import image11 from './assets/image11.png'
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
      <section class="offer2-section">
        <div class="offer2-container">
        <header class="offer2-header">
          <button class="offer2-button">Notre offre</button>
        </header>
        <main class="main-content">
          <h1 class="title">Préparation et optimisation du bien</h1>
          <div class="features2-grid">
            <div class="feature2-item">
              <h2><span class="number">01</span> Aménagement & Home Staging</h2>
              <p>Conseils et assistance pour aménager et décorer votre bien afin de le rendre plus attrayant et d’optimiser les chances de location.</p>
              <a href="#" class="features2-arrow-link">→</a>
            </div>
            <div class="feature2-item">
              <h2><span class="number">02</span> Photographie professionnelle</h2>
              <p>Prise de photos par des experts en photographie immobilière pour mettre en avant le confort, l’élégance et l’atmosphère unique de votre espace.</p>
              <a href="#" class="features2-arrow-link">→</a>
            </div>
            <div class="feature2-item">
              <h2><span class="number">03</span> Création d’annonces optimisées</h2>
              <p>Rédaction d’annonces captivantes et optimisées pour maximiser la visibilité sur des plateformes comme Airbnb et Booking.com.</p>
              <a href="#" class="features2-arrow-link">→</a>
            </div>
            <div class="feature2-item">
              <h2><span class="number">04</span> Tarification dynamique</h2>
              <p>Mise en place de stratégies tarifaires adaptées au marché et aux périodes de forte demande pour optimiser les revenus locatifs.</p>
              <a href="#" class="features2-arrow-link">→</a>
            </div>
          </div>
        </main>
        </div>
      </section>
      <section class="offer3-section">
        <div class="offer3-container">
          <header class="offer3-header">
            <div>
              <button class="offer3-button">Notre offre</button>
              <h1 class="offer3-title">Préparation et optimisation du bien</h1>
              <h2 class="offer3-title2">1- Aménagement & Home Staging</h2>
            </div>
            <img class="offer3-image" src={image9} alt="" />
          </header>
          <main class="main-content">
            <div class="offer3-features">
              <div class="offer3-feature">
                <div class="offer3-feature-head" >
                  <img class="offer3-feature-image" src={image10} alt="" />
                </div>
                <div style={{ backgroundImage: `url(${image16})`, backgroundSize: `500px` }} class="offer3-feature-content">
                  <h3 class="offer3-feature-title">OFFRE BASIQUE</h3>
                  <p class="offer3-feature-description">
                    <ul>
                      <li>Conseil en aménagement pour biens neufs ou à rénover.</li>
                      <li>Fourniture d'un Book Concept incluant des recommandations d’agencement, mobilier, matériaux et couleurs.</li>
                    </ul>
                     
                  </p>
                </div>
              </div>
              <div class="offer3-feature">
                <div class="offer3-feature-head" >
                  <img class="offer3-feature-image" src={image12} alt="" />
                </div>
                <div class="offer3-feature2-content">
                  <h3 class="offer3-feature-title">OFFRE CONFORT</h3>
                  <p class="offer3-feature-description">
                    <ul>
                      <li>Comprend l'offre <b>BASIQUE.</b></li>
                      <li>Réalisation des travaux d'aménagement en favorisant un environnement de vie contortable et respectueux de la santé.</li>
                    </ul>
                  </p>
                </div>
              </div>
              <div class="offer3-feature">
                <div class="offer3-feature-head" >
                  <img class="offer3-feature-image" src={image14} alt="" />
                </div>
                <div class="offer3-feature-content">
                  <h3 class="offer3-feature-title">OFFRE PREMIUM</h3>
                  <p class="offer3-feature-description">
                    <ul>
                      <li>Comprend l'offre <b>CONFORT.</b></li>
                      <li>Branding personnalisé pour les multipropriétaires, avec création d'une identité visuelle cohérente pour l'ensemble des biens.</li>
                    </ul>
                     
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
      <section class="offer4-section">
        <div class="offer4-container">
          <header class="offer4-header">
            <div>
              <button class="offer3-button">Notre offre</button>
              <h1 class="offer3-title">Préparation et optimisation du bien</h1>
              <h2 class="offer3-title2">2- Photographie professionnelle</h2>
            </div>
            <img class="offer3-image" src={image9} alt="" />
          </header>
          <main class="main-content">
            <div class="offer4-features">
              <div class="offer4-feature">
                <div class="offer4-feature-message">
                  <p>
                  Grâce à des photos de haute qualité réalisées
                  par des experts, nous mettons en lumière les
                  atouts uniques de votre espace, en capturant
                  ses meilleurs angles. Ces images percutantes
                  créent une première impression mémorable
                  qui attire davantage de locataires. Elles
                  maximisent la visibilité de votre bien sur les
                  principales plateformes de location,
                  augmentant ainsi vos chances de location
                  rapide et régulière.
                  </p>
                </div>
                
                <div class="offer4-feature-gallery">
                  <div class="offer4-feature-gallery-container">
                    <div class="offer4-feature-gallery-item offer4-feature-gallery-item-living-room">
                        <img src={image1} alt="Modern living room with beige couch"/>
                    </div>

                    <div class="offer4-feature-gallery-item offer4-feature-gallery-item-bathroom">
                        <img src={image2} alt="Contemporary bathroom with circular mirror"/>
                    </div>

                    <div class="offer4-feature-gallery-item offer4-feature-gallery-item-spa">
                        <img src={image3} alt="Spa accessories with towel"/>
                    </div>

                    <div class="offer4-feature-gallery-item offer4-feature-gallery-item-kitchen">
                        <img src={image4} alt="Modern kitchen with bar stools"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}

export default App;
