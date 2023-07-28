import About from '../components/About.jsx';
import Education from '../components/Education.jsx';
import Project from '../components/Project.jsx';
import Cv from '../components/Cv.jsx';

function Home() {
    return (
        <section>
            <About />
            <Education />
            <Project />
            <Cv />
        </section>
    )
};

export default Home;