import '../styles/Header.css';
import logo from '../assets/logo.jpg';

function Header() {
    return (
        <section className="portfolio-bg-up">
            <div className='portfolio-logo-up'>
                <img src={logo} alt="logo" />
                <div>
                    <h1>Laurine NOËL</h1>
                    <p>Portfolio</p>
                </div>
            </div>

            <nav className='portfolio-nav'>
                <a href="#about">À propos</a>
                <a href="#education">Formations</a>
                <a href="#project">Projets</a>
                <a href="#cv"> Mon CV</a>
            </nav>
            
        </section>
    )
}

export default Header;