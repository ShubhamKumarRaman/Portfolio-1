import Navbar from "../../components/Navbar/Navbar.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import Skills from "../../components/Skills/Skills.jsx";
import Projects from "../../components/Projects/Projects.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import content from "../../data/content.json";

function Home() {
  return (
    <>
      <Navbar profile={content.profile} />

      <main>
        <Hero profile={content.profile} />
        <Skills skills={content.skills} />
        <Projects projects={content.projects} />
        <Contact contactLinks={content.contactLinks} profile={content.profile} />
      </main>

      <Footer profile={content.profile} />
    </>
  );
}

export default Home;