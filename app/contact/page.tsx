'use client';
import Hero from '@/components/Hero';
import React from 'react';
import { useRouter } from 'next/navigation';
import { FloatingDock } from '@/components/ui/floating-dock';
import { FaLocationArrow, FaHome, FaProjectDiagram, FaMailBulk } from 'react-icons/fa';
import Footer from '@/components/footer';
import MButton from '@/components/ui/MButton';

const ContactPage = () => {
  const router = useRouter();
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
  
    const formData = new FormData(e.currentTarget);
    const response = await fetch('https://formspree.io/f/xeojwvdy', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });
  
    if (response.ok) {
      alert('Message sent successfully!');
      e.currentTarget.reset();
  
      router.push('/'); 
    } else {
      alert('There was a problem sending your message.');
    }
  };
  


  return (
    <div className='h-screen relative flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5'>
      <FloatingDock items={dockItems} desktopClassName='z-10' mobileClassName='z-30 relative top-10 fixed left-5'/>
      <Hero />
      <form 
        className='z-10 flex flex-col gap-6 p-6 rounded-lg shadow-lg w-full max-w-lg'
        onSubmit={handleSubmit} 
      >
        <input
          type='text'
          name='name' 
          placeholder='Name'
          className='border-b p-2 rounded-md bg-inherit'
          required 
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          className='border-b p-2 rounded-md bg-inherit'
          required 
        />
        <textarea
          name='message' 
          placeholder='Message'
          className='resize-none h-100 border-b p-2 rounded-md bg-inherit'
          required 
        />
        <div className="flex justify-center">
          <MButton 
            title="Send Message"
            icon={<FaLocationArrow />}
            position='right'
            type="submit"
          />
        </div>
      </form>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
