"use client";
import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaPython, FaPhp } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { Tabs } from './ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { ScrollArea } from './ui/scroll-area';
import { motion } from 'framer-motion';

const about = {
    title: 'About Me',
    des: 'I have recently graduated with a First-Class Honours in Computer Science BSc, where I broadened my vast interest, specifically in software engineering. During my time as the head student in the computer science department, I took on leadership responsibilities while pursuing extracurricular projects to broaden my programming expertise. I have worked on web-dev projects and application development for finance. Through these projects, I was able to explore different theories and practices which helped me code efficiently. I believe to be efficient, organised, a good team player and communicator as well as an eager learner.',
    info: [
        { fieldName: 'Name', FieldValue: "Semas Armonaitis" },
        { fieldName: 'Phone', FieldValue: "+447311080700" },
        { fieldName: 'Email', FieldValue: "semasarmonaitis@gmail.com" },
        { fieldName: 'Available?', FieldValue: "Available to start immediately" },
        { fieldName: 'Languages', FieldValue: 'English (fluent), Lithuanian (native), Russian (Conversational)' },
    ]
};

const experience = {
    title: 'My Experience',
    des: 'This is my experience, I know it might not be much but it will become populated soon!',
    items: [
        { company: 'Amana Trust', position: 'IT Worker', duration: '2023 May - 2023 Aug ', desc: '' },
    ]
};

const education = {
    title: 'My Education',
    des: 'I first got interested in computer science before Reading College. However, I managed to learn a lot whilst I was in college...',
    items: [
        { school: 'Reading College', course: 'National Extended Diploma in Computer Science', duration: 'Sep 2018 - Jun 2020', grade: 'DMM' },
        { school: 'Liverpool Hope University', course: 'Computer Science Bachelor Degree', duration: 'Oct 2021 - May 2023', grade: '2:1' },
        { school: 'University of East London', course: 'Computer Science Bachelor Degree', duration: 'Sept 2023 - May 2024', grade: '1st' },
    ]
};

const skills = {
    title: 'My Skills',
    des: '',
    skillList: [
        { icon: <FaHtml5 />, name: 'HTML 5' },
        { icon: <FaCss3 />, name: 'CSS' },
        { icon: <FaJs />, name: 'JS' },
        { icon: <FaReact />, name: 'React' },
        { icon: <FaFigma />, name: 'Figma' },
        { icon: <FaNodeJs />, name: 'Node JS' },
        { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
        { icon: <SiNextdotjs />, name: 'Next.JS' },
        { icon: <FaPython />, name: 'Python' },
        { icon: <FaPhp />, name: 'PHP' }
    ]
};

const CV = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1, transition: { delay: 0.1, duration: 0.4, ease: 'easeIn' } }}
            className='relative flex justify-center xl:py-0 xl:min-h-[1000px] lg:min-h-[900px]'
        >
            <div className='container mx-auto'>
                <Tabs
                    tabs={[
                        { title: 'About Me', value: 'about', content: (
                            <div className='flex flex-col gap-[30px] h-[700px] text-center xl:text-left bg-[#10132e] p-6 rounded-xl'>
                                <h1 className='text-4xl font-bold pb-5'>{about.title}</h1>
                                <p className='max-w-[1000px] text-white/60 mx-auto pb-10 xl:mx=0'>{about.des}</p>
                                <ul className='grid grid-cols-1 xl:grid-cols-1 xl:px-20 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                                    {about.info.map((item, index) => (
                                        <li key={index} className='flex items-start justify-start xl:justify-start gap-4'>
                                            <span className='text-purple text-md'>{item.fieldName}</span>
                                            <span className='text-lg'>{item.FieldValue}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )},
                        { title: 'Experience', value: 'experience', content: (
                            <div className='flex flex-col gap-[30px] h-[700px] text-center xl:text-left bg-[#10132e] p-6 rounded-xl'>
                                <h1 className='text-4xl font-bold pb-5'>{experience.title}</h1>
                                <p className='max-w-[600px] text-white/60 mx-auto pb-10 xl:mx=0'>{experience.des}</p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 xl:px-20 lg:grid-cols-2 gap-[30px]'>
                                        {experience.items.map((item, index) => (
                                            <li
                                                key={index}
                                                className='relative bg-[#10132e] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                                                style={{ 
                                                    backgroundImage: "url('/grid.svg')", 
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat',
                                                }}
                                            >
                                                <span className='text-gray-300'>{item.duration}</span>
                                                <h3 className='text-purple font-bold'>{item.position}</h3>
                                                <div className='flex items-center gap-3'>
                                                    <span className='w-[6px] h-[6px] rounded-full bg-purple'></span>
                                                    <p className='text-gray-200'>{item.company}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        )},
                        { title: 'Education', value: 'education', content: (
                            <div className='flex flex-col gap-[30px] h-[700px] text-center xl:text-left bg-[#10132e] p-6 rounded-xl'>
                                <h1 className='text-4xl font-bold pb-5'>{education.title}</h1>
                                <p className='max-w-[600px] text-white/60 mx-auto pb-10 xl:mx=0'>{education.des}</p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 xl:px-20 lg:grid-cols-2 gap-[30px]'>
                                        {education.items.map((items, index) => (
                                            <li
                                                key={index}
                                                className='relative bg-[#10132e] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                                                style={{ 
                                                    backgroundImage: "url('/grid.svg')", 
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat',
                                                }}
                                            >
                                                <span className='text-gray-300'>{items.duration}</span>
                                                <h3 className='text-purple font-bold'>{items.course}</h3>
                                                <div className='flex items-center gap-3'>
                                                    <span className='w-[6px] h-[6px] rounded-full bg-purple'></span>
                                                    <p className='text-gray-200'>{items.school}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        )},
                        { title: 'Skills', value: 'skills', content: (
                            <div className='relative flex flex-col gap-[30px] h-[700px] text-center xl:text-left bg-[#10132e] p-6 rounded-xl'>
                                <div className='flex flex-col gap-[30px]'>
                                    <h1 className='text-4xl font-bold pb-5'>{skills.title}</h1>
                                    <p className='max-w-[600px] text-white/60 mx-auto pb-10 xl:mx=0'>{skills.des}</p>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-[30px] absolute bottom-0 left-0 right-0 p-6'>
                                    {skills.skillList.map((skill, index) => (
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className='w-full h-[150px] rounded-xl flex justify-center items-center group'>
                                                        <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                                                            {skill.icon}
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )},
                        
                    ]}
                />
            </div>
        </motion.div>
    );
};

export default CV;
