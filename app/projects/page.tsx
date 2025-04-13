// /pages/projects.tsx
"use client";
import React, { useEffect, useState } from 'react';
import ThemeToggle from '@/components/ui/theme-toggle';
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import { ScrollArea } from '@/components/ui/scroll-area'
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Github, Loader2 } from 'lucide-react';

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog";
import AnimatedContent from '@/components/ui/animatedcontent';
import { useRouter } from 'next/navigation';

const projects = [
    {
        title: "Water Quality Data Monitoring System",
        description: "This system is designed to monitor and manage water site quality effectively. Utilizing technologies such as Laravel, React, Google Maps, the application enables public users to locate potable water sites and check water quality in their areas. Through integration with Google Maps, users can visually explore spatial data related to water site quality.",
        image: "/projects/project1-landingpage.png",
        techStack: [
            { name: "React", icon: "https://www.svgrepo.com/show/452092/react.svg" },
            { name: "Laravel", icon: "https://www.svgrepo.com/show/353985/laravel.svg" },
            { name: "JavaScript", icon: "https://www.svgrepo.com/show/349419/javascript.svg" },
            { name: "Nodejs", icon: "https://www.svgrepo.com/show/355140/node.svg" },
            { name: "TailwindCss", icon: "https://www.svgrepo.com/show/374118/tailwind.svg" },
            { name: "MySQL", icon: "https://www.svgrepo.com/show/89893/database.svg" },
            { name: "ShadCN", icon: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4" }
        ],
        link: "https://github.com/jomielcorpuz/WQDM-Water-Sys.git"
    },
    {
        title: "Passenger Location Monitoring",
        description: "This Android application ensures the safety of student passengers by tracking their location in real-time using Google Maps API. After scanning the QR code assigned to registered tricycle drivers, the app notifies parents via SMS, providing updates on their child's travel status. Parents can also monitor their child's location live through the application.",
        image: "/projects/passenger.png",
        techStack: [
            { name: 'Android', icon: '/icons/android-white.png' },
            { name: "Java", icon: "https://www.svgrepo.com/show/452234/java.svg" },
            { name: "SQLite", icon: "https://www.svgrepo.com/show/374094/sqlite.svg" },
            { name: 'Firebase', icon: 'https://www.svgrepo.com/show/373595/firebase.svg' },
            { name: 'Tensorflow', icon: 'https://www.svgrepo.com/show/354440/tensorflow.svg' },
            { name: 'Google Maps Api', icon: 'https://www.svgrepo.com/show/375444/google-maps-platform.svg' },
        ],
        link: "https://github.com/jomielcorpuz/Passenger-Location-Monitoring-Android.git"
    },
    {
        title: "Rice Insect Pest Classification",
        description: "This Android application empowers farmers to identify and manage spring onion diseases effectively. By utilizing a Convolutional Neural Network (CNN) for disease classification, the app ensures accurate diagnostics and recommendations. Built with a hybrid database system integrating SQLite for offline functionality and Firebase for online syncing, the app seamlessly stores historical data and keeps records synchronized for optimal usability.",
        image: "/projects/riceinsect.png",
        techStack: [
            { name: 'Android', icon: '/icons/android-white.png' },
            { name: "Java", icon: "https://www.svgrepo.com/show/452234/java.svg" },
            { name: "SQLite", icon: "https://www.svgrepo.com/show/374094/sqlite.svg" },
            { name: 'Firebase', icon: 'https://www.svgrepo.com/show/373595/firebase.svg' },
            { name: 'Tensorflow', icon: 'https://www.svgrepo.com/show/354440/tensorflow.svg' },
            { name: 'Google Maps Api', icon: 'https://www.svgrepo.com/show/375444/google-maps-platform.svg' },
        ],
        link: "https://github.com/jomielcorpuz/Rice-Insect-Pest-Classification-with-Data-Analytics-v1-Android.git"
    },
    {
        title: "e'Maize",
        description: "e'Maize is an Android-based mobile application designed to assist farmers in effectively managing corn crops. The app leverages a Convolutional Neural Network (CNN) machine learning algorithm to identify corn diseases and provide tailored treatment recommendations. It also includes a fertilizer calculator that uses soil test results to determine precise fertilizer requirements, optimizing crop health and yield.",
        image: "/projects/corn.png",
        techStack: [
            { name: 'Android', icon: '/icons/android-white.png' },
            { name: "Java", icon: "https://www.svgrepo.com/show/452234/java.svg" },
            { name: "SQLite", icon: "https://www.svgrepo.com/show/374094/sqlite.svg" },
            { name: 'Firebase', icon: 'https://www.svgrepo.com/show/373595/firebase.svg' },
            { name: 'Tensorflow', icon: 'https://www.svgrepo.com/show/354440/tensorflow.svg' },

        ],
        link: "https://github.com/jomielcorpuz/e-Maize.git"
    },
    {
        title: "Spring Onion Disease Classification",
        description: "This application leverages cutting-edge technology to help farmers monitor and manage rice insect pests efficiently. Using Convolutional Neural Network (CNN) algorithms, the app accurately classifies pests and tracks their locations within farms. It stores spatial data for each farm, enabling users to view pest markers on maps and access analytics like bar graphs detailing the number and types of pests detected per field. This powerful combination of pest classification and geolocation helps farmers optimize pest management strategies and improve crop health.",
        image: "/projects/onion.png",
        techStack: [
            { name: 'Android', icon: '/icons/android-white.png' },
            { name: "Java", icon: "https://www.svgrepo.com/show/452234/java.svg" },
            { name: "SQLite", icon: "https://www.svgrepo.com/show/374094/sqlite.svg" },
            { name: 'Firebase', icon: 'https://www.svgrepo.com/show/373595/firebase.svg' },
            { name: 'Tensorflow', icon: 'https://www.svgrepo.com/show/354440/tensorflow.svg' },
        ],
        link: "https://github.com/jomielcorpuz/Onion-Disease-Classification---Android.git"
    },
    // Add more projects here...
];

const Projects = () => {
    const router = useRouter();
    const [isClicked, setIsClicked] = useState(false);
    // Prefetch the homepage route on component mount
    useEffect(() => {
        router.prefetch("/");
    }, [router]);

    const handleClick = () => {
        setIsClicked(true);

        // Delay navigation to allow animation to complete
        setTimeout(() => {
            router.push("/");
        }, 600); // Match with animation duration
    };
    return (
        <div className="max-w-2xl mx-auto px-4 py-20">
            {/* HEADER */}
            <header className="bg-background/30 shadow-xs fixed inset-x-0 top-0 z-40 mx-auto flex h-[60px] max-w-[40rem] items-center justify-between  px-2 saturate-100 backdrop-blur-[10px] transition-colors">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, rotate: 180 }}
                    transition={{ duration: 0.6 }}
                >

                    <motion.button
                        onClick={handleClick}
                        disabled={isClicked}
                        className="flex items-center text-sm text-zinc-500 dark:text-zinc-300 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
                        whileTap={{ scale: 0.95, opacity: 0.6 }}
                    >
                        {isClicked ? (
                            <Loader2 size={18} className="animate-spin" />
                        ) : (
                            <>
                                <ArrowLeft size={16} className="mr-2" />
                                Back
                            </>
                        )}
                    </motion.button>
                </motion.div>
                <ThemeToggle />
            </header>

            <AnimatedContent
                distance={100}
                direction="horizontal"
                reverse={false}
                initialOpacity={0}
                animateOpacity
                scale={1.0}
                threshold={0.1}
            >


                <h2 className="text-2xl font-semibold text-zinc-700 dark:text-zinc-200 mb-8">
                    My Projects
                </h2>
            </AnimatedContent>
            {/* PROJECT LIST */}

            <div className="space-y-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}>

                        <Card className="rounded-xl shadow-md transition hover:shadow-lg">
                            <CardHeader className="p-0">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <div className="relative aspect-video overflow-hidden rounded-t-xl cursor-pointer">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                width={2400}
                                                height={1080}
                                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                            />
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-2xl p-0 overflow-hidden bg-transparent border-none shadow-none">
                                        <VisuallyHidden>
                                            <DialogTitle>{project.title}</DialogTitle>
                                        </VisuallyHidden>
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={2400}
                                            height={1080}
                                            className="w-full h-auto rounded-md object-contain"
                                        />
                                    </DialogContent>
                                </Dialog>
                            </CardHeader>

                            <CardContent className="p-4 space-y-4">
                                <div className="text-start">
                                    <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-200">
                                        {project.title}
                                    </h3>
                                    <ScrollArea className="h-14">
                                        <p className="text-xs text-muted-foreground">
                                            {project.description}
                                        </p>
                                    </ScrollArea>
                                </div>

                                {/* TECH STACK */}
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <div
                                            key={tech.name}
                                            className="flex items-center gap-1 px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-xs rounded-full"
                                        >

                                            <span>{tech.name}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* GITHUB LINK BUTTON */}
                                <div className="flex justify-end">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center bg-gray-50 py-2 px-3 rounded-md gap-1 text-sm font-medium text-gray-800 dark:text-black hover:bg-gray-100 transition group"
                                    >
                                        <Github size={16} />
                                        GitHub
                                        <ArrowUpRight
                                            size={16}
                                            className="transition-transform group-hover:rotate-12"
                                        />
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

        </div>
    );
};

export default Projects;
