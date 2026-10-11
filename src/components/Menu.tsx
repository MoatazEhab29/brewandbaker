import { useState } from 'react';
import { Coffee, Croissant, EggFried, CakeSlice, type LucideIcon } from 'lucide-react';
import { menuCategories, type DietaryTag } from '@/data/menu';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, LucideIcon> = {
  Coffee,
  Croissant,
  EggFried,
  CakeSlice,
};

const tagStyles: Record<DietaryTag, string> = {
  Vegan: 'bg-sage-400/15 text-sage-700 border-sage-400/20',
  'Oat Milk': 'bg-caramel-300/20 text-caramel-700 border-caramel-300/25',
  'Gluten-Free': 'bg-cream-200 text-espresso-600 border-cream-300',
  New: 'bg-caramel-500 text-white border-caramel-600',
  Signature: 'bg-espresso-700 text-cream-100 border-espresso-800',
  'Sugar-Free': 'bg-sage-400/15 text-sage-700 border-sage-400/20',
};

export default function Menu() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useScrollReveal<HTMLDivElement>();
  const category = menuCategories[activeTab];

  return (
    <section id="menu" ref={ref} className="relative py-24 sm:py-32 bg-espresso-800 bg-grain overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="reveal text-caramel-400 font-600 text-sm tracking-widest uppercase">
            Our Menu
          </span>
          <h2 className="reveal font-display text-3xl sm:text-4xl lg:text-5xl font-400 text-cream-50 mt-3">
            Crafted with care, <span className="italic text-caramel-300">served with love</span>
          </h2>
          <p className="reveal mt-4 text-cream-200/70 text-lg">
            From bean to cup, from dough to delight — explore our full selection.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="reveal mt-12 flex justify-center">
          <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-espresso-700/50 rounded-2xl border border-espresso-600/30 backdrop-blur-sm">
            {menuCategories.map((cat, idx) => {
              const Icon = iconMap[cat.icon];
              const isActive = idx === activeTab;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(idx)}
                  className={`group inline-flex items-center gap-2 px-4 sm:px-5 py-3 rounded-xl text-sm font-600 transition-all duration-300 ${
                    isActive
                      ? 'bg-caramel-500 text-white shadow-lg'
                      : 'text-cream-200/70 hover:text-cream-100 hover:bg-espresso-600/40'
                  }`}
                >
                  <Icon className="w-4.5 h-4.5" strokeWidth={2} />
                  <span className="hidden sm:inline">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category subheading */}
        <div className="mt-10 text-center">
          <p key={category.id} className="animate-fade-up text-cream-200/50 text-sm tracking-widest uppercase font-500">
            {category.subcategory}
          </p>
        </div>

        {/* Menu items grid */}
        <div key={category.id} className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {category.items.map((item, idx) => (
            <article
              key={item.id}
              className="group bg-cream-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-cream-200 animate-fade-up"
              style={{ animationDelay: `${idx * 60}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl font-600 text-espresso-800 leading-snug">
                  {item.name}
                </h3>
                <div className="shrink-0 flex items-baseline gap-0.5">
                  <span className="text-caramel-600 font-700 text-lg">{item.price}</span>
                  <span className="text-caramel-600 text-xs font-600">EGP</span>
                </div>
              </div>

              <p className="mt-2.5 text-sm text-espresso-500 leading-relaxed">
                {item.description}
              </p>

              {item.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-600 border ${tagStyles[tag]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
