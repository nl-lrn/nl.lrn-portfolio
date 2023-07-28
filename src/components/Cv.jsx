import cv from "../assets/general/CV.png"
import '../styles/Cv.css';

function Cv() {

    return (
        <section id="cv" className="portfolio-cv">
            <h2>Mon CV</h2>

            <a href={cv} target="_blank" rel="noreferrer">Télécharger mon CV</a>

        </section>
    )
}

export default Cv;