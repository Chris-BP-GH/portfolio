import { useState, useEffect, useRef } from 'react';

export function useScrollSpy(
    ids: string[],
    options: IntersectionObserverInit = { rootMargin: '-20% 0px -60% 0px' }
) {
    const [activeId, setActiveId] = useState<string>('');
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const elements = ids.map(id => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);

        if (elements.length === 0) return;

        if (observer.current) {
            observer.current.disconnect();
        }

        observer.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        }, options);

        elements.forEach(el => observer.current?.observe(el));

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [ids, options.rootMargin, options.threshold, options.root]); // Safe dependencies

    return activeId;
}
