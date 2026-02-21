import { X, ExternalLink, Github } from 'lucide-react';
import type { Project } from '../data/projects';
import { useEffect, useRef } from 'react';

interface ModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export function Modal({ project, isOpen, onClose }: ModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    // Focus trap & escape key handling
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        // Prevent body scroll when open
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', handleKeyDown);

        // Focus modal container
        if (modalRef.current) {
            modalRef.current.focus();
        }

        return () => {
            document.body.style.overflow = '';
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen || !project) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-[#030303]/90 backdrop-blur-md transition-opacity"
                aria-hidden="true"
                onClick={onClose}
            />

            {/* Modal panel */}
            <div
                ref={modalRef}
                tabIndex={-1}
                className="relative bg-[#0a0a0a] border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col focus:outline-none"
            >
                <div className="absolute top-0 right-0 p-4 z-10">
                    <button
                        onClick={onClose}
                        className="p-2 bg-black/50 hover:bg-white/10 text-white rounded-full transition-colors backdrop-blur-sm"
                        aria-label="Close modal"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Hero Image Section */}
                <div className={`h-64 sm:h-80 w-full relative \${project.imagePlaceholder} flex justify-center items-center overflow-hidden shrink-0`}>
                    {/* Decorative pattern placeholder */}
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                    <h2 className="text-4xl md:text-5xl font-sans font-bold text-white text-center px-6 relative z-10 opacity-50 drop-shadow-lg mix-blend-overlay">
                        {project.title}
                    </h2>
                </div>

                {/* Content Section */}
                <div className="p-8 sm:p-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                        <div>
                            <span className="text-teal-400 font-mono text-sm tracking-widest uppercase mb-3 block">
                                {project.category} // {project.year}
                            </span>
                            <h3 id="modal-title" className="text-3xl sm:text-4xl font-sans font-bold text-white">
                                {project.title}
                            </h3>
                        </div>

                        <div className="flex gap-4 shrink-0">
                            {project.demoUrl && (
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-white text-black font-semibold font-mono text-sm uppercase tracking-wider hover:bg-indigo-300 transition-colors inline-flex items-center gap-2">
                                    <ExternalLink size={16} /> Live
                                </a>
                            )}
                            {project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-white/20 text-white font-mono text-sm uppercase tracking-wider hover:bg-white/10 transition-colors inline-flex items-center gap-2">
                                    <Github size={16} /> source
                                </a>
                            )}
                        </div>
                    </div>

                    <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-3xl">
                        {project.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
                        <div>
                            <h4 className="text-white font-mono uppercase tracking-widest text-sm mb-4 pb-2 border-b border-white/10">Highlights</h4>
                            <ul className="space-y-3">
                                {project.highlights.map((item, i) => (
                                    <li key={i} className="flex items-start text-slate-400">
                                        <span className="text-indigo-400 mr-2">▹</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-mono uppercase tracking-widest text-sm mb-4 pb-2 border-b border-white/10">Responsibilities</h4>
                            <ul className="space-y-3">
                                {project.responsibilities.map((item, i) => (
                                    <li key={i} className="flex items-start text-slate-400">
                                        <span className="text-teal-400 mr-2">▹</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mb-12">
                        <h4 className="text-white font-mono uppercase tracking-widest text-sm mb-4 pb-2 border-b border-white/10">Result / Impact</h4>
                        <p className="text-slate-300 italic px-4 border-l-2 border-indigo-500">{project.result}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                        {project.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-slate-300">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
