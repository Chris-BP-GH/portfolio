import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const buildChips = [
    'Robotics / AMR',
    'Web Apps',
    'Mobile Apps',
    'Factory Systems',
    'POS',
    'Custom Software'
];

export function About() {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

    return (
        <section id="about" className="py-24 md:py-32 relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div
                    ref={ref}
                    className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                        }`}
                >
                    <div className="flex flex-col md:flex-row gap-16 items-start">

                        {/* Left: Heading */}
                        <div className="md:w-1/3">
                            <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight mb-4">
                                <span className="text-indigo-400 font-mono text-lg block mb-2 opacity-80 tracking-widest">02 // PROFILE</span>
                                Explore new frontiers in software.
                            </h2>
                            <div className="w-12 h-1 bg-indigo-500 mt-6"></div>
                        </div>

                        {/* Right: Content */}
                        <div className="md:w-2/3 space-y-8 text-slate-400 leading-relaxed text-lg">
                            <p>
                                I am a senior frontend engineer and UI motion designer with a passion for building
                                applications that span across the physical and digital worlds. My work covers full-stack
                                development, robotic fleet management (AMR), point-of-sale systems, and responsive web platforms.
                            </p>

                            <p>
                                I focus on creating <span className="text-white font-medium">immersive, cinematic user experiences</span> that don't compromise
                                on performance or accessibility. Whether it's routing fleets of robots on a factory floor or
                                crafting a pixel-perfect landing page, I bring systems to life.
                            </p>

                            <div className="pt-6 border-t border-white/10">
                                <h3 className="text-white font-mono text-sm tracking-widest uppercase mb-6">What I Build</h3>
                                <div className="flex flex-wrap gap-3">
                                    {buildChips.map(chip => (
                                        <span
                                            key={chip}
                                            className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-mono text-slate-300 hover:border-indigo-400/50 hover:bg-indigo-400/10 transition-colors"
                                        >
                                            {chip}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Stats Placeholders */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                                <div>
                                    <div className="text-4xl font-bold text-white mb-1">10+</div>
                                    <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">Years Exp</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-white mb-1">40+</div>
                                    <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">Projects</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-white mb-1">15+</div>
                                    <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">Deployments</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-white mb-1">100%</div>
                                    <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">Passion</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
