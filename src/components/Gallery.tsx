import { useScrollReveal } from '@/hooks/useScrollReveal';

const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/4916548/pexels-photo-4916548.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&fit=crop',
    alt: 'Cozy cafe interior with warm lighting and modern furniture',
    label: 'The Seating',
    span: 'lg:row-span-2',
  },
  {
    url: 'https://images.pexels.com/photos/459489/pexels-photo-459489.jpeg?auto=compress&cs=tinysrgb&w=900&h=650&fit=crop',
    alt: 'Latte with heart-shaped art in a cup on a wooden table',
    label: 'The Latte Art',
    span: '',
  },
  {
    url: 'https://images.pexels.com/photos/7405059/pexels-photo-7405059.jpeg?auto=compress&cs=tinysrgb&w=900&h=650&fit=crop',
    alt: 'Freshly baked pastries and breads in a glass display case',
    label: 'The Display Case',
    span: '',
  },
  {
    url: 'https://images.pexels.com/photos/2159067/pexels-photo-2159067.jpeg?auto=compress&cs=tinysrgb&w=900&h=650&fit=crop',
    alt: 'Barista pouring steamed milk to create latte art',
    label: 'The Craft',
    span: '',
  },
  {
    url: 'https://images.pexels.com/photos/35518412/pexels-photo-35518412.jpeg?auto=compress&cs=tinysrgb&w=900&h=650&fit=crop',
    alt: 'Warm and inviting rustic cafe interior with vintage decor',
    label: 'The Vibe',
    span: '',
  },
];

export default function Gallery() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="gallery" ref={ref} className="relative py-24 sm:py-32 bg-cream-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="reveal text-caramel-600 font-600 text-sm tracking-widest uppercase">
            Atmosphere
          </span>
          <h2 className="reveal font-display text-3xl sm:text-4xl lg:text-5xl font-400 text-espresso-800 mt-3">
            A space that feels like <span className="italic text-caramel-600">home</span>
          </h2>
          <p className="reveal mt-4 text-espresso-500 text-lg">
            Warm corners, gentle light, and the aroma of fresh baking — come on in.
          </p>
        </div>

        <div className="reveal mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[240px]">
          {galleryImages.map((img, idx) => (
            <figure
              key={idx}
              className={`group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 ${img.span}`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <figcaption className="absolute bottom-0 inset-x-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-cream-50 font-display text-lg font-500">{img.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
