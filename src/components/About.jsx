import '../styles/About.css';
import laurineNoel from "../assets/laurine-noel.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';

function About() {
    return (
        <section id="about" className="portfolio-about">
            <h2>À propos</h2>
            <div className="portfolio-about-display">
                <section className="portfolio-about-img">
                    <img src={laurineNoel} alt="Laurine NOËL" />
                </section>
                <section className="portfolio-about-details">
                    <h3><strong>Hello ! <br/> Je suis Laurine NOËL, développeuse web</strong></h3>
                    <p>Après avoir suivi une formation en développement web, je poursuis ma reconversion pour gagner de l'expérience professionnelle pour approfondir et améliorer mes connaissances, ainsi que mes compétences.
                    Je suis également titulaire d'un Bachelor Marketing en alternance, avec une expérience de 3 ans en tant que conseillère de vente dans le prêt-à-porter.</p>
                    <p>Vous pouvez me contacter par mail : <a href="mailto:noel.laurine.pro@outlook.fr">noel.laurine.pro@outlook.fr</a></p>                  
                    <div className='portfolio-about-button'>
                        <a href="https://github.com/nl-lrn" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faSquareGithub} /> <span>GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/laurine-noel/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} /> <span>LinkedIn</span>
                        </a>
                    </div>
                </section>
            </div>
            
        </section>
    )
}

export default About;