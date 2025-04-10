"use client"
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { ChevronRight, Eye, FolderGit2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog";


import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import AnimatedContent from './ui/animatedcontent'

const projects = [
    {
        title: "Water Quality Data Monitoring System",
        description: "A brief overview of project one.",
        image: "/projects/project1.png",
        techStack: [
            { name: "React", icon: "https://www.svgrepo.com/show/452092/react.svg" },
            { name: "Laravel", icon: "https://www.svgrepo.com/show/353985/laravel.svg" },
            { name: "JavaScript", icon: "https://www.svgrepo.com/show/349540/typescript.svg" },
            { name: "Nodejs", icon: "https://www.svgrepo.com/show/355140/node.svg" },
            { name: "TailwindCss", icon: "https://www.svgrepo.com/show/374118/tailwind.svg" },
            { name: "MySQL", icon: "/icons/mysql-white.png" },
            { name: "ShadCN", icon: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4" }
        ],
        link: "https://github.com/jomielcorpuz/WQDM-Water-Sys.git"
    },
    {
        title: "Project 2",
        description: "A brief overview of project one.",
        image: "/images/projects/1.png",
        techStack: [
            { name: "React", icon: "https://www.svgrepo.com/show/452092/react.svg" },
            { name: "Laravel", icon: "https://www.svgrepo.com/show/353985/laravel.svg" },
            { name: "TypeScript", icon: "https://www.svgrepo.com/show/349540/typescript.svg" },
            { name: "Node", icon: "https://www.svgrepo.com/show/355140/node.svg" },
            { name: "Tailwind", icon: "https://www.svgrepo.com/show/374118/tailwind.svg" },
            { name: "MySQL", icon: "/icons/mysql-white.png" }
        ],
        link: "/projects/1"
    },
    {
        title: "Project 3",
        description: "A brief overview of project one.",
        image: "/images/projects/1.png",
        techStack: [
            { name: "React", icon: "https://www.svgrepo.com/show/452092/react.svg" },
            { name: "Laravel", icon: "https://www.svgrepo.com/show/353985/laravel.svg" },
            { name: "TypeScript", icon: "https://www.svgrepo.com/show/349540/typescript.svg" },
            { name: "Node", icon: "https://www.svgrepo.com/show/355140/node.svg" },
            { name: "Tailwind", icon: "https://www.svgrepo.com/show/374118/tailwind.svg" },
            { name: "MySQL", icon: "/icons/mysql-white.png" }
        ],
        link: "/projects/1"
    },
    {
        title: "Project 4",
        description: "A brief overview of project one.",
        image: "/images/projects/1.png",
        techStack: [
            { name: "React", icon: "https://www.svgrepo.com/show/452092/react.svg" },
            { name: "Laravel", icon: "https://www.svgrepo.com/show/353985/laravel.svg" },
            { name: "TypeScript", icon: "https://www.svgrepo.com/show/349540/typescript.svg" },
            { name: "Node", icon: "https://www.svgrepo.com/show/355140/node.svg" },
            { name: "Tailwind", icon: "https://www.svgrepo.com/show/374118/tailwind.svg" },
            { name: "MySQL", icon: "/icons/mysql-white.png" }
        ],
        link: "/projects/1"
    },
    // Add more projects here...
];

function RecentProj() {
    return (
        <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={false}
            config={{ tension: 50, friction: 25 }}
            initialOpacity={0}
            animateOpacity
            scale={1.0}
            threshold={0.1}
        >
            <div className='mb-8'>
                <h5 className="mb-3 text-xs font-medium uppercase tracking-wider text-black-400 dark:text-black-400">
                    Recent Projects
                </h5>
                <div className='border p-4 rounded-md'>

                    <div >
                        <a href='/projects' className=''>
                            <span className='flex gap-2 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-git2"><path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"></path><circle cx="13" cy="12" r="2"></circle><path d="M18 19c-2.8 0-5-2.2-5-5v8"></path><circle cx="20" cy="19" r="2"></circle></svg>
                                <div className='flex justify-between mx-auto items-center w-full'>
                                    <div>

                                        <h3 className='text-sm md:text-md font-bold text-black dark:text-zinc-300'>Projects</h3>

                                    </div>
                                    <div className=' text-xs cursor-pointer flex items-center hover:text-gray-300'>
                                        View All
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"></path></svg>
                                    </div>
                                </div>
                            </span>
                        </a>

                    </div>

                    <div>
                        <Carousel className="w-full max-w-6xl mx-auto">
                            <CarouselContent>
                                {projects.map((project, index) => (
                                    <CarouselItem
                                        key={index}
                                        className="md:basis-1/2 lg:basis-1/3"
                                    >
                                        <div className="p-1">
                                            <Card>
                                                <CardContent className="flex flex-col space-y-4 aspect-square items-center justify-center p-4">

                                                    <Dialog>
                                                        <DialogTrigger asChild>
                                                            <img
                                                                src={project.image}
                                                                alt={project.title}
                                                                className="aspect-[4/3] w-full object-cover rounded-md transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                                                            />
                                                        </DialogTrigger>
                                                        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none">
                                                            <VisuallyHidden>
                                                                <DialogTitle>{project.title}</DialogTitle>
                                                            </VisuallyHidden>
                                                            <img
                                                                src={project.image}
                                                                alt={project.title}
                                                                className="w-full h-auto rounded-md object-contain"
                                                            />
                                                        </DialogContent>
                                                    </Dialog>



                                                    <div className="text-start">
                                                        <h3 className="text-sm font-bold text-black dark:text-zinc-300">
                                                            {project.title}
                                                        </h3>
                                                        <p className="text-xs font-light text-gray-500 dark:text-zinc-400">
                                                            {project.description}
                                                        </p>
                                                    </div>
                                                    <div className="flex gap-2 flex-wrap justify-start">
                                                        {project.techStack.map(({ icon, name }) => (
                                                            <img key={name} src={icon} alt={name} className="w-4 h-4" />
                                                        ))}
                                                    </div>
                                                    <a
                                                        href={project.link}
                                                        className="text-xs cursor-pointer flex items-center gap-1 text-gray-600 hover:bg-gray-50"
                                                    >
                                                        <Eye size={18} /> View Project
                                                    </a>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>

                    </div>
                </div>


            </div>
        </AnimatedContent>
    )
}

export default RecentProj