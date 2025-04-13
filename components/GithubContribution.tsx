'use client';
import GitHubCalendar from 'react-github-calendar';
import AnimatedContent from './ui/animatedcontent';
import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function GitHubContributions() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate async "loading" behavior, e.g., fetching user contributions
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // 1 second delay

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatedContent
            distance={100}
            direction="horizontal"
            reverse={false}
            initialOpacity={0}
            animateOpacity
            scale={1.0}
            threshold={0.1}
        >
            <div className="mb-8">
                <h5 className="mb-3 text-xs font-medium uppercase tracking-wider text-black-400 dark:text-black-400">
                    GitHub Contributions
                </h5>
                <div className="min-h-[160px] flex items-center justify-center overflow-x-auto">
                    {isLoading ? (
                        <Loader2 className="h-6 w-6 animate-spin text-zinc-500 dark:text-zinc-300" />
                    ) : (
                        <GitHubCalendar
                            username="jomielcorpuz"
                            blockSize={12}
                            blockMargin={4}
                            theme={{
                                light: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'],
                                dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                            }}
                            fontSize={12}
                        />
                    )}
                </div>
            </div>
        </AnimatedContent>

    );
}
