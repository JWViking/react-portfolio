import './index.css';
import projects from '../../utils/projects.json'
import Cards from '../../components/Cards'

function Portfolio() {
    return (
        <>
            <section id="work" className="work">
                <h3>Work Examples</h3>
                <article className="work-tiles">
                    {projects.map((project, i) => {
                        return (
                            <Cards key={i}image={project.image} 
                            // title={project.title} 
                            className={project.className} 
                            github={project.github} 
                            livelink={project.livelink}/>
                        )
                    })}
                </article>
            </section>
        </>
    )
}

export default Portfolio;