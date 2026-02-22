import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useI18n } from '../hooks/useI18n';


export function Skills() {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    const { t } = useI18n();

    const skillCategories = t('skills.categories');

    return (
        <section id="skills" className="py-24 md:py-32 relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div
                    ref={ref}
                    className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                        }`}
                >
                    <div className="mb-16 md:text-right flex flex-col md:items-end">
                        <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight mb-4 text-white">
                            <span className="text-indigo-400 font-mono text-lg block mb-2 opacity-80 tracking-widest text-left md:text-right">05 // {t('skills.titlePrefix')}</span>
                            {t('skills.title')}
                        </h2>
                        <div className="w-12 h-1 bg-indigo-500 mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {skillCategories && Array.isArray(skillCategories) && skillCategories.map((category: any, idx: number) => (
                            <div
                                key={category.title}
                                className="glass-panel p-8 hover:glass-panel-hover transition-colors group"
                                style={{ transitionDelay: `${idx * 100}ms` }}
                            >
                                <h3 className="text-xl font-bold text-white mb-6 font-mono tracking-wider flex items-center">
                                    <span className="text-indigo-400 mr-3 text-lg opacity-70 group-hover:opacity-100 transition-opacity">&lt;/&gt;</span>
                                    {category.title}
                                </h3>

                                <div className="flex flex-wrap gap-2 md:gap-3">
                                    {category.skills.map((skill: string) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1.5 bg-bg-surface border border-white/5 text-sm text-slate-300 rounded group-hover:border-indigo-500/30 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section >
    );
}
