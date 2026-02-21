import { useEffect, useState, useRef } from 'react';

interface UseIntersectionObserverArgs extends IntersectionObserverInit {
    freezeOnceVisible?: boolean;
}

export function useIntersectionObserver({
    threshold = 0.1,
    root = null,
    rootMargin = '0px',
    freezeOnceVisible = true,
}: UseIntersectionObserverArgs = {}): [React.RefObject<HTMLDivElement | null>, boolean] {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isIntersecting, setIntersecting] = useState<boolean>(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Use a flag so we can unobserve if freezeOnceVisible is true
        let observer: IntersectionObserver | null = null;

        // Reduce motion check
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            setIntersecting(true);
            return;
        }

        const updateEntry = ([entry]: IntersectionObserverEntry[]) => {
            const isElementIntersecting = entry.isIntersecting;

            setIntersecting(isElementIntersecting);

            if (isElementIntersecting && freezeOnceVisible && observer && element) {
                observer.unobserve(element);
            }
        };

        observer = new IntersectionObserver(updateEntry, {
            threshold,
            root,
            rootMargin,
        });

        observer.observe(element);

        return () => {
            observer?.disconnect();
        };
    }, [threshold, root, rootMargin, freezeOnceVisible]);

    return [ref, isIntersecting];
}
