import { useEffect } from 'react';
import { Hero } from '../sections/Hero';
import { Services } from '../sections/Services';
import { Skills } from '../sections/Skills';
import { Projects } from '../sections/Projects';
import { Experience } from '../sections/Experience';
import { Testimonials } from '../sections/Testimonials';
import { Contact } from '../sections/Contact';

export function Home() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
    </>
  );
}
