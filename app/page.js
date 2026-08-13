import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Education from '../components/Education';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import PageLoader from '../components/ui/PageLoader';
import ScrollProgress from '../components/ui/ScrollProgress';

export default function Page() {
  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <div className="min-h-screen bg-bg text-white">
        <Navbar />
        <main className="relative overflow-hidden">
          <Hero />
          <section id="about" className="bg-bg/80 pt-24">
            <About />
          </section>
          <section id="skills" className="bg-surface/90 pt-24">
            <Skills />
          </section>
          <section id="projects" className="bg-bg/90 pt-24">
            <Projects />
          </section>
          <section id="achievements" className="bg-surface/95 pt-24">
            <Achievements />
          </section>
          <section id="education" className="bg-bg/90 pt-24">
            <Education />
          </section>
          <section id="services" className="bg-surface/95 pt-24">
            <Services />
          </section>
          <section id="contact" className="bg-bg/90 pt-24 pb-24">
            <Contact />
          </section>
          <Footer />
        </main>
      </div>
    </>
  );
}
