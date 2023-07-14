import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../styles/Project.css';
import { projectsList } from "../datas/projectsList";

function Project() {

    return (
        <section id="project" className="portfolio-project">
            <h2>Mes projets</h2>
            <Carousel className="portfolio-project-pictures">
                {projectsList.map(({id, cover, title, description}) => (
                <div key={id}>
                    <img src={cover} alt="" />
                    <div className="overlay">
                        <span>{title}</span>
                        <p>{description}</p>
                    </div>
                    
                </div>
                ))}
            </Carousel>
        </section>
    )
}

export default Project;
