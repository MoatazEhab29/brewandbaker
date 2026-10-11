import { Sprout, Sun, Heart } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const aboutImage =
  'https://images.pexels.com/photos/7405059/pexels-photo-7405059.jpeg?auto=compress&cs=tinysrgb&w=1000&h=1200&fit=crop';

const values = [
  {
    icon: Sprout,
    title: 'Locally Roasted',
    text: 'Beans sourced from small farms and roasted in-house every week for peak freshness.',
  },
  {
    icon: Sun,
    title: 'Fresh Daily',
    text: 'Our bakers start at 4 AM so every croissant is warm and flaky by the time you arrive.',
  },
  {
    icon: Heart,
    title: 'A Peaceful Space',
    text: 'Soft lighting, comfy corners, and free Wi-Fi — perfect for working or catching up.',
  },
];

export default function About() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" ref={ref} className="relative py-24 sm:py-32 bg-grain overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Freshly baked pastries in a display case"
                className="w-full h-[440px] sm:h-[560px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-cream-50 rounded-2xl shadow-xl px-6 py-5 border border-cream-200">
              <p className="font-display text-3xl font-600 text-caramel-600">100%</p>
              <p className="text-sm text-espresso-600 font-500">Fresh, Every Morning</p>
            </div>
          </div>

          <div>
            <span className="reveal text-caramel-600 font-600 text-sm tracking-widest uppercase">
              Our Story
            </span>
            <h2 className="reveal font-display text-3xl sm:text-4xl lg:text-5xl font-400 leading-[1.15] text-espresso-800 mt-3">
              A cozy corner where
              <br />
              <span className="italic text-caramel-600">coffee meets craft</span>
            </h2>
            <p className="reveal mt-6 text-lg text-espresso-600 leading-relaxed">
              Brew &amp; Baker started with a simple idea: great coffee and warm pastry
              can turn an ordinary morning into something worth savoring. We partner with
              local roasters who know every bean by name, and our bakers are up before
              the sun to make sure the display case is full of golden, flaky goodness.
            </p>
            <p className="reveal mt-4 text-lg text-espresso-600 leading-relaxed">
              Whether you're settling in with a laptop, meeting a friend, or just grabbing
              a cup to go — you're always welcome here.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className="reveal"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="grid place-items-center w-12 h-12 rounded-xl bg-sage-400/15 mb-3">
                    <v.icon className="w-6 h-6 text-sage-700" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-lg font-600 text-espresso-800">{v.title}</h3>
                  <p className="mt-1.5 text-sm text-espresso-500 leading-relaxed">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
