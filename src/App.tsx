import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Catalog from './components/Catalog';
import Hero from './components/home/Hero';
import Stats from './components/home/Stats';
import FeaturedProducts from './components/home/FeaturedProducts';
import AboutUs from './components/home/AboutUs';
import ProductsSection from './components/home/ProductsSection';
import ContactSection from './components/home/ContactSection';
import SocialMediaSection from './components/home/SocialMediaSection';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // Wait a bit for the page to render before scrolling to the hash
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const productCategories = [
    { name: 'Protección de cultivos' },
    { 
      name: 'Nutrición de cultivos', 
      subcategories: ['Fertilizantes', 'Bioestimulantes-hormonas-enraizantes'] 
    },
    { 
      name: 'Trampas Entomológicas', 
      subcategories: ['Mosca de la fruta', 'Otras trampas para monitoreo'] 
    },
    { name: 'Atrayentes Alimenticios y Semioquímicos' },
    { name: 'Pegamentos Entomológicos' },
    { name: 'Coadyuvantes y correctores' },
    { name: 'Accesorios' }
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="min-h-screen selection:bg-brand-lime selection:text-brand-dark">
      <ScrollToTop />
      <Navbar productCategories={productCategories} />

      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Stats />
              <FeaturedProducts />
              <AboutUs />
              <ProductsSection />
              <ContactSection />
              <SocialMediaSection />
            </>
          } />
          <Route path="/catalogo" element={<Catalog />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
