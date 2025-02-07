'use client';

import React, { useEffect, useState } from 'react';
import { projects } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import { BackgroundGradient } from './ui/backgrond-gradient';

type Project = {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  linktag:string;
};

const TitleComponent = ({
  link,
  title,
}: {
  link: string;
  title: string;
}) => (
  <div className="flex space-x-2 items-center">
    <p>{title}</p>
    <p>{link}</p>
  </div>
);

/**
 * A copy of the Projects component.
 *
 * This component uses the FollowerPointerCard and TitleComponent components to create a
 * grid of project cards. Each card contains a title, description, link, and icons.
 *
 * The component uses the useState and useEffect hooks to store and log the projects data.
 *
 * @returns A React component.
 */
const ProjectsCopy = () => {
  const [projectsData, setProjectsData] = useState<Project[]>(projects); 
  useEffect(() => {
    console.log('Projects data:', projectsData);
  }, [projectsData]);

  return (
    <section id='projects' className='pt-10 mb-10 mt-20'>
      <div className="mx-auto grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 md:gap-12">
        {projectsData.map(({ id, title, des, img, iconLists, link, linktag }) => (
          <div key={id} className="w-full max-w-md">
            <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <div className="relative aspect-[16/10] w-full h-[250px] overflow-hidden rounded-lg">
                <Image
                  src={img}
                  alt={`Image for ${title}`}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-95 rounded-lg group-hover:rounded-2xl transform transition duration-200"
                />
              </div>
              <div className="p-4">
                <h2 className="font-bold my-4 text-lg text-zinc-700">{title}</h2>
                <h2 className="font-normal h-10 my-4 text-sm text-zinc-500">{des}</h2>
                <div className="flex flex-row justify-between items-center mt-10">
                  <div className="flex items-center mt-7 mb-3">
                    {iconLists.map((icon, index) => (
                      <div
                        key={`${icon}-${index}`}
                        className="border border-white/[0.2] rounded-full bg-black/[0.5] w-10 h-10 flex justify-center items-center"
                        style={{ transform: `translateX(-${5 * index}px)` }}
                      >
                        <img src={icon} alt={`Icon ${index} for ${title}`} className="p-2" />
                      </div>
                    ))}
                  </div>
                  <Link
                    href={link}
                    className="relative z-10 mt-5 px-6 py-2 bg-white-200 text-zinc-900 font-bold rounded-xl text-xs"
                  >
                    {linktag}
                  </Link>
                </div>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>
    </section>

  );
}

export default ProjectsCopy;