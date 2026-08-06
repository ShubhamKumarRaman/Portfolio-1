import "./ProjectCard.css";

function ProjectCard({ project }) {
    const placeholderLetter = project.title.charAt(0).toUpperCase();

    return (
        <article className="card project-card">
            <div className="project-image">
                {project.imageUrl ? (
                    <img src={project.imageUrl} alt={project.title} />
                ) : (
                    <span>{placeholderLetter}</span>
                )}
            </div>

            <div className="project-body">
                <h3>{project.title}</h3>

                <p className="muted">{project.description}</p>

                <div className="project-tech">
                    {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                    ))}
                </div>

                <div className="project-links">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        Live Demo
                    </a>

                    <a href={project.repoUrl} target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;