import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#030303] text-slate-300 font-sans selection:bg-indigo-500/30">
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <footer className="py-8 bg-[#030303] border-t border-white/5 text-center px-6">
        <p className="font-mono text-sm tracking-widest text-slate-500 mb-2">
          &copy; {new Date().getFullYear()} SAKKARAD UDOMSIN
        </p>
        <p className="text-xs text-slate-600">
          Built with React & Tailwind CSS. Hosted on GitHub Pages.
        </p>
      </footer>
    </div>
  );
}

export default App;
