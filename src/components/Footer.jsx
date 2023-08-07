import '../styles/Footer.css';
import logo from '../assets/general/logo.jpg';

function Footer() {
    return (
        <section className="portfolio-bg-down">
            <div className='portfolio-logo-down'>
                <img src={logo} alt="logo de Laurine NOËL - portfolio" />
            </div>
            <div className='portfolio-droits'>
                <span>2023 © Tous droits réservés</span>
                <span>Laurine NOËL</span>
            </div>
        </section>
    )
}

export default Footer;