import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { projects, type Project } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { Modal } from './Modal';

const categories = ['All', 'Robotics / AMR', 'Web App', 'Mobile App', 'Factory / Internal Systems', 'POS', 'Other'];

export function Projects() {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects = projects.filter(p =>
        activeCategory === 'All' ? true : p.category === activeCategory
    );

    return (
        <section id="projects" className="py-24 md:py-32 relative bg-[#050505]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div
                    ref={ref}
                    className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                        }`}
                >
                    <div className="mb-12">
                        <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight mb-4">
                            <span className="text-purple-400 font-mono text-lg block mb-2 opacity-80 tracking-widest">03 // SELECTED WORK</span>
                            Featured Projects.
                        </h2>
                        <div className="w-12 h-1 bg-purple-500 mt-6"></div>
                    </div>

                    {/* Filter Chips */}
                    <div className="flex flex-wrap gap-3 mb-16 border-b border-white/5 pb-8">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-mono tracking-wider transition-all duration-300 \${
                  activeCategory === category 
                    ? 'bg-white text-black font-bold shadow-[0_0_15px_rgba(255,255,255,0.3)]' 
                    : 'bg-[#0a0a0a] border border-white/10 text-slate-400 hover:text-white hover:border-white/30'
                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    {filteredProjects.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProjects.map((project, idx) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    onClick={setSelectedProject}
                                    index={idx}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="py-20 text-center border focus-within:ring-white border-dashed border-white/10 mx-auto w-full text-slate-500 font-mono">
                            <p>No projects found in this category.</p>
                        </div>
                    )}

                </div>
            </div>

            {/* Detail Modal */}
            <Modal
                project={selectedProject}
                isOpen={selectedProject !== null}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
}
