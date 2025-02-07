import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";




function ScrollSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  

  useEffect(() => {
    if (sectionRef.current ) {
      const sectionWidth = sectionRef.current.scrollWidth;
      const pin = gsap.fromTo(
        sectionRef.current,
        {
          translateX: 0,
        },
        {
          translateX: `-${sectionWidth - window.innerWidth}px`,
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: `+=${sectionWidth}`,
            scrub: 0.6,
            pin: true,
            snap: 1 / (sectionWidth / window.innerWidth),
          },
        }
      );
      return () => {
        pin.kill();
      };
    }
  }, []);

  return (
    <section ref={triggerRef} className="scroll-section-outer overflow-hidden">
      <div ref={sectionRef}>
        <div className="scroll-section-inner h-[100dvh] w-[400vw] flex flex-row relative">
          <section className="scroll-section pt-20 h-[100dvh] w-[86vw] flex justify-center items-center">
            <div className="flex-row justify-center text-center items-center">
              <h1 className="text-neutral-800 dark:text-neutral-200 text-xs lg:text-xl md:text-lg font-metropolis font-normal mb-8">
                Started my Studies
              </h1>
              <div className="flex flex-col gap-6 md:gap-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                  {/* Text Content */}
                  <div className="flex flex-col gap-4 col-span-1">
                    <h3 className="text-neutral-800 dark:text-neutral-100 font-metropolis text-lg md:text-xl font-semibold">
                      Academic Journey
                    </h3>
                    <div className="space-y-4">
                      <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed">
                        🎓 I began my Computer Science studies at Liverpool Hope University, where I completed two years 
                        including a collaborative group project. Our team developed <strong>AceTraining</strong> - 
                        a web platform facilitating resource sharing and interactive quizzes between teachers and students.
                      </p>
                      <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed">
                        🔬 For my final year, I transferred to the University of Liverpool, graduating with 
                        <strong> First Class Honours</strong>. My dissertation focused on mobile financial solutions for SMEs, 
                        implemented using <strong>Kivy</strong> - a Python framework for cross-platform mobile development.
                      </p>
                    </div>
                  </div>

                  {/* Image Grid */}
                  <div className="grid grid-cols-2 gap-4 md:gap-6 col-span-2">
                    <div className="relative group col-span-2 md:col-span-1">
                      <Image
                        src="/icons/LiHU.svg"
                        alt="Liverpool Hope University Campus"
                        width={600}
                        height={400}
                        className="rounded-xl object-contain h-32 md:h-48 w-full bg-neutral-50 dark:bg-neutral-900 p-4"
                      />
                    </div>
                    
                    <div className="relative group col-span-2 md:col-span-1">
                      <Image
                        src="/AT.png"
                        alt="AceTraining Platform Interface"
                        width={600}
                        height={400}
                        className="rounded-xl object-cover h-32 md:h-48 w-full shadow-lg dark:shadow-neutral-800/30"
                      />
                    </div>

                    <div className="relative group col-span-2 md:col-span-1">
                      <Image
                        src="/icons/UEL.svg"
                        alt="University of Liverpool Library"
                        width={600}
                        height={400}
                        className="rounded-xl object-contain h-32 md:h-48 w-full bg-neutral-50 dark:bg-neutral-900 p-4"
                      />
                    </div>

                    <div className="relative group col-span-2 md:col-span-1">
                      <Image
                        src="/FinanceMe.png"
                        alt="FinanceMe Application Demo"
                        width={600}
                        height={400}
                        className="rounded-xl object-cover h-auto md:h-48 w-full shadow-lg dark:shadow-neutral-800/30"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="scroll-section w-[100vw] h-[100dvh] flex justify-center items-center">
            <div className="flex-row justify-center text-center items-center">
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-metropolis font-normal mb-8">
                After University I started working on my own projects
              </p>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/ABW.png"
                  alt="hero template"
                  width={506}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="/pweb.png"
                  alt="feature template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="/RBWebT.png"
                  alt="bento template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="/AT.png"
                  alt="cards template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
            </div>
          </section>
          <section className="scroll-section w-[100vw] h-[100dvh] flex justify-center items-center">
            <div className="flex-row justify-center text-center items-center">
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-metropolis mb-4">
                Started Freelancing
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/blag.png"
                  alt="hero template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="/icons/wp.svg"
                  alt="wp.svg"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 mx-auto w-auto "
                />
                <Image
                  src="/icons/E_icon.svg"
                  alt="bento template"
                  width={500}
                  height={500}
                  className="rounded-300% object-cover h-20 md:h-44 lg:h-60 w-auto mx-auto shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="/Pblag.png"
                  alt="cards template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
