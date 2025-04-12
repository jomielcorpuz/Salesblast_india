import {
    useRef,
    ReactNode,
    forwardRef,
    useImperativeHandle,
} from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedContentProps {
    children: ReactNode;
    distance?: number;
    direction?: "vertical" | "horizontal";
    reverse?: boolean;
    duration?: number;
    initialOpacity?: number;
    animateOpacity?: boolean;
    scale?: number;
    threshold?: number;
    delay?: number;
    className?: string;
    style?: React.CSSProperties;
    // Add any other specific props you need here
}

const AnimatedContent = forwardRef<HTMLDivElement, AnimatedContentProps>(
    (
        {
            children,
            distance = 100,
            direction = "vertical",
            reverse = false,
            duration = 0.5,
            initialOpacity = 0,
            animateOpacity = true,
            scale = 1,
            threshold = 0.1,
            delay = 0,
            className,
            style,
        },
        forwardedRef
    ) => {
        const localRef = useRef<HTMLDivElement>(null);
        const isInView = useInView(localRef, {
            once: true,
            amount: threshold,
        });

        useImperativeHandle(forwardedRef, () => localRef.current as HTMLDivElement);

        const directionKey = direction === "vertical" ? "y" : "x";
        const initialOffset = reverse ? -distance : distance;

        return (
            <motion.div
                ref={localRef}
                initial={{
                    [directionKey]: initialOffset,
                    opacity: animateOpacity ? initialOpacity : 1,
                    scale: scale,
                }}
                animate={
                    isInView
                        ? {
                            [directionKey]: 0,
                            opacity: 1,
                            scale: 1,
                        }
                        : undefined
                }
                transition={{
                    duration: duration,
                    delay: delay / 1000, // Convert ms to s for framer-motion
                    ease: "easeOut",
                }}
                className={className}
                style={style}
            >
                {children}
            </motion.div>
        );
    }
);

AnimatedContent.displayName = "AnimatedContent";

export default AnimatedContent;