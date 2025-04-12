'use client';

import React from 'react'

import { useState, useRef, useEffect } from 'react';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Card, CardContent } from './ui/card';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import AnimatedContent from './ui/animatedcontent';

function Techstacks() {
    const [activeTab, setActiveTab] = useState('All');
    const tabsRef = useRef<(HTMLDivElement | HTMLButtonElement | null)[]>([]);
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        // ensure array length matches tab count
        tabsRef.current = tabsRef.current.slice(0, 3);
    }, []);

    const getHighlightStyle = () => {
        const index = ['All', 'frontend', 'backend', 'other'].indexOf(activeTab);
        const el = tabsRef.current[index];
        if (!el) return {};
        return {
            width: el.offsetWidth,
            left: el.offsetLeft,
        };
    };

    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,

            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 30, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 20,
                bounce: 0.3,
            },
        },
    };


    const ball = {
        width: 100,
        height: 100,
        backgroundColor: "#dd00ee",
        borderRadius: "50%",
    }

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
            <div>
                <h5 className="mb-3 text-xs font-medium uppercase tracking-wider text-black-400 dark:text-black-400">
                    Skills
                </h5>
                <div className='w-full flex justify-center'>

                    <Tabs defaultValue="All" value={activeTab} onValueChange={setActiveTab} className="w-full mx-auto items-center justify-center">



                        <TabsList className="relative flex justify-center   p-1 rounded-xl">
                            {/* Animated background */}

                            {mounted && (
                                <div
                                    className={`absolute inset-0 rounded-md  text-gray-700
                                    ${resolvedTheme === "dark"
                                            ? "bg-black"
                                            : "bg-white"
                                        }
                                     bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-blue-500 dark:to-cyan-500  transition-all duration-300 z-0`}
                                    style={getHighlightStyle()}
                                />
                            )}

                            {['All', 'frontend', 'backend', 'other'].map((tab, i) => (
                                <TabsTrigger
                                    key={tab}
                                    value={tab}
                                    ref={el => {
                                        tabsRef.current[i] = el;
                                    }}
                                    className={`relative z-10 px-4 py-2 font-medium rounded-lg transition-colors ${activeTab === tab
                                        ? 'text-white dark:text-white'
                                        : 'text-zinc-500 dark:text-zinc-400'
                                        }`}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </TabsTrigger>
                            ))}
                        </TabsList>


                        <TabsContent value="All" className="mt-2">
                            <motion.div
                                className='grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-6 justify-center mx-auto'
                                variants={container}
                                initial="hidden"
                                animate="visible"
                            >
                                {[
                                    { name: 'React', svg: 'https://www.svgrepo.com/show/452092/react.svg' },
                                    { name: 'TailwindCSS', svg: 'https://www.svgrepo.com/show/374118/tailwind.svg' },
                                    { name: 'Zod', svg: 'https://raw.githubusercontent.com/colinhacks/zod/master/logo.svg' },
                                    { name: 'Shadcn', svg: 'https://avatars.githubusercontent.com/u/139895814?s=200&v=4' },
                                    { name: 'TypeScript', svg: 'https://www.svgrepo.com/show/349540/typescript.svg' },
                                    { name: 'JavaScript', svg: 'https://www.svgrepo.com/show/349419/javascript.svg' },
                                    { name: 'Node.js', svg: 'https://www.svgrepo.com/show/355140/node.svg' },
                                    { name: 'Laravel', svg: 'https://www.svgrepo.com/show/353985/laravel.svg' },
                                    { name: 'PHP', svg: 'https://www.svgrepo.com/show/508931/php01.svg' },
                                    { name: 'MySQL', svg: 'https://www.svgrepo.com/show/89893/database.svg' },
                                    { name: "SQLite", svg: "https://www.svgrepo.com/show/374094/sqlite.svg" },
                                    { name: 'Firebase', svg: 'https://www.svgrepo.com/show/373595/firebase.svg' },
                                    { name: 'Git', svg: 'https://www.svgrepo.com/show/535422/git-merge.svg' },
                                    { name: 'GitHub', svg: 'https://www.svgrepo.com/show/512317/github-142.svg' },
                                    { name: 'Java', svg: 'https://www.svgrepo.com/show/452234/java.svg' },
                                    { name: 'C#', svg: 'https://www.svgrepo.com/show/452184/csharp.svg' },
                                    { name: 'Python', svg: 'https://www.svgrepo.com/show/452091/python.svg' },
                                    { name: 'Colab', svg: 'https://www.svgrepo.com/show/349325/colaboratory.svg' },
                                    { name: 'Tensorflow', svg: 'https://www.svgrepo.com/show/354440/tensorflow.svg' },
                                    { name: 'Android', svg: '/icons/android-white.png' },
                                    { name: 'VS Code', svg: 'https://www.svgrepo.com/show/452129/vs-code.svg' },
                                ].map(({ name, svg }) => (
                                    <motion.div key={name} variants={item}

                                    >
                                        <Card className='h-full rounded-lg'>
                                            <div className='group flex aspect-square flex-col items-center justify-center p-3 cursor-pointer hover:scale-105 transition-transform'>
                                                {mounted ? (
                                                    <img src={
                                                        (resolvedTheme === "dark" && (name === "MySQL" || name === "PHP" || name === "Android" || name === "Git" || name === "GitHub"))
                                                            ? `/icons/${name.toLowerCase()}-white.png`
                                                            : svg
                                                    } alt={name} className="w-6 h-6" />
                                                ) : null}


                                                <p className='text-xs font-medium mt-2 p-2'>{name}</p>
                                            </div>
                                        </Card>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </TabsContent>
                        <TabsContent value="frontend" className="mt-2">
                            <motion.div
                                className='grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-6'
                                variants={container}
                                initial="hidden"
                                animate="visible"
                            >
                                {[
                                    { name: 'React', svg: 'https://www.svgrepo.com/show/452092/react.svg' },
                                    { name: 'TailwindCSS', svg: 'https://www.svgrepo.com/show/374118/tailwind.svg' },
                                    { name: 'Zod', svg: 'https://raw.githubusercontent.com/colinhacks/zod/master/logo.svg' },
                                    { name: 'Shadcn', svg: 'https://avatars.githubusercontent.com/u/139895814?s=200&v=4' },
                                    { name: 'TypeScript', svg: 'https://www.svgrepo.com/show/349540/typescript.svg' },
                                    { name: 'JavaScript', svg: 'https://www.svgrepo.com/show/349419/javascript.svg' },
                                ].map(({ name, svg }) => (
                                    <motion.div key={name} variants={item}

                                    >
                                        <Card className='h-full rounded-lg'>
                                            <div className='group flex aspect-square flex-col items-center justify-center p-3 cursor-pointer hover:scale-105 transition-transform'>
                                                <img src={svg} alt={name} className="w-6 h-6" />
                                                <p className='text-xs font-medium mt-2 p-2'>{name}</p>
                                            </div>
                                        </Card>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </TabsContent>

                        <TabsContent value="backend" className="mt-2 animate-bounceIn">
                            <motion.div
                                className='grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-6'
                                variants={container}
                                initial="hidden"
                                animate="visible"
                            >
                                {[
                                    { name: 'Node.js', svg: 'https://www.svgrepo.com/show/355140/node.svg' },
                                    { name: 'Laravel', svg: 'https://www.svgrepo.com/show/353985/laravel.svg' },
                                    { name: 'PHP', svg: 'https://www.svgrepo.com/show/508931/php01.svg' },
                                    { name: 'MySQL', svg: 'https://www.svgrepo.com/show/303251/mysql-logo.svg' },
                                    { name: "SQLite", svg: "https://www.svgrepo.com/show/374094/sqlite.svg" },
                                    { name: 'Firebase', svg: 'https://www.svgrepo.com/show/373595/firebase.svg' },
                                ].map(({ name, svg }) => (
                                    <motion.div key={name} variants={item}

                                    >
                                        <Card key={name} className='rounded-md animate-bounceIn'>



                                            <div className='group flex aspect-square flex-col items-center justify-center p-3 cursor-pointer hover:scale-105 transition-transform'>
                                                <img src={
                                                    (resolvedTheme === "dark" && (name === "PHP"))
                                                        ? `/icons/${name.toLowerCase()}-white.png`
                                                        : svg
                                                } alt={name} className="w-6 h-6" />
                                                <p className='text-xs font-medium mt-2'>{name}</p>
                                            </div>
                                        </Card>
                                    </motion.div>

                                ))}

                            </motion.div>
                        </TabsContent>

                        <TabsContent value="other" className="mt-2 animate-bounceIn">
                            <motion.div
                                variants={container}
                                initial="hidden"
                                animate="visible"
                                className='grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-6'>

                                {[
                                    { name: 'Git', svg: 'https://www.svgrepo.com/show/535422/git-merge.svg' },
                                    { name: 'GitHub', svg: 'https://www.svgrepo.com/show/512317/github-142.svg' },
                                    { name: 'Java', svg: 'https://www.svgrepo.com/show/452234/java.svg' },
                                    { name: 'C#', svg: 'https://www.svgrepo.com/show/452184/csharp.svg' },
                                    { name: 'Python', svg: 'https://www.svgrepo.com/show/452091/python.svg' },
                                    { name: 'Colab', svg: 'https://www.svgrepo.com/show/349325/colaboratory.svg' },
                                    { name: 'Tensorflow', svg: 'https://www.svgrepo.com/show/354440/tensorflow.svg' },
                                    { name: 'Android', svg: '/icons/android-white.png' },
                                    { name: 'VS Code', svg: 'https://www.svgrepo.com/show/452129/vs-code.svg' },
                                ].map(({ name, svg }) => (
                                    <motion.div key={name} variants={item}>

                                        <Card key={name} className='rounded-md animate-bounceIn'>
                                            <div className='group flex aspect-square flex-col items-center justify-center p-3 cursor-pointer hover:scale-105 transition-transform'>
                                                <img src={
                                                    (resolvedTheme === "dark" && (name === "Android" || name === "Git" || name === "GitHub"))
                                                        ? `/icons/${name.toLowerCase()}-white.png`
                                                        : svg
                                                } alt={name} className="w-6 h-6" />
                                                <p className='text-xs font-medium mt-2'>{name}</p>
                                            </div>
                                        </Card>
                                    </motion.div>
                                ))}

                            </motion.div>
                        </TabsContent>

                    </Tabs>


                </div>
            </div >
        </AnimatedContent>
    )
}

export default Techstacks