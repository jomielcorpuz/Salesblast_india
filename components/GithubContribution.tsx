'use client';
import GitHubCalendar from 'react-github-calendar';

import { motion } from 'framer-motion';
import AnimatedContent from './ui/animatedcontent';

export default function GitHubContributions() {
    return (
        <AnimatedContent
            distance={100}
            direction="horizontal"
            reverse={false}
            config={{ tension: 50, friction: 25 }}
            initialOpacity={0}
            animateOpacity
            scale={1.0}
            threshold={0.1}
        >
            <div className="mb-8">
                <h5 className="mb-3 text-xs font-medium uppercase tracking-wider text-black-400 dark:text-black-400">
                    GitHub Contributions
                </h5>
                <div className="overflow-x-auto">
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
                </div>
            </div>
        </AnimatedContent>

    );
}
