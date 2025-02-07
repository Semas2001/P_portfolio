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
    <div className='pb-10 pt-36 '>
      <div>
      <Spotlight />


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
