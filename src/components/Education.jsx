import '../styles/Education.css';
import { Chrono } from 'react-chrono';
import { educationsList } from '../datas/educationsList';
import { skillsList } from '../datas/skillsList';

function Education() {
    return (
        <section id="education" className="portfolio-education">
            <h2>Mes formations</h2>
            <div className="portfolio-timeline" style={{ width: "80%", height: "100%" }}>
                <Chrono items={ educationsList } 
                        mode="VERTICAL_ALTERNATING"  
                        theme={{primary: '#672112', 
                                secondary:"#c9e1ff", 
                                titleColor: '#672112', 
                                titleColorActive: '#672112', 
                                cardTitleColor: '#672112', 
                                cardDetailedColor: '#672112'}} 
                        hideControls='false'/>
            </div>
            <h2>Langages</h2>
            <div className='portfolio-langage'>
                {skillsList.map(skill => (
                    <div key={skill.title} className='portfolio-education-skills'>
                        <img src={skill.icon} alt={skill.title} className='portfolio-education-skills-img'/>
                        <p>{skill.title}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Education;