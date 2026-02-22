import { useState, useEffect, useMemo } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';
import { useScrollSpy } from '../hooks/useScrollSpy';

export function Nav() {
    const { lang, setLang, t } = useI18n();

    const navItems = [
        { num: '01', name: t('nav.home'), href: '#home' },
        { num: '02', name: t('nav.about'), href: '#about' },
        { num: '03', name: t('nav.projects'), href: '#projects' },
        { num: '04', name: t('nav.experience'), href: '#experience' },
        { num: '05', name: t('nav.skills'), href: '#skills' },
        { num: '06', name: t('nav.contact'), href: '#contact' },
    ];
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navIds = useMemo(() => navItems.map(item => item.href.replace('#', '')), [navItems]);
    const activeSection = useScrollSpy(navIds, { rootMargin: '-20% 0px -60% 0px' });

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
                ? 'bg-bg-base/80 backdrop-blur-md border-b border-white/5 py-4'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                <a href="#home" className="text-2xl font-sans font-bold tracking-tighter text-white">
                    S<span className="text-indigo-400">.</span>U
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.href.replace('#', '');
                        return (
                        <a
                            key={item.href}
                            href={item.href}
                            className={`group flex flex-col text-sm font-mono tracking-widest transition-colors ${
                                isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                            }`}
                        >
                            <span className={`text-[10px] mb-1 transition-opacity ${
                                isActive ? 'text-teal-400 opacity-100' : 'text-indigo-400 opacity-70 group-hover:opacity-100'
                            }`}>
                                {item.num}
                            </span>
                            <span className="uppercase">{item.name}</span>
                        </a>
                        );
                    })}
                    
                    {/* Language Toggle */}
                    <button
                        onClick={() => setLang(lang === 'th' ? 'en' : 'th')}
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors ml-4 border-l border-white/20 pl-6"
                        title={lang === 'th' ? 'Switch to English' : 'เปลี่ยนเป็นภาษาไทย'}
                    >
                        <Globe size={18} />
                        <span className="font-mono text-sm uppercase">{lang}</span>
                    </button>
                </nav>

                <div className="flex items-center md:hidden gap-4">
                    {/* Mobile Language Toggle */}
                    <button
                        onClick={() => setLang(lang === 'th' ? 'en' : 'th')}
                        className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 border border-white/20 rounded-full px-3 py-1"
                    >
                        <Globe size={14} />
                        <span className="font-mono text-xs uppercase">{lang}</span>
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="text-slate-300 hover:text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
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
                    {navItems.map((item) => {
                        const isActive = activeSection === item.href.replace('#', '');
                        return (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`flex flex-col items-center text-2xl font-mono tracking-widest transition-colors ${
                                isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                            }`}
                        >
                            <span className={`text-sm mb-2 ${isActive ? 'text-teal-400' : 'text-indigo-400'}`}>{item.num}</span>
                            <span className="uppercase">{item.name}</span>
                        </a>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
}
