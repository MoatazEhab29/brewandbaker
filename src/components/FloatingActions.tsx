import { useEffect, useState } from 'react';
import { MessageCircle, Calendar, X } from 'lucide-react';

const whatsappNumber = '201001234567';
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  'Hello Brew & Baker! I would like to place an order.'
)}`;

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Expanded action menu */}
      {expanded && (
        <div className="fixed bottom-24 right-5 sm:right-8 z-40 flex flex-col gap-2 animate-fade-up">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white rounded-2xl shadow-xl border border-cream-200 px-5 py-3.5 hover:bg-cream-50 transition-colors group"
            onClick={() => setExpanded(false)}
          >
            <span className="grid place-items-center w-9 h-9 rounded-full bg-green-500 text-white">
              <MessageCircle className="w-5 h-5" />
            </span>
            <div>
              <p className="text-sm font-600 text-espresso-800">Order via WhatsApp</p>
              <p className="text-xs text-espresso-500">Quick & easy</p>
            </div>
          </a>
          <button
            onClick={() => {
              setExpanded(false);
              document.querySelector('#location')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-3 bg-white rounded-2xl shadow-xl border border-cream-200 px-5 py-3.5 hover:bg-cream-50 transition-colors text-left"
          >
            <span className="grid place-items-center w-9 h-9 rounded-full bg-caramel-500 text-white">
              <Calendar className="w-5 h-5" />
            </span>
            <div>
              <p className="text-sm font-600 text-espresso-800">Reserve a Table</p>
              <p className="text-xs text-espresso-500">Save your spot</p>
            </div>
          </button>
        </div>
      )}

      {/* Floating action button */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className={`fixed bottom-5 right-5 sm:right-8 z-50 grid place-items-center w-14 h-14 rounded-full shadow-2xl transition-all duration-500 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'
        } ${expanded ? 'bg-espresso-700' : 'bg-green-500 hover:bg-green-600'}`}
        aria-label="Order or reserve"
      >
        {expanded ? (
          <X className="w-6 h-6 text-white animate-fade-in" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white animate-gentle-bob" />
        )}
        {!expanded && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-caramel-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-caramel-500 border-2 border-green-500" />
          </span>
        )}
      </button>
    </>
  );
}
