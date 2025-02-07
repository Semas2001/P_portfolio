'use client'
import Image from 'next/image'
import Footer from '@/components/footer'
import CV from '@/components/cv-outline'
import Grid from '@/components/grid'
import Hero from '@/components/Hero'
import FloatingButton from '@/components/ui/floating-button'
import { useState, useEffect } from 'react'
import ScrollSection from '@/components/Journey'
import ProjectsCopy from '@/components/projects-2.0'

const Home = () => {

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
    <main className=' font-montserrat relative  bg-black flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5'>
      <div className="h-full w-full dark:bg-black bg-white dark:bg-dot-white/[0.3] bg-dot-black/[0.2] absolute flex items-center justify-center top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div className='h-auto w-full xl:px-20 lg:px-20 sm:px-4'>
        <Image 
          src="/icons/SAlogo.png"
          alt="SA Logo"
          className="z-30 relative top-10  bg-transparent" 
          width={70}
          height={70}
          />
        <Hero />
        <ProjectsCopy/>
        <ScrollSection />
        <CV />
        <Grid />
        <Footer />
        <FloatingButton />
      </div>
    </main>
  );
};

export default Home;
