import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSeedling, 
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { 
  faInstagram, 
  faFacebook, 
  faLinkedinIn,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark pt-20">
      {/* Hero Socials Sidebar */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 hidden xl:flex flex-col gap-8 items-center" data-aos="fade-right" data-aos-delay="800">
        <div className="w-px h-24 bg-gradient-to-t from-brand-lime to-transparent" />
        <a href="https://www.facebook.com/Agroindustrialtivan" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-lime transition-all hover:scale-125"><FontAwesomeIcon icon={faFacebook} className="text-xl" /></a>
        <a href="https://www.instagram.com/agroindustrialtivan/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-lime transition-all hover:scale-125"><FontAwesomeIcon icon={faInstagram} className="text-xl" /></a>
        <a href="https://www.linkedin.com/in/agroindustrialtivan" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-lime transition-all hover:scale-125"><FontAwesomeIcon icon={faLinkedinIn} className="text-xl" /></a>
        <a href="http://www.youtube.com/@AGROTIVAN" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-lime transition-all hover:scale-125"><FontAwesomeIcon icon={faYoutube} className="text-xl" /></a>
        <div className="w-px h-24 bg-gradient-to-b from-brand-lime to-transparent" />
      </div>

      {/* Static Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=2000" 
          alt="Campo agrícola" 
          className="w-full h-full object-cover brightness-[0.2]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">
        <div data-aos="fade-right">
          <div className="inline-flex items-center gap-2 bg-brand-lime/20 backdrop-blur-sm border border-brand-lime/30 px-4 py-2 rounded-full mb-6">
            <FontAwesomeIcon icon={faSeedling} className="w-4 h-4 text-brand-lime" />
            <span className="text-brand-lime text-xs font-bold uppercase tracking-widest">Innovación Agrícola</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
            Nutriendo el <span className="text-brand-lime">Futuro</span> de tus Cultivos
          </h1>
          <p className="text-lg text-white/80 mb-10 max-w-lg leading-relaxed">
            En Agroindustrial Tivan, transformamos la agricultura con fertilizantes de alta calidad y soluciones sostenibles diseñadas para maximizar tu productividad.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/catalogo" className="bg-brand-green hover:bg-brand-green/90 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all hover:scale-105 group">
              Ver Catálogo <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/#nosotros" className="px-8 py-3 rounded-full font-semibold text-white border border-white/30 hover:bg-white/10 transition-all">
              Nuestra Historia
            </Link>
          </div>
        </div>
        
        {/* 3 Product Images Layout */}
        <div className="relative grid grid-cols-2 gap-4" data-aos="fade-left">
          <div className="space-y-4">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 transform hover:scale-105 transition-transform duration-500">
              <img 
                src="./hero_3.png" 
                alt="Producto 1" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10 transform translate-x-8 hover:scale-105 transition-transform duration-500">
              <img 
                src="./hero_2.png" 
                alt="Producto 2" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="flex items-center">
            <div className="aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 transform -translate-y-8 hover:scale-105 transition-transform duration-500">
              <img 
                src="./trampa_hero.jpeg" 
                alt="Producto 3" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-lime/10 rounded-full blur-3xl -z-10 animate-pulse" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-brand-green/10 rounded-full blur-3xl -z-10 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
