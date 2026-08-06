import SectionTitle from "../SectionTitle/SectionTitle.jsx";
import "./Skills.css";

function Skills({ skills }) {
    const categories = [...new Set(skills.map((skill) => skill.category))];

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <SectionTitle
                    title="Skills"
                    subtitle="Technologies and tools I use for building web applications."
                />

                <div className="skills-grid">
                    {categories.map((category) => {
                        const categorySkills = skills.filter(
                            (skill) => skill.category === category
                        );

                        return (
                            <article className="card skill-card" key={category}>
                                <h3>{category}</h3>

                                <div className="skill-items">
                                    {categorySkills.map((skill) => (
                                        <span className="skill-badge" key={skill.id}>
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Skills;