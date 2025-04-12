import {
    useRef,
    useEffect,
    useState,
    ReactNode,
    forwardRef,
    useImperativeHandle,
    HTMLProps,
} from "react";
import { useSpring, animated, SpringConfig } from "@react-spring/web";

interface AnimatedContentProps extends HTMLProps<HTMLDivElement> {
    children: ReactNode;
    distance?: number;
    direction?: "vertical" | "horizontal";
    reverse?: boolean;
    config?: SpringConfig;
    initialOpacity?: number;
    animateOpacity?: boolean;
    scale?: number;
    threshold?: number;
    delay?: number;
}

const AnimatedContent = forwardRef<HTMLDivElement, AnimatedContentProps>(
    (
        {
            children,
            distance = 100,
            direction = "vertical",
            reverse = false,
            config = { tension: 50, friction: 25 },
            initialOpacity = 0,
            animateOpacity = true,
            scale = 1,
            threshold = 0.1,
            delay = 0,
            ...rest // spread extra props to pass to animated.div
        },
        forwardedRef
    ) => {
        const [inView, setInView] = useState(false);
        const localRef = useRef<HTMLDivElement>(null);

        useImperativeHandle(forwardedRef, () => localRef.current as HTMLDivElement);

        useEffect(() => {
            const element = localRef.current;
            if (!element) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        observer.unobserve(element);
                        setTimeout(() => {
                            setInView(true);
                        }, delay);
                    }
                },
                { threshold }
            );

            observer.observe(element);

            return () => observer.disconnect();
        }, [threshold, delay]);

        const directions: Record<"vertical" | "horizontal", string> = {
            vertical: "Y",
            horizontal: "X",
        };

        const springProps = useSpring({
            from: {
                transform: `translate${directions[direction]}(${reverse ? `-${distance}px` : `${distance}px`
                    }) scale(${scale})`,
                opacity: animateOpacity ? initialOpacity : 1,
            },
            to: inView
                ? {
                    transform: `translate${directions[direction]}(0px) scale(1)`,
                    opacity: 1,
                }
                : undefined,
            config,
        });

        return (
            <animated.div ref={localRef} style={springProps} {...(rest as any)}>
                {children}
            </animated.div>
        );
    }
);

AnimatedContent.displayName = "AnimatedContent";

export default AnimatedContent;
