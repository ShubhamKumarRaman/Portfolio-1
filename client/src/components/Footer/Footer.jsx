import "./Footer.css";

function Footer({ profile }) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-inner">
                <p>
                    © {currentYear} {profile.name}. All rights reserved.
                </p>

                <p>Built with React and MERN stack.</p>
            </div>
        </footer>
    );
}

export default Footer;