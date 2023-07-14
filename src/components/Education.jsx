import '../styles/Education.css';
import { Chrono } from 'react-chrono';
import { educationsList } from '../datas/educationsList';

function Education() {
    return (
        <section id="education" className="portfolio-education">
            <h2>Mes formations</h2>
            <div className="portfolio-timeline" style={{ width: "80%", height: "100%" }}>
                <Chrono items={ educationsList } mode="VERTICAL_ALTERNATING"  theme={{primary: '#672112', secondary:"#eff5fd", titleColor: '#672112', titleColorActive: '#672112', cardTitleColor: '#672112'}} hideControls='false'/>
            </div>
        </section>
    )
}

export default Education;