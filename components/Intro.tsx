"use client"
import { Github, Linkedin } from 'lucide-react'
import React from 'react'
import AnimatedContent from './ui/animatedcontent'
import Image from 'next/image'

function Intro() {
    return (

        <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={true}
            initialOpacity={0}
            animateOpacity
            scale={1.0}
            threshold={0.1}
        >

            <div className='mb-8 flex items-center gap-6 animate-fade-down'>
                <div className='relative mb-5'>

                    <div className='relative w-24 h-24 rounded-full overflow-hidden cursor-pointer'>
                        <Image
                            src="/images/miel.jpg"
                            width={800}
                            height={450}
                            alt="Profile"
                            className="absolute inset-0 h-full w-full text-transparent"
                        />

                    </div>
                </div>

                <div className='text-justify'>

                    <h2 className="text-md md:text-2xl font-bold bg-gradient-to-br from-black from-30% to-black/50 dark:from-white dark:from-30% dark:to-white/50 bg-clip-text text-transparent">
                        Hello, I&apos;m Miel</h2>
                    <p className="font-light text-black-400 dark:text-zinc-300 text-xs md:text-sm">
                        A Full-Stack Developer with a specialization in backend development, leveraging expertise in Laravel, React, TypeScript, Node.js, and Android development. My work focuses on creating high-performance websites, dynamic web applications, and intuitive mobile solutions. Committed to continuous learning and innovative problem-solving, I stay updated with industry trends to deliver scalable and cutting-edge applications that exceed client expectations.</p>

                    <div className='flex pt-5 gap-2'>
                        <a
                            href="https://github.com/jomielcorpuz"
                            target="_blank"
                            className='rounded-full border flex justify-center bg-gray-100 dark:bg-transparent p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer'>
                            <Github className='text-black dark:text-white' size={15} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jomiel-banogbanog/"
                            target="_blank"
                            className='rounded-full border flex justify-center bg-gray-100 dark:bg-transparent p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer'>
                            <Linkedin className='text-black dark:text-white' size={15} />
                        </a>
                        <a href="mailto:jomielcorpuz@gmail.com" aria-label="Email" target="_blank"
                            className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
                                className="lucide lucide-mail">
                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </svg>
                            <span className="text-xs sm:text-sm">Send Email</span>
                        </a>
                    </div>


                </div>


            </div >
        </AnimatedContent>
    )
}

export default Intro