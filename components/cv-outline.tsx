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
        { fieldName: 'Languages', FieldValue: 'English (native), Lithuanian (fluent), Russian (Conversational)' },
    ]
};

const experience = {
    title: 'My Experience',
    des: 'I have extensive experience in IT support and network infrastructure management, ensuring seamless technology operations across various environments. I have successfully set up and maintained complex IT systems, including configuring patch panels, mounting CCTV systems, and establishing secure workstations.My expertise includes installing and maintaining operating systems, deploying security protocols, and troubleshooting hardware and software issues efficiently. I provide first-line and on-site support, focusing on minimizing downtime and improving productivity.I am adept at managing IT projects, following technical documentation, and ensuring compliance with security standards. Whether working independently or as part of a team, I am committed to delivering reliable IT solutions tailored to meet business needs.',
    items: [
        { company: 'Amana Trust', position: 'IT Worker', duration: '2023 May - 2023 Aug ', desc: '' },
    ]
};

const education = {
    title: 'My Education',
    des: 'I graduated with First Class Honours in Computer Science from the University of East London, specializing in software engineering and web development. During my studies, I enhanced my skills in programming languages such as Python, Java, and JavaScript through hands-on projects. As the head student in the Computer Science department, I developed leadership and mentoring abilities while working on my dissertation focused on mobile financing applications for SMEs. These experiences sharpened my coding and problem-solving skills. Previously, I studied at Liverpool Hope University, where I created a School Resources Website that improved accessibility for educational materials, gaining practical experience in database management and user interface design. My foundational knowledge was further strengthened by earning a National Extended Diploma in Computer Science from Reading College. Overall, these experiences equipped me with a diverse skill set in project management, collaboration, and adaptability in the tech landscape, fueling my passion for continuous learning and innovation in computer science.',
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
            className='relative flex justify-center xl:py-0 xl:min-h-[1000px] lg:min-h-[1200px] min-h-[1050px] mt-10'
        >
            <div className='container mx-auto'>
                <Tabs
                    tabs={[
                        { title: 'About Me', value: 'about', content: (
                            <div className='flex flex-col gap-[30px] xl:h-[700px] h-[900px] text-center xl:text-left bg-[#10132e] p-6 rounded-xl'>
                                <h1 className='lg:text-4xl  text-2xl font-bold pb-5'>{about.title}</h1>
                                <p className='max-w-[1000px] xl:text-lg text-sm text-white/60 mx-auto pb-10 xl:mx=0'>{about.des}</p>
                                <ul className='grid grid-cols-1 xl:grid-cols-1 pr-5 xl:px-20 gap-y-3 max-w-[620px] mx-0 xl:mx-0'>
                                    {about.info.map((item, index) => (
                                        <li key={index} className='flex items-start text-sm justify-start xl:justify-start gap-4'>
                                            <span className='text-purple text-sm md:text-md'>{item.fieldName}</span>
                                            <span className='text-sm pr-10 md:text-lg'>{item.FieldValue}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )},
                        { title: 'Experience', value: 'experience', content: (
                            <div className='flex flex-col gap-[30px] xl:h-[700px] h-[900px] text-center xl:text-left bg-[#10132e] p-6 rounded-xl'>
                                <h1 className='lg:text-4xl text-2xl font-bold pb-5'>{experience.title}</h1>
                                <p className='max-w-[1000px] xl:text-lg text-sm text-white/60 mx-auto pb-10 xl:mx=0'>{experience.des}</p>
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
                            <div className='flex flex-col gap-[30px] xl:h-[700px] h-[900px] text-center xl:text-left bg-[#10132e] p-6 rounded-xl'>
                                <h1 className='lg:text-4xl text-2xl font-bold pb-5'>{education.title}</h1>
                                <p className='max-w-[1000px] xl:text-lg text-sm text-white/60 mx-auto pb-10 xl:mx=0'>{education.des}</p>
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
                            <div id='skills' className='relative flex flex-col xl:h-[700px] h-[900px] text-center xl:text-left bg-[#10132e] pt-4 pb-6 rounded-xl'> {/* Adjust padding */}
                                <div className='flex flex-col'>
                                    <h1 className='lg:text-4xl text-2xl font-bold'>{skills.title}</h1>
                                </div>
                                <div className='flex flex-col py-10'>
                                    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 lg:gap-[30px] p-6'>
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

                            </div>
                        )},
                        
                        
                        
                    ]}
                />
            </div>
        </motion.div>
    );
};

export default CV;
