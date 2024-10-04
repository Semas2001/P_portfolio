'use client';
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { useState } from "react";
import animationData from '@/data/confetti.json';
import Lottie from "react-lottie";
import MButton from "./MButton";
import Link from "next/link";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid px-10 xl:auto-rows-[5rem] xl:grid-cols-5 2xl:px40 xl:px-15 lg:auto-rows-[10rem] lg:grid-cols-10 md:auto-rows-[10rem] md:grid-cols-10 sm:grid-cols-1 sm:px-4 md:px-1 gap-5 max-w-auto mx-auto pb-40",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-2 border border-white/[0.1]",
        className
      )}
      style={{
        background: 'rgb(4, 7, 29)',
        backgroundColor: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
      }}
    >
      <div className={`${id === 6 ? 'flex justify-center' : ''} h-auto`}>
        <div className="w-full h-auto absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover object-center')}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 ? 'w-full opacity-80' : ''}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && <BackgroundGradientAnimation />}

        <div className={cn(
          titleClassName, 
          'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>

          {id === 3 && (
            <div className="flex gap-1 xl:gap-3 w-fit absolute -right-3">
              <div className="flex flex-col gap-3 xl:gap-4">
                {['React.js', 'Next.js', 'Typescript'].map(item => (
                  <span key={item} className="py-2 xl:py-3 xl:px-2 px-3 text-xs xl:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                    {item}
                  </span>
                ))}
                <span className="py-6 px-3 rounded-lg text-center bg-[#10132e]" />
              </div>
              
              <div className="flex flex-col gap-4 xl:gap-4">
                <span className="py-5 px-3 rounded-lg text-center bg-[#10132e]" />
                {['Python', 'PHP', 'Javascript'].map(item => (
                  <span key={item} className="py-2 xl:py-3 xl:px-2 px-3 text-xs xl:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className="absolute -bottom-5 right-0">
                <Lottie options={{
                  loop: copied,
                  autoplay: copied,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidyMid slice',
                  }
                }} />
              </div>
              <Link href="/contact" passHref>
                <MButton title="Contact Me" icon={undefined} position="left" otherClasses="!bg-[#161a31]" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
