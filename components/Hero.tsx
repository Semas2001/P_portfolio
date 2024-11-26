'use client';
import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MButton from './ui/MButton';
import { FaLocationArrow } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import Link from 'next/link'; // Use Next.js's Link component

const Hero = () => {
  const currentRoute = usePathname();
  let dynamicWords = 'Semas Armonaitis';

  return (
    <div className='pb-17 pt-36 h-[70dvh] lg:h-[40dvh]'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white" />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill="purple" />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="blue" />
      </div>
      <div className="h-full w-full dark:bg-black bg-white dark:bg-dot-white/[0.3] bg-dot-black/[0.2] absolute flex items-center justify-center top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div className='flex justify-center items-center relative my-20 z-10'>
        <div className='max-w-[89w] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-xs text-center text-blue-100'></h2>
          <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl' words={dynamicWords} />

          <div className='text-center md:tracking-wider mb-2 text-sm md:text-lg lg:text-2xl'>
            {currentRoute === '/projects' && <p>Always adding more!</p>}
            {currentRoute === '/contact' && <p>Looking forward to hearing from you!</p>}
            {currentRoute === '/' && <p>Your developer for a futuristic future</p>}
          </div>

          {currentRoute === '/' && (
            <Link href='contact' passHref>
              <MButton  
                title="Let's Get In Contact!"
                icon={<FaLocationArrow />}
                position='right'
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;
