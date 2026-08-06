import SectionTitle from "../SectionTitle/SectionTitle.jsx";
import ProjectCard from "../ProjectCard/ProjectCard.jsx";
import "./Projects.css";

function Projects({ projects }) {
    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <SectionTitle
                    title="Projects"
                    subtitle="A few projects I have built or worked on."
                />

                <div className="projects-grid">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;