import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent" />

      <div className="mx-auto max-w-6xl px-6 pt-20 pb-12 sm:pt-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur">
          <Sparkles className="h-4 w-4 text-yellow-300" />
          100% AI — build apps in minutes
        </div>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
          Créez des sites et applications
          <span className="block bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent"> propulsés par l'IA</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/70">
          Décrivez votre idée en quelques mots et laissez notre générateur construire une expérience complète: pages, composants, API et styles — prête à être publiée.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500">
            <Rocket className="h-5 w-5" />
            Commencer maintenant
          </button>
          <button className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-white/90 backdrop-blur transition hover:bg-white/10">
            Voir un exemple
          </button>
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-1">
          <div className="rounded-xl bg-black/40 p-6 ring-1 ring-white/10">
            <div className="text-xs text-white/60">Prompt</div>
            <div className="mt-2 rounded-lg bg-black/60 p-4 font-mono text-sm text-white/90 ring-1 ring-white/10">
              "Un site moderne pour une startup de livraison durable avec page d'accueil, tarifs et formulaire de contact"
            </div>
            <div className="mt-4 text-xs text-white/60">Aperçu généré</div>
            <div className="mt-2 grid grid-cols-3 gap-2">
              <div className="h-20 rounded-lg bg-white/5 ring-1 ring-white/10" />
              <div className="h-20 rounded-lg bg-white/5 ring-1 ring-white/10" />
              <div className="h-20 rounded-lg bg-white/5 ring-1 ring-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
