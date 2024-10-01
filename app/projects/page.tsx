'use client'
import Hero from '@/components/Hero'
import React from 'react'
import Projects from './projects'
import { FloatingDock } from '@/components/ui/floating-dock'
import { FaHome, FaProjectDiagram, FaMailBulk } from 'react-icons/fa'
import Footer from '@/components/footer'

const projectPage = () => {
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
    <div className='relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5'>
      <div className='h-auto w-full xl:px-20 lg:px-20 sm:px-10'>
      <FloatingDock items={dockItems} desktopClassName='z-30' mobileClassName='z-30 relative top-10 fixed'/>
      <Hero></Hero>
      <Projects/>
      <Footer></Footer>
      <br></br>
      </div>
    </div>
  )
}

export default projectPage
