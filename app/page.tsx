'use client'
import { FaHome, FaProjectDiagram, FaMailBulk } from 'react-icons/fa'
import Footer from '@/components/footer'
import CV from '@/components/cv-outline'
import Projects from '@/components/projects'
import Grid from '@/components/grid'
import Hero from '@/components/Hero'
import { FloatingDock } from '@/components/ui/floating-dock'
import FloatingButton from '@/components/ui/floating-button'
import { useState, useEffect } from 'react'

const Home = () => {
  const dockItems = [
    { title: 'Home', icon: <FaHome />, href: '/' },
    { title: 'Projects', icon: <FaProjectDiagram />, href: '#projects' },
    { title: 'Contact', icon: <FaMailBulk />, href: '/contact' },
  ];

  const [projectVisible, setProjectVisible] = useState(false);
  const [cvVisible, setCvVisible] = useState(false);
  const [gridVisible, setGridVisible] = useState(false);

  useEffect(() => {
    const projectObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProjectVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'cv') setCvVisible(true);
          if (entry.target.id === 'grid') setGridVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const projectElement = document.getElementById('projects');
    const cvElement = document.getElementById('cv');
    const gridElement = document.getElementById('grid');

    if (projectElement) projectObserver.observe(projectElement);
    if (cvElement) sectionObserver.observe(cvElement);
    if (gridElement) sectionObserver.observe(gridElement);

    return () => {
      if (projectElement) projectObserver.unobserve(projectElement);
      if (cvElement) sectionObserver.unobserve(cvElement);
      if (gridElement) sectionObserver.unobserve(gridElement);
    };
  }, []);

  return (
    <main className='relative  bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5'>
      <div className='h-auto w-full xl:px-20 lg:px-20 sm:px-4'>
        <FloatingDock items={dockItems} desktopClassName='z-30' mobileClassName='z-30 relative top-10 fixed'/> 
        <Hero />
        <div
          id="projects"
          className={`mb-20 transition-opacity duration-700 ease-in ${projectVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <Projects />
        </div>
        <div
          id="cv"
          className={`mt-20 transition-opacity duration-700 ease-in ${cvVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <CV />
        </div>
        <div
          id="grid"
          className={`transition-opacity duration-700 ease-in ${gridVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <Grid />
        </div>

        <Footer />
        <FloatingButton />
      </div>
    </main>
  );
};

export default Home;
