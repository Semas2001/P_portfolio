'use client';
import Hero from '@/components/Hero';
import React from 'react';
import Projects from '../../components/projects';
import { FloatingDock } from '@/components/ui/floating-dock';
import { FaHome, FaProjectDiagram, FaMailBulk } from 'react-icons/fa';
import Footer from '@/components/footer';

const ProjectPage = () => {
  const dockItems = [
    {
      title: 'Home',
      icon: <FaHome />,
      href: '/',
    },
    {
      title: 'Projects',
      icon: <FaProjectDiagram />,
      href: '/projects',
    },
    {
      title: 'Contact',
      icon: <FaMailBulk />,
      href: '/contact',
    },
  ];

  return (
    <main className='h-screen relative flex justify-center items-center flex-col overflow-y-auto mx-auto sm:px-10 px-5'>
      <div className='h-auto w-full xl:px-20 lg:px-20 sm:px-10 overflow-y-auto'> {/* Allow vertical scrolling */}
        <FloatingDock items={dockItems} desktopClassName='z-30' mobileClassName='z-30 relative top-10 fixed' />
        <Hero />
        <Projects />
        <Footer />
        <br />
      </div>
    </main>
  );
};

export default ProjectPage;
