import { useState } from 'react';
import { Send } from 'lucide-react';

export default function CTAForm() {
  const [prompt, setPrompt] = useState('Un site moderne pour une agence créative avec portfolio et page contact');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  async function handleGenerate(e) {
    e.preventDefault();
    setLoading(true);
    setResult('');
    try {
      // Frontend-only demo: affiche un plan de projet simulé
      await new Promise(r => setTimeout(r, 800));
      const plan = [
        'Pages: Accueil, Services, Portfolio, Contact',
        'Composants: Navbar, Hero, Grille de projets, Formulaire',
        "Backend: Endpoints /projects, /contact avec stockage DB",
        'Style: Thème sombre, accents indigo et dégradés'
      ].join('\n• ');
      setResult(`• ${plan}`);
    } catch (err) {
      setResult("Erreur de génération. Réessayez.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <h3 className="text-xl font-semibold text-white">Décrivez votre projet</h3>
        <p className="mt-1 text-white/70">Notre générateur 100% IA propose une structure prête à l’emploi.</p>
        <form onSubmit={handleGenerate} className="mt-4 flex flex-col gap-3 sm:flex-row">
          <input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="flex-1 rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none ring-0 focus:border-indigo-400"
            placeholder="Décrivez le site ou l’application à créer"
          />
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500 disabled:opacity-60"
          >
            <Send className="h-5 w-5" /> {loading ? 'Génération…' : 'Générer'}
          </button>
        </form>

        {result && (
          <div className="mt-4 rounded-lg bg-black/40 p-4 text-sm text-white/90 ring-1 ring-white/10 whitespace-pre-line">
            {result}
          </div>
        )}
      </div>
    </section>
  );
}
