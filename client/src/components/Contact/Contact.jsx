import SectionTitle from "../SectionTitle/SectionTitle.jsx";
import "./Contact.css";

function Contact({ contactLinks, profile }) {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <SectionTitle
                    title="Contact"
                    subtitle="You can reach me through any of the following platforms."
                />

                <div className="contact-grid">
                    {contactLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.url}
                            className="card contact-card"
                            target={link.url.startsWith("http") ? "_blank" : undefined}
                            rel={link.url.startsWith("http") ? "noreferrer" : undefined}
                        >
                            <span className="contact-platform">{link.platform}</span>
                            <span className="muted">{link.label}</span>
                        </a>
                    ))}
                </div>

                <p className="muted contact-note">
                    Preferred contact email: {profile.email}
                </p>
            </div>
        </section>
    );
}

export default Contact;