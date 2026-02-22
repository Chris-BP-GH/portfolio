import type { Project } from '../data/projects';
import { ArrowUpRight } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';

interface ProjectCardProps {
    project: Project;
    onClick: (project: Project) => void;
    index: number;
}

export function ProjectCard({ project, onClick, index }: ProjectCardProps) {
    const { lang } = useI18n();

    return (
        <div
            className="group cursor-pointer glass-panel flex flex-col h-full transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] overflow-hidden"
            onClick={() => onClick(project)}
            style={{
                animation: `fadeInUp 0.6s ease-out forwards`,
                animationDelay: `${index * 0.1}s`,
                opacity: 0
            }}
        >
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />

            {/* Image / Placeholder Area */}
            <div className={`h-48 w-full relative ${project.imagePlaceholder} overflow-hidden shrink-0`}>
                <div className="absolute inset-0 bg-bg-surface/20 group-hover:bg-transparent transition-colors duration-500"></div>
                {/* Mock subtle overlay pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>

                <div className="absolute top-4 right-4 p-2 bg-black/40 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                    <ArrowUpRight size={20} className="text-white" />
                </div>
            </div>

            {/* Content Area */}
            <div className="p-6 flex flex-col grow">
                <div className="flex justify-between items-center mb-3">
                    <span className="text-teal-400 font-mono text-xs tracking-wider uppercase">
                        {project.category}
                    </span>
                    <span className="text-slate-500 font-mono text-xs">
                        {project.year}
                    </span>
                </div>

                <h3 className="text-2xl font-bold font-sans text-white mb-3 group-hover:text-indigo-400 transition-colors">
                    {project.title[lang]}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 text-ellipsis grow">
                    {project.description[lang]}
                </p>

                {/* Tech Stack Preview limited to 3 */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
                    {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-xs font-mono text-slate-400 bg-white/5 px-2 py-1 rounded-sm border border-white/5 group-hover:border-indigo-500/30 transition-colors">
                            {tag}
                        </span>
                    ))}
                    {project.tags.length > 3 && (
                        <span className="text-xs font-mono text-slate-500 px-1 py-1">
                            +{project.tags.length - 3}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
