import "./Navbar.css";

function Navbar({ profile }) {
    return (
        <header className="navbar">
            <div className="container navbar-inner">
                <a href="#home" className="navbar-brand">
                    {profile.name}
                </a>

                <nav className="navbar-menu" aria-label="Main navigation">
                    <a href="#home">Home</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;