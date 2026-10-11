import { useEffect, useState } from 'react';
import { Coffee, Menu as MenuIcon, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit Us', href: '#location' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-[0_2px_20px_rgba(74,51,36,0.08)]' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-18 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 group"
        >
          <span
            className={`grid place-items-center w-10 h-10 rounded-full transition-all duration-500 ${
              scrolled ? 'bg-espresso-700 text-cream-100' : 'bg-cream-100/90 text-espresso-800'
            } group-hover:scale-110`}
          >
            <Coffee className="w-5 h-5" strokeWidth={2.2} />
          </span>
          <span className="font-display text-xl font-600 tracking-tight">
            <span className={scrolled ? 'text-espresso-800' : 'text-cream-50'}>Brew</span>
            <span className={scrolled ? 'text-caramel-600' : 'text-caramel-300'}> & </span>
            <span className={scrolled ? 'text-espresso-800' : 'text-cream-50'}>Baker</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`px-4 py-2 text-sm font-500 rounded-full transition-all duration-300 hover:bg-caramel-400/15 ${
                scrolled ? 'text-espresso-700' : 'text-cream-100/90'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#menu')}
            className="ml-2 px-5 py-2 text-sm font-600 rounded-full bg-caramel-500 text-white shadow-sm hover:bg-caramel-600 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
          >
            Order Now
          </button>
        </div>

        <button
          className="md:hidden grid place-items-center w-10 h-10 rounded-full transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className={`w-6 h-6 ${scrolled ? 'text-espresso-800' : 'text-cream-50'}`} />
          ) : (
            <MenuIcon className={`w-6 h-6 ${scrolled ? 'text-espresso-800' : 'text-cream-50'}`} />
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden glass border-t border-espresso-200/10 animate-fade-in">
          <div className="px-5 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 text-base font-500 text-espresso-700 rounded-lg hover:bg-caramel-400/12 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#menu')}
              className="mt-2 px-4 py-3 text-base font-600 rounded-lg bg-caramel-500 text-white text-center hover:bg-caramel-600 transition-colors"
            >
              Order Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
