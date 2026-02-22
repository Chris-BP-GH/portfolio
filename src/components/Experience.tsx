import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useI18n } from '../hooks/useI18n';



export function Experience() {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    const { t } = useI18n();

    // Use translations for the timeline directly to ensure reactivity on language change
    const timelineData = t('experience.timeline');

    return (
        <section id="experience" className="py-24 md:py-32 relative bg-[#060606]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div
                    ref={ref}
                    className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                        }`}
                >
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight mb-4 text-white">
                            <span className="text-teal-400 font-mono text-lg block mb-2 opacity-80 tracking-widest">04 // {t('experience.titlePrefix')}</span>
                            {t('experience.title')}
                        </h2>
                        <div className="w-12 h-1 bg-teal-500 mt-6"></div>
                    </div>

                    <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-16 py-8">
                        {timelineData && Array.isArray(timelineData) && timelineData.map((item: any, index: number) => (
                            <div key={index} className="relative pl-8 md:pl-12 group">
                                {/* Timeline dot */}
                                <div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-slate-600 group-hover:bg-teal-400 group-hover:shadow-[0_0_10px_rgba(45,212,191,0.5)] transition-all duration-300"></div>

                                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-3">
                                    <h3 className="text-2xl font-bold text-white">{item.role}</h3>
                                    <span className="text-teal-400 font-mono text-sm tracking-wider">{item.company}</span>
                                </div>

                                <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-xs font-mono text-slate-400 mb-6 rounded-sm">
                                    {item.period}
                                </div>

                                <p className="text-slate-400 text-lg mb-6 max-w-2xl">
                                    {item.summary}
                                </p>

                                <ul className="space-y-3 max-w-3xl">
                                    {item.bullets.map((bullet: string, i: number) => (
                                        <li key={i} className="flex items-start text-slate-400">
                                            <span className="text-teal-500 mr-3 mt-1.5 text-lg leading-none">▹</span>
                                            <span className="leading-relaxed">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
