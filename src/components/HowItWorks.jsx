import { Sparkles, Code2, Server, Rocket } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-bold text-white sm:text-3xl">Comment ça marche</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center gap-2 text-white"><Sparkles className="h-5 w-5 text-yellow-300"/>Prompt</div>
          <p className="mt-2 text-sm text-white/70">Décrivez votre projet en langage naturel.</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center gap-2 text-white"><Code2 className="h-5 w-5 text-sky-300"/>Génération</div>
          <p className="mt-2 text-sm text-white/70">L’IA crée l’interface, les pages et la navigation.</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center gap-2 text-white"><Server className="h-5 w-5 text-emerald-300"/>Serveur</div>
          <p className="mt-2 text-sm text-white/70">Le backend, les API et la base de données sont configurés.</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center gap-2 text-white"><Rocket className="h-5 w-5 text-indigo-300"/>Lancement</div>
          <p className="mt-2 text-sm text-white/70">Prévisualisez et publiez en un clic.</p>
        </div>
      </div>
    </section>
  );
}
