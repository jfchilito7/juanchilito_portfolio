"use client";

import { motion } from "framer-motion";
import React, {useState} from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtn from "@/components/WorkSliderBtn";

const projects = [
    {
        num: "01",
        category: 'Front-end',
        title: 'Popcorn-Movies',
        description: 'Popcorn Movies es una aplicación web que permite a los usuarios descubrir películas populares de manera visual e intuitiva. La interfaz minimalista muestra una galería de pósteres de películas, proporcionando una navegación fluida. El proyecto incluye una integración con una API de películas, que actualiza automáticamente la lista de películas mostradas, asegurando información precisa y actualizada. Este proyecto fue desarrollado utilizando HTML, CSS, JavaScript, y demuestra mi capacidad para trabajar con APIs y crear aplicaciones web dinámicas.',
        stack: [
            {name: "HTML5"}, {name: "CSS3"}, {name: "JavaScript"}, {name: "Figma"}, {name: "GitHub"}],
            image: '/assets/work/project1.png',
            live: 'https://jfchilito7.github.io/Popcorn-Movies',
            github: 'https://github.com/jfchilito7/Popcorn-Movies',
    },
    {
        num: "02",
        category: 'frontend',
        title: 'Project 2',
        description: 'This is a project',
        stack: [
            {name: "HTML5"}, {name: "CSS3"}, {name: "JavaScript"}, {name: "Figma"}, {name: "GitHub"}],
            image: '/assets/work/thumb1.png',
            live: 'https://www.google.com',
            github: 'https://www.github.com',
    },
    {
        num: "03",
        category: 'frontend',
        title: 'Project 3',
        description: 'This is a project',
        stack: [
            {name: "HTML5"}, {name: "CSS3"}, {name: "JavaScript"}, {name: "Figma"}, {name: "GitHub"}],
            image: '/assets/work/thumb1.png',
            live: 'https://www.google.com',
            github: 'https://www.github.com',
    },
];


const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        //get current slide index
        const currentSlide = swiper.activeIndex;
        // update project state based on current slide index
        setProject(projects[currentSlide]);
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay:2.4, duration: 0.4, ease: "easeIn"} }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[10px] h-[50%]">
                            {/* Outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                            {/* Project title */}
                        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.title}</h2>
                        <h2 className="text-[20px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category}</h2>
                        {/* Project description */}
                        <p className="text-white/60">{project.description}</p>
                        {/* Stack */}
                        <ul className="flex gap-4">
                            {project.stack.map((item, index) => {
                                return <li key={index} className="text-xl text-accent">
                                    {item.name}
                                    {/* Add comma if not last item */}
                                    {item !== project.stack.length - 1 && ","}
                                    </li>
                            })}
                        </ul>
                        {/* Border */}
                        <div className="border border-white/20"></div>
                        {/* Buttons */}
                        <div className="flex items-center gap-4">
                            {/* Live project button */}
                            <Link href={project.live} target="_blank" rel="noopener noreferrer">
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Live project</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                            {/* github project button */}
                            <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Github repository</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                        </div>
                        </div>
                        
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
                            {projects.map((project, index) => {
                                return (
                                <SwiperSlide key={index} className="w-full">
                                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                        {/* Overlay */}
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                        {/* Image */}
                                        <div className="relative w-full h-full">
                                            <Image src={project.image} fill className="object-cover" alt="imagen proyecto"/>
                                        </div>  
                                    </div>
                                </SwiperSlide>
                                );
                            })}
                            {/* Swiper navigation */}
                            <WorkSliderBtn  containerStyles= "flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:jsutify-none" btnStyles="bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    ) 
    
    
}

export default Work