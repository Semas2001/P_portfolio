'use client';

import React, { useEffect, useState } from 'react';
import { projects } from '@/data';
import { PinContainer } from '@/components/ui/3d-pin';
import Image from 'next/image';
import { HeroHighlight, Highlight} from './ui/hero-highlight';
import { motion } from "framer-motion";

type Project = {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
};

const Projects = () => {
  const [projectsData, setProjectsData] = useState<Project[]>(projects); 
  useEffect(() => {
    console.log('Projects data:', projectsData);
  }, [projectsData]);

  return (
    <section id='projects' className='p-4 mb-10 mt-20 h-auto items-center justify-center'>
      <div className='h-20 pt-30 lg:mb-10 flex items-center justify-center'>
      <HeroHighlight>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, -5, 0] }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            className="text-4xl px-4 md:text-6xl lg:text-6xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
          >
            <Highlight className="text-black dark:text-white">Projects</Highlight>
          </motion.h1>
        </HeroHighlight>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-20 xl:mt-10'>
        {projectsData.map(({ id, title, des, img, iconLists, link }) => (
          <article
            key={id}
            className='flex flex-col items-center justify-center mb-0 lg:mb-10 xl:min-h-[23.5rem] h-auto md:w-96 w-full z-10'
          >
            <PinContainer title={link} href={link}>
              <div className='relative flex items-center justify-center  h-[25vh] md:h-[15vh] xl:w-[25rem] w-80 overflow-hidden lg:rounded-3xl'>
                <div className='absolute w-full h-full bg-[#13162d]'>
                  <img
                    src='/bg.png'
                    alt='Background image'
                    className='object-cover rounded-3xl fill-inherit'
                  />
                </div>
                <img
                  src={img}
                  alt={`Image for ${title}`} 
                  className='absolute top-2 rounded-3xl'
                  style={{
                    transform: 'scaleY(1.1) rotate(3deg)',
                    objectFit: 'contain',
                  }}
                />
              </div>
  
              <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                {title}
              </h1>
              <div className='lg:text-xl font-normal text-sm line-clamp-2'>
                {des}
              </div>
              <div className='flex items-center justify-center mt-7 mb-3'>
                <div className='flex items-center'>
                  {iconLists.map((icon, index) => (
                    <div
                      key={`${icon}-${index}`} 
                      className='border border-white/[0.2] rounded-full bg-black w-10 h-10 flex justify-center items-center'
                      style={{ transform: `translateX(-${5 * index}px)` }}
                    >
                      <img src={icon} alt={`Icon ${index} for ${title}`} className='p-2' />
                    </div>
                  ))}
                </div>
              </div>
            </PinContainer>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
