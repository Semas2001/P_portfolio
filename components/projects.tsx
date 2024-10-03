'use client';

import React, { useEffect, useState } from 'react';
import { projects } from '@/data';
import { PinContainer } from '@/components/ui/3d-pin';
import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
};

const Projects = () => {
  // Assuming projects data is static and available
  const [projectsData, setProjectsData] = useState<Project[]>(projects); 

  // Optional: log the data to check for discrepancies
  useEffect(() => {
    console.log('Projects data:', projectsData);
  }, [projectsData]);

  return (
    <main className='py-0'>
      <div className='flex flex-wrap items-center justify-center p-2 pb-20 gap-20 mt-10'>
        {projectsData.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className='flex flex-col items-center justify-center xl:min-h-[23.5rem] h-auto md:w-96 w-full z-10'>
            <PinContainer title={link} href={link}>
              <div className='relative flex items-center justify-center h-[15vh] xl:w-[25rem] w-80 overflow-hidden lg:rounded-3xl'>
                <div className='absolute w-full h-full bg-[#13162d]'>
                  <Image 
                    src='/bg.png' 
                    alt='Background image' 
                    fill 
                    className='object-cover rounded-3xl' 
                    priority 
                  />
                </div>
                <Image
                  src={img}
                  alt={title}
                  fill
                  className='absolute top-0 rounded-3xl'
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
                      key={icon}
                      className='border border-white/[0.2] rounded-full bg-black w-10 h-10 flex justify-center items-center'
                      style={{ transform: `translateX(-${5 * index}px)` }} 
                    >
                      <img src={icon} alt={`icon-${index}`} className='p-2' />
                    </div>
                  ))}
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
