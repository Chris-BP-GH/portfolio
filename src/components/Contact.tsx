import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Mail, Github, Linkedin, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
    const [copied, setCopied] = useState(false);

    const email = 'hello@sakkarad.demo'; // Placeholder demo email

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-24 md:py-32 relative bg-[#060606] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
                <div
                    ref={ref}
                    className={`w-full max-w-3xl text-center transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                        }`}
                >
                    <p className="text-indigo-400 font-mono tracking-widest mb-4 uppercase text-sm">
                        06 // NEXT STEPS
                    </p>
                    <h2 className="text-5xl md:text-7xl font-sans font-bold tracking-tight mb-8">
                        Let's Build Together.
                    </h2>

                    <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Whether you need a dynamic frontend, an AMR control dashboard, or a complete system architecture—my inbox is always open.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                        <a
                            href={`mailto:\${email}`}
                            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-mono tracking-wider transition-colors inline-flex items-center justify-center gap-3"
                        >
                            <Mail size={18} />
                            SEND EMAIL
                        </a>

                        <button
                            onClick={handleCopy}
                            className="w-full sm:w-auto px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-mono tracking-wider transition-colors inline-flex items-center justify-center gap-3 relative"
                        >
                            {copied ? <Check size={18} className="text-teal-400" /> : <Copy size={18} />}
                            {copied ? 'COPIED!' : 'COPY EMAIL'}
                        </button>
                    </div>

                    <div className="flex items-center justify-center gap-8 pt-12 border-t border-white/10 w-full max-w-md mx-auto">
                        <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
                            <Github size={28} />
                        </a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
                            <Linkedin size={28} />
                        </a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Twitter / X">
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[28px] h-[28px] fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.95H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.961h-1.91z"></path></svg>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
