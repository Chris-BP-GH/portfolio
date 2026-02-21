import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';


const navItems = [
    { num: '01', name: 'Home', href: '#home' },
    { num: '02', name: 'About', href: '#about' },
    { num: '03', name: 'Projects', href: '#projects' },
    { num: '04', name: 'Experience', href: '#experience' },
    { num: '05', name: 'Skills', href: '#skills' },
    { num: '06', name: 'Contact', href: '#contact' },
];

export function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-[#030303]/80 backdrop-blur-md border-b border-white/5 py-4'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                <a href="#home" className="text-2xl font-sans font-bold tracking-tighter text-white">
                    S<span className="text-indigo-400">.</span>U
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="group flex flex-col text-sm font-mono tracking-widest text-slate-400 hover:text-white transition-colors"
                        >
                            <span className="text-[10px] text-indigo-400 mb-1 opacity-70 group-hover:opacity-100 transition-opacity">
                                {item.num}
                            </span>
                            <span className="uppercase">{item.name}</span>
                        </a>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-slate-300 hover:text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-[#050505] z-40 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    } md:hidden`}
            >
                <button
                    className="absolute top-6 right-6 text-slate-300 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <X size={32} />
                </button>
                <nav className="flex flex-col items-center space-y-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex flex-col items-center text-2xl font-mono tracking-widest text-slate-300 hover:text-white transition-colors"
                        >
                            <span className="text-sm text-indigo-400 mb-2">{item.num}</span>
                            <span className="uppercase">{item.name}</span>
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}
