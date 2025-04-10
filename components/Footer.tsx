
import React from 'react'
import { Separator } from './ui/separator'

function Footer() {
    return (

        <div className='mt-20 '>
            <Separator />
            <div className='flex justify-between items-center p-4'>

                <p className='text-sm font-light text-muted-foreground'>© 2025 Miel Corpuz</p>
                <div className="flex gap-3 mt-3 sm:mt-0">
                    <a aria-label="Github"
                        href="https://github.com/jomielcorpuz"
                        target="_blank"
                        className="rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                            </path>
                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                    </a>
                    <a aria-label="Linked"
                        href="https://www.linkedin.com/in/jomiel-banogbanog/" target="_blank" className="rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-linkedin">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2">
                            </circle>
                        </svg>
                    </a>
                    <a href="https://www.facebook.com/jomielxd"
                        aria-label="Facebook" target="_blank"
                        className="rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-facebook">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z">
                            </path>
                        </svg>
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
        </div>
    )
}

export default Footer