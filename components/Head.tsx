"use client";

import React from 'react'
import { Button } from './ui/button'
import { useTheme } from 'next-themes'
import { ArrowLeft, Moon, Sun } from 'lucide-react'
import ThemeToggle from './ui/theme-toggle';
import { motion } from 'framer-motion';
import Link from 'next/link';

function Head() {

    const { resolvedTheme, setTheme } = useTheme();
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.1 }}>
            <div className="mx-auto max-w-2xl">

                <header className='bg-background/30 shadow-xs fixed inset-x-0 top-4 z-40 mx-auto flex h-[60px] max-w-2xl items-center justify-between rounded-2xl px-8 saturate-100 backdrop-blur-[10px] transition-colors'>
                    <Link
                        href="/"
                        className="flex justify-center items-center text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
                    >
                        {"</>"}
                    </Link>
                    <div className='flex items-center gap-2'>


                        <ThemeToggle />
                    </div>
                </header>
            </div>
        </motion.div >

    )
}

export default Head