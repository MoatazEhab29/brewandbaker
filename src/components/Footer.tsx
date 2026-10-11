import { Coffee, Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-espresso-900 text-cream-200 py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center w-10 h-10 rounded-full bg-caramel-500 text-cream-50">
                <Coffee className="w-5 h-5" strokeWidth={2.2} />
              </span>
              <span className="font-display text-xl font-600">
                Brew <span className="text-caramel-400">&</span> Baker
              </span>
            </div>
            <p className="mt-4 text-sm text-cream-200/60 leading-relaxed max-w-md">
              Artisan specialty coffee and freshly baked goods, made with love in the heart
              of Heliopolis. Your cozy corner, every morning.
            </p>
            <div className="mt-5 flex gap-3">
              {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid place-items-center w-10 h-10 rounded-full bg-espresso-700/50 text-cream-200/70 hover:bg-caramel-500 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                  aria-label="Social link"
                >
                  <Icon className="w-5 h-5" strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-base font-600 text-cream-50 mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Menu', href: '#menu' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Visit Us', href: '#location' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream-200/60 hover:text-caramel-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base font-600 text-cream-50 mb-4">Reach Us</h4>
            <ul className="space-y-2.5 text-sm text-cream-200/60">
              <li>14 El Marina Street, Korba</li>
              <li>Heliopolis, Cairo, Egypt</li>
              <li>
                <a href="tel:+201001234567" className="hover:text-caramel-400 transition-colors">
                  +20 100 123 4567
                </a>
              </li>
              <li>
                <a href="mailto:hello@brewandbaker.cafe" className="hover:text-caramel-400 transition-colors">
                  hello@brewandbaker.cafe
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-espresso-700/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-cream-200/50">
            © {new Date().getFullYear()} Brew &amp; Baker. All rights reserved.
          </p>
          <p className="text-xs text-cream-200/40">
            Crafted with care, served with love.
          </p>
        </div>
      </div>
    </footer>
  );
}
