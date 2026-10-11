import { ArrowRight, MapPin } from 'lucide-react';

const heroImage =
  'https://images.pexels.com/photos/2159095/pexels-photo-2159095.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop';

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Barista pouring freshly brewed coffee into a glass"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso-900/60 via-espresso-900/30 to-espresso-900/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso-900/50 to-transparent" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full pt-24 pb-16">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-100/15 border border-cream-100/25 backdrop-blur-sm mb-6 animate-fade-up"
              style={{ animationDelay: '0.15s' }}
            >
              <span className="w-2 h-2 rounded-full bg-caramel-400 animate-gentle-bob" />
              <span className="text-cream-100 text-sm font-500 tracking-wide">
                Open Daily · 7:00 AM — 11:00 PM
              </span>
            </div>

            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-400 leading-[1.1] text-cream-50 text-shadow-lg animate-fade-up"
              style={{ animationDelay: '0.3s' }}
            >
              Artisan Coffee &amp; Freshly
              <br />
              Baked Goods, Made for
              <br />
              <span className="italic font-300 text-caramel-300">Your Cozy Mornings</span>
            </h1>

            <p
              className="mt-6 text-lg text-cream-100/85 max-w-xl leading-relaxed animate-fade-up"
              style={{ animationDelay: '0.45s' }}
            >
              Locally roasted beans, pastries baked fresh every dawn, and a warm corner
              just for you. Pull up a chair — your morning starts here.
            </p>

            <div
              className="mt-9 flex flex-col sm:flex-row gap-4 animate-fade-up"
              style={{ animationDelay: '0.6s' }}
            >
              <button
                onClick={() => scrollTo('#menu')}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-caramel-500 text-white font-600 text-base shadow-lg hover:bg-caramel-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Menu
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo('#location')}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-cream-100/10 border border-cream-100/30 text-cream-50 font-600 text-base backdrop-blur-sm hover:bg-cream-100/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                <MapPin className="w-5 h-5" />
                Find Our Location
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 z-10 pb-6 flex justify-center animate-fade-in" style={{ animationDelay: '1s' }}>
        <div className="flex flex-col items-center gap-2 text-cream-100/60">
          <span className="text-xs tracking-widest uppercase font-500">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-cream-100/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
