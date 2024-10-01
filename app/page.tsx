'use client'
import Grid from '@/components/grid'
import Hero from '@/components/Hero'
import { FloatingDock } from '@/components/ui/floating-dock'
import { FaHome, FaProjectDiagram, FaMailBulk } from 'react-icons/fa'
import Footer from '@/components/footer'
import CV from '@/components/cv-outline'

export default function Home() {
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
    <main className='relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5'>
      <div className=' h-auto w-full xl:px-20 lg:px-20 sm:px-4'>
      <FloatingDock items={dockItems} desktopClassName='z-30' mobileClassName='z-30 relative top-10 fixed'/>  
        <Hero />
        <Grid />
        <CV/> 
        <Footer/>
             
      </div>
    </main>
  )
}
