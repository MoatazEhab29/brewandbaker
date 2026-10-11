import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-cream-50 text-espresso-800 font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Location />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
