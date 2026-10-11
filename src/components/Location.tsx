import { Clock, MapPin, Phone, Navigation } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const hours = [
  { day: 'Monday — Thursday', time: '7:00 AM — 11:00 PM' },
  { day: 'Friday — Saturday', time: '7:00 AM — 12:00 AM' },
  { day: 'Sunday', time: '8:00 AM — 10:00 PM' },
];

export default function Location() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="location" ref={ref} className="relative py-24 sm:py-32 bg-cream-50 bg-grain overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="reveal text-caramel-600 font-600 text-sm tracking-widest uppercase">
            Visit Us
          </span>
          <h2 className="reveal font-display text-3xl sm:text-4xl lg:text-5xl font-400 text-espresso-800 mt-3">
            Come say <span className="italic text-caramel-600">hello</span>
          </h2>
          <p className="reveal mt-4 text-espresso-500 text-lg">
            We're right around the corner — your favorite table is waiting.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Info card */}
          <div className="reveal space-y-6">
            <div className="bg-white rounded-2xl shadow-lg border border-cream-200 p-7">
              <div className="flex items-start gap-4">
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-caramel-400/15 shrink-0">
                  <MapPin className="w-6 h-6 text-caramel-600" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-600 text-espresso-800">Our Location</h3>
                  <p className="mt-1 text-espresso-500 leading-relaxed">
                    14 El Marina Street, Korba District<br />
                    Heliopolis, Cairo, Egypt
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-cream-200 p-7">
              <div className="flex items-start gap-4">
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-sage-400/15 shrink-0">
                  <Clock className="w-6 h-6 text-sage-700" strokeWidth={1.8} />
                </div>
                <div className="w-full">
                  <h3 className="font-display text-lg font-600 text-espresso-800">Opening Hours</h3>
                  <div className="mt-3 space-y-2.5">
                    {hours.map((h) => (
                      <div key={h.day} className="flex items-center justify-between gap-4 text-sm">
                        <span className="text-espresso-600 font-500">{h.day}</span>
                        <span className="text-espresso-700 font-600">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-cream-200 p-7">
              <div className="flex items-start gap-4">
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-espresso-700/10 shrink-0">
                  <Phone className="w-6 h-6 text-espresso-700" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-600 text-espresso-800">Get in Touch</h3>
                  <p className="mt-1 text-espresso-500 leading-relaxed">
                    Phone: +20 100 123 4567<br />
                    hello@brewandbaker.cafe
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="reveal">
            <div className="relative w-full h-full min-h-[420px] rounded-2xl overflow-hidden shadow-lg border border-cream-200 bg-espresso-100">
              <iframe
                title="Brew & Baker location map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=31.3130%2C30.0900%2C31.3330%2C30.1050&layer=mapnik&marker=30.0975%2C31.3230"
                className="w-full h-full border-0"
                loading="lazy"
                style={{ minHeight: '420px' }}
              />
              <div className="absolute top-4 left-4 bg-cream-50/95 backdrop-blur-sm rounded-xl shadow-lg px-4 py-3 border border-cream-200 pointer-events-none">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-caramel-600" />
                  <span className="text-sm font-600 text-espresso-800">Brew &amp; Baker</span>
                </div>
                <p className="text-xs text-espresso-500 mt-0.5">Heliopolis, Cairo</p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Heliopolis+Cairo+Egypt"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-600 text-caramel-600 hover:text-caramel-700 transition-colors"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
