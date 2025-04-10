"use client";

import React from 'react'
import { Button } from './ui/button'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import ThemeToggle from './ui/theme-toggle';
import { motion } from 'framer-motion';
function Head() {

    const { resolvedTheme, setTheme } = useTheme();
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.1 }}>
            <div className="mx-auto max-w-2xl">

                <div className='mx-auto  flex items-center justify-between text-sm  '>

                    <h1 className="text-2xl font-bold">{"</>"}</h1>
                    <ThemeToggle />
                </div>

            </div>
        </motion.div >

    )
}

export default Head