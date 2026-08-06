import "./Hero.css";

function Hero({ profile }) {
    const initials = profile.name
        .split(" ")
        .filter(Boolean)
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    return (
        <section id="home" className="hero section">
            <div className="container hero-content">
                <div className="hero-text">
                    <p className="hero-greeting">Hello, I am</p>

                    <h1>{profile.name}</h1>

                    <h2>{profile.title}</h2>

                    <p className="muted hero-tagline">{profile.tagline}</p>

                    <p className="muted hero-bio">{profile.bio}</p>

                    <div className="hero-actions">
                        <a className="button button-primary" href="#projects">
                            View Projects
                        </a>

                        <a className="button button-secondary" href="#contact">
                            Contact Me
                        </a>
                    </div>
                </div>

                <div className="hero-card card">
                    <div className="hero-avatar" aria-hidden="true">
                        {initials}
                    </div>

                    <p className="hero-location">{profile.location}</p>

                    <p className="hero-email">{profile.email}</p>

                    <p
                        className={
                            profile.availableForWork
                                ? "status available"
                                : "status unavailable"
                        }
                    >
                        {profile.availableForWork
                            ? "Available for work"
                            : "Not available for work"}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Hero;