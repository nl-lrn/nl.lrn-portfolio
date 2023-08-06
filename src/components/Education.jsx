import '../styles/Education.css';
import { Chrono } from 'react-chrono';
import { educationsList } from '../datas/educationsList';
import { skillsList } from '../datas/skillsList';

function Education() {
    return (
        <section id="education" className="portfolio-education">
            <h2 className='portfolio-education-h2'>Mes formations</h2>
            <div className="portfolio-timeline">
                <Chrono items={ educationsList } 
                        mode="VERTICAL_ALTERNATING"  
                        theme={{primary: '#672112', 
                                secondary:"#c9e1ff", 
                                titleColor: '#672112', 
                                titleColorActive: '#672112', 
                                cardTitleColor: '#672112', 
                                cardDetailedColor: '#672112'}} 
                        hideControls='false'
                        fontSizes={{
                            cardSubtitle: '0.85rem',
                            cardText: '0.8rem',
                            cardTitle: '1rem',
                            title: '0.8rem',
                          }}/>
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