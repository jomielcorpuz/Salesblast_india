"use client"
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
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
import { ScrollArea } from './ui/scroll-area'
import { useTheme } from 'next-themes'
import Image from 'next/image'

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

function RecentProj() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);


    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <AnimatedContent
            distance={100}
            direction="horizontal"
            reverse={true}
            initialOpacity={0}
            animateOpacity
            scale={1.0}
            threshold={0.1}
            className=''
        >
            <div className='mb-8'>
                <h5 className="mb-3 text-xs font-medium uppercase tracking-wider text-black-400 dark:text-black-400">
                    Recent Projects
                </h5>
                <div className=' p-4 rounded-md'>

                    <div >
                        <a href='/projects' className=''>
                            <span className='flex gap-2 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-git2"><path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"></path><circle cx="13" cy="12" r="2"></circle><path d="M18 19c-2.8 0-5-2.2-5-5v8"></path><circle cx="20" cy="19" r="2"></circle></svg>
                                <div className='flex justify-between mx-auto items-center w-full'>
                                    <div>

                                        <h3 className='text-sm md:text-md font-bold text-black dark:text-zinc-300'>Projects</h3>

                                    </div>
                                    <div className=' text-xs cursor-pointer flex items-center hover:text-gray-300'>
                                        <span className='transition-all active:scale-95'>View All</span>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"></path></svg>
                                    </div>
                                </div>
                            </span>
                        </a>

                    </div>

                    <div className="mt-4">
                        <Carousel className="w-full max-w-6xl sm:max-w-2xl md:max-w-2xl mx-auto">
                            <CarouselContent>
                                {projects.map((project, index) => (
                                    <CarouselItem
                                        key={index}
                                        className="md:basis-2/2 lg:basis-1/2 sm:basis-full"
                                    >
                                        <div className="p-2 h-full"> {/* Full height wrapper */}
                                            <Card className="rounded-xl h-full flex flex-col"> {/* Full height + flex */}

                                                {/* IMAGE */}
                                                <CardHeader className="p-0">
                                                    <Dialog>
                                                        <DialogTrigger asChild>
                                                            <div className="relative aspect-video overflow-hidden rounded-t-xl">
                                                                <Image
                                                                    src={project.image}
                                                                    alt={project.title}
                                                                    width={2400}
                                                                    height={1080}
                                                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
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

                                                {/* CONTENT */}
                                                <CardContent className="p-4 space-y-3 flex flex-col flex-1 justify-between">
                                                    <div className="text-start flex-1 flex flex-col">
                                                        <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-1 min-h-[2.5rem]">
                                                            {project.title}
                                                        </h3>
                                                        <ScrollArea className="h-12">
                                                            <p className="text-xs text-muted-foreground">
                                                                {project.description}
                                                            </p>
                                                        </ScrollArea>
                                                    </div>

                                                    <div className="pt-2">
                                                        <div className="flex gap-2 flex-nowrap justify-start">
                                                            {project.techStack.map(({ icon, name }) => (
                                                                <div className='flex' key={name}>
                                                                    {mounted ? (
                                                                        <Image src={
                                                                            (resolvedTheme === "dark" && (name === "MySQL" || name === "PHP" || name === "Android" || name === "Git" || name === "GitHub"))
                                                                                ? `/icons/${name.toLowerCase()}-white.png`
                                                                                : icon
                                                                        } alt={name}
                                                                            width={16}
                                                                            height={16}
                                                                            className="w-4 h-4" />
                                                                    ) : null}

                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
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