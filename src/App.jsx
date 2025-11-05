import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTAForm from './components/CTAForm';

function Header() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-emerald-400" />
        <span className="text-lg font-semibold text-white">Flames AI Builder</span>
      </div>
      <nav className="hidden gap-6 text-white/80 sm:flex">
        <a href="#features" className="hover:text-white">Fonctionnalités</a>
        <a href="#how" className="hover:text-white">Process</a>
        <a href="#start" className="hover:text-white">Commencer</a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/60">
      <div className="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
        <p>© {new Date().getFullYear()} Flames • Génération de sites et apps 100% IA</p>
        <div className="flex items-center gap-4">
          <a className="hover:text-white" href="#">Conditions</a>
          <a className="hover:text-white" href="#">Confidentialité</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B10]">
      <Hero />
      <div id="features"><Features /></div>
      <div id="how"><HowItWorks /></div>
      <div id="start"><CTAForm /></div>
      <Footer />
    </div>
  );
}
