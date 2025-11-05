import { Bot, Globe, LayoutDashboard, Blocks } from 'lucide-react';

const features = [
  {
    icon: LayoutDashboard,
    title: 'Génération d’UI',
    desc: 'Sections, composants et thèmes modernes basés sur votre description.'
  },
  {
    icon: Bot,
    title: 'Backend auto',
    desc: 'API et logique métier prêtes à l’emploi avec persistance de données.'
  },
  {
    icon: Globe,
    title: 'Déploiement facile',
    desc: 'Export et publication en un clic vers vos plateformes favorites.'
  },
  {
    icon: Blocks,
    title: 'Extensible',
    desc: 'Personnalisez le code, ajoutez des modules et intégrez des services.'
  }
];

export default function Features() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-bold text-white sm:text-3xl">Ce que l’IA construit pour vous</h2>
      <p className="mt-3 max-w-2xl text-white/70">De l’idée au produit: notre moteur génère tout le nécessaire pour lancer un site ou une application complète.</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-300">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm text-white/70">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
