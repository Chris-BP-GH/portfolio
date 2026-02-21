import { useEffect, useRef } from 'react';

import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function Hero() {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Simple starfield animation
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let stars: { x: number; y: number; radius: number; speed: number; opacity: number }[] = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const initStars = () => {
            stars = [];
            const numStars = Math.floor((window.innerWidth * window.innerHeight) / 2000); // Responsive star count
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.5,
                    speed: Math.random() * 0.2 + 0.05,
                    opacity: Math.random(),
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw nebula gradients
            const gradient = ctx.createRadialGradient(
                canvas.width * 0.8, canvas.height * 0.2, 0,
                canvas.width * 0.8, canvas.height * 0.2, canvas.width * 0.6
            );
            gradient.addColorStop(0, 'rgba(45, 212, 191, 0.05)'); // Teal
            gradient.addColorStop(1, 'transparent');

            const gradient2 = ctx.createRadialGradient(
                canvas.width * 0.2, canvas.height * 0.8, 0,
                canvas.width * 0.2, canvas.height * 0.8, canvas.width * 0.6
            );
            gradient2.addColorStop(0, 'rgba(99, 102, 241, 0.05)'); // Indigo
            gradient2.addColorStop(1, 'transparent');

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = gradient2;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw stars
            stars.forEach((star) => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.fill();

                // Move star upwards slightly for parallax feel
                star.y -= star.speed;
                star.opacity += (Math.random() - 0.5) * 0.05; // Twinkle

                // Keep opacity in bounds
                if (star.opacity < 0.2) star.opacity = 0.2;
                if (star.opacity > 1) star.opacity = 1;

                // Reset if goes off top
                if (star.y < 0) {
                    star.y = canvas.height;
                    star.x = Math.random() * canvas.width;
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener('resize', resize);
        resize();
        draw();

        // Pause animation when tab is hidden
        const handleVisibilityChange = () => {
            if (document.hidden) {
                cancelAnimationFrame(animationFrameId);
            } else {
                draw();
            }
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            window.removeEventListener('resize', resize);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section id="home" className="relative relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Canvas Background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
            />

            <div
                ref={ref}
                className={`relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-center transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                    }`}
            >
                <p className="text-indigo-400 font-mono tracking-widest mb-4">
                    01 // PORTFOLIO
                </p>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold tracking-tighter leading-[1.1] mb-6">
                    SAKKARAD<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-teal-400">
                        UDOMSIN (CHRIS)
                    </span>
                </h1>

                <p className="mt-4 max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed font-sans">
                    Dev who builds across <span className="text-white">Robotics/AMR</span>, Web Apps, Mobile Apps, Factory Systems, POS, and custom software.
                </p>

                <div className="mt-12 flex flex-col sm:flex-row gap-6">
                    <a href="#projects" className="group relative px-8 py-4 bg-white text-black font-semibold overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] inline-flex items-center justify-center">
                        <span className="relative z-10 uppercase tracking-wider font-mono text-sm">Explore Work</span>
                        <div className="absolute inset-0 bg-indigo-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 mix-blend-difference"></div>
                    </a>

                    <a href="#contact" className="group px-8 py-4 border border-white/20 text-white font-semibold transition-all duration-300 hover:bg-white/5 hover:border-white/40 inline-flex items-center justify-center uppercase tracking-wider font-mono text-sm glass-panel-hover">
                        Contact Me
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
                <span className="text-xs uppercase tracking-[0.3em] font-mono text-slate-400">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-slate-400 to-transparent animate-pulse"></div>
            </div>
        </section>
    );
}
