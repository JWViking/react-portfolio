import './index.css';
import projects from '../../utils/projects.json'
import Cards from '../../components/Cards'

function Portfolio() {
    return (
        <>
            <section id="work" className="work">
                <h3>Under Construction - Work Examples</h3>
                <article className="work-tiles">
                    {projects.map(project => {
                        return (
                            <Cards title={project.title} className={project.className} github={project.github} livelink={project.livelink}/>
                        )
                    })}
                </article>
            </section>
        </>
    )
}

export default Portfolio;