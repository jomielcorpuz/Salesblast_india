// /pages/projects.tsx

import React from 'react';

const Projects = () => {
    return (
        <div className="max-w-2xl mx-auto px-4 py-2">
            <nav className="flex items-center justify-between mb-4 backdrop-blur-sm bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Projects</h1>
                <a href="/" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">
                    Back to Home
                </a>
            </nav>
            <h2 className="text-2xl font-semibold text-zinc-700 dark:text-zinc-200 mb-4">
                My Projects
            </h2>

            {/* Add your projects here */}
            <div className="space-y-6">
                {/* Example project */}
                <div className="p-4 border border-zinc-200 rounded-lg shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
                    <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                        Project 1 - Portfolio Website
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                        A personal portfolio website built using React, TailwindCSS, and Next.js to showcase my projects, skills, and resume.
                    </p>
                    <a href="#" className="text-sm text-emerald-500 dark:text-emerald-400 mt-2 inline-block">
                        View Project
                    </a>
                </div>
                {/* Add more projects here */}
            </div>
        </div>
    );
};

export default Projects;
