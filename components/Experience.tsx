'use client';

import { ChevronLeft } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import GitHubContributions from './GithubContribution';
import AnimatedContent from './ui/animatedcontent';

function Experience() {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
    return (
        <AnimatedContent
            distance={100}
            direction="horizontal"
            reverse={true}
            config={{ tension: 50, friction: 25 }}
            initialOpacity={0}
            animateOpacity
            scale={1.0}
            threshold={0.1}
        >

            <div className='mb-8 animate-fade-down animate-duration-300'>

                <h3 className='text-xs mb-3 font-light uppercase tracking-wider text-black-400 dark:text-black-400'>Currently</h3>
                <div className='mb-4'>

                    <div className='flex justify-between items-center mb-1'>
                        <div>

                            <h4 className='text-md md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-700 bg-clip-text text-transparent'>

                                Freelance Developer
                            </h4>
                            <p className='text-xs font-light uppercase tracking-wider text-black-400 dark:text-black-400'>January 2025 - Present</p>
                        </div>

                    </div>
                    <p className='text-sm font-light-100 text-zinc-500 dark:text-zinc-400'>
                        I specialize in creating scalable and efficient web applications with Laravel, Nextjs, React, Vite, and modern frameworks. I prioritize accessibility, good security practices, and innovative digital solutions, creating seamless user experiences across both web and mobile platforms.
                    </p>

                </div>

                <div>
                    {/* Toggle Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className='flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-300 dark:hover:text-zinc-300 transition-colors mb-4'
                    >
                        <motion.div
                            animate={{ rotate: isOpen ? 0 : -90 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ChevronLeft size={16} className='h-4 w-4' />
                        </motion.div>
                        Previous Role
                    </button>

                    {/* Content Animation */}
                    <AnimatePresence initial={false}>
                        {isOpen && (
                            <motion.div
                                layout
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{
                                    duration: 0.3,        // for opening
                                    ease: 'easeInOut'
                                }}
                            >
                                <div className="pl-6 space-y-4 mt-4">

                                    {/* Role 1 */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <div className="flex justify-between items-start mb-1">
                                            <div>
                                                <h4 className="text-md font-bold bg-gradient-to-br from-black from-30% to-black/50 dark:from-white dark:from-30% dark:to-white/50 bg-clip-text text-transparent">
                                                    IT Support Specialist -
                                                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300 ml-2">
                                                        Internship
                                                    </span>
                                                </h4>

                                                <p className="text-xs font-light uppercase tracking-wider text-black-400 dark:text-black-400">
                                                    APRIL 2023 - JUNE 2023
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-xs font-light text-black-400 dark:text-black-400">
                                                    DICNHS
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-xs font-light mb-2 text-zinc-600 dark:text-zinc-400 text-justify">
                                            As a Recruitment Officer at Pru Life UK, I am responsible for conducting interviews...
                                        </p>
                                    </motion.div>



                                    {/* Role 3 */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <div className="flex justify-between items-start mb-1">
                                            <div>
                                                <h4 className="text-md font-bold bg-gradient-to-br from-black from-30% to-black/50 dark:from-white dark:from-30% dark:to-white/50 bg-clip-text text-transparent">
                                                    Comp. Lab. Attendant -
                                                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300 ml-2">
                                                        Internship
                                                    </span>
                                                </h4>
                                                <p className="text-xs font-light uppercase tracking-wider text-black-400 dark:text-black-400">
                                                    JANUARY 2023 - MARCH 2023
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-xs font-light text-black-400 dark:text-black-400">
                                                    Davao del Sur State College
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-xs font-light mb-2 text-zinc-600 dark:text-zinc-400 text-justify">
                                            As a Computer Laboratory Assistant, I was responsible for troubleshooting...
                                        </p>
                                    </motion.div>

                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>



            </div>
        </AnimatedContent>
    )
}

export default Experience