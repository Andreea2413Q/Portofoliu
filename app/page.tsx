
import './globals.css';

import Awards from "@/components/awards";
import Navbar from '@/components/navbar';
import Home from '@/components/home';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import SiteContent from '../components/site_content';

export default function Site() {
  return (
    <SiteContent>
      <section id="home" className="relative min-h-screen">
        <Home />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="awards">
        <Awards />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </SiteContent>
  );
}
