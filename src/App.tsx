import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  faLeaf,
  faSeedling,
  faFlask,
  faShieldHalved,
  faChevronRight,
  faChevronDown,
  faPhone,
  faEnvelope,
  faLocationDot,
  faArrowUpRightFromSquare,
  faDroplet,
  faWind,
  faBars,
  faXmark,
  faBug,
  faEye,
  faFlaskVial,
  faTools,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faFacebook,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  const productCategories = [
    'Protección de Cultivos',
    'Nutrición de Cultivos',
    'Trampas y Monitoreo',
    'Atrayentes y Semioquímicos',
    'Coadyuvantes y Correctores',
    'Accesorios'
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen selection:bg-brand-lime selection:text-brand-dark">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-colors duration-300 border-b border-brand-green/10 ${isMenuOpen ? 'bg-white' : 'bg-white/70 backdrop-blur-lg'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#inicio" className="flex items-center group">
            <img
              src="./logo-agroindustrialtivan.png" // ← ajusta tu nombre real
              alt="Agroindustrial Tivan"
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#inicio" className="hover:text-brand-green transition-colors">Inicio</a>
            <a href="#nosotros" className="hover:text-brand-green transition-colors">Nosotros</a>

            {/* Products Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-brand-green transition-colors py-8">
                Productos <FontAwesomeIcon icon={faChevronDown} className={`w-3 h-3 transition-transform duration-300 ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <div className={`absolute top-full left-0 w-64 bg-white shadow-2xl rounded-2xl border border-brand-green/5 overflow-hidden transition-all duration-300 ${isProductsDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <div className="py-2">
                  {productCategories.map((cat, idx) => (
                    <a
                      key={idx}
                      href="#productos"
                      onClick={() => setIsProductsDropdownOpen(false)}
                      className="block px-6 py-3 text-brand-dark/70 hover:bg-brand-light hover:text-brand-green transition-colors"
                    >
                      {cat}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a href="#sostenibilidad" className="hover:text-brand-green transition-colors">Sostenibilidad</a>
            <a href="#contacto" className="btn-primary py-2 px-6 text-xs">Contactar</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-brand-dark hover:text-brand-green transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FontAwesomeIcon icon={faXmark} className="w-6 h-6" /> : <FontAwesomeIcon icon={faBars} className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}

        <div className={`md:hidden fixed inset-0 top-20 bg-white z-40 transition-transform duration-300 ease-in-out shadow-2xl ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col p-6 gap-6 text-lg font-semibold overflow-y-auto h-full pb-32">
            <a href="#inicio" onClick={closeMenu} className="hover:text-brand-green transition-colors border-b border-brand-green/5 pb-4">Inicio</a>
            <a href="#nosotros" onClick={closeMenu} className="hover:text-brand-green transition-colors border-b border-brand-green/5 pb-4">Nosotros</a>

            {/* Mobile Products Accordion */}
            <div className="border-b border-brand-green/5 pb-4">
              <button
                onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                className="flex items-center justify-between w-full hover:text-brand-green transition-colors"
              >
                Productos
                <FontAwesomeIcon icon={faChevronDown} className={`w-4 h-4 transition-transform duration-300 ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
              </button>

              <div className={`mt-4 flex flex-col gap-4 pl-4 overflow-hidden transition-all duration-300 ${isMobileProductsOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                {productCategories.map((cat, idx) => (
                  <a
                    key={idx}
                    href="#productos"
                    onClick={closeMenu}
                    className="text-base font-medium text-brand-dark/60 hover:text-brand-green transition-colors"
                  >
                    {cat}
                  </a>
                ))}
              </div>
            </div>

            <a href="#sostenibilidad" onClick={closeMenu} className="hover:text-brand-green transition-colors border-b border-brand-green/5 pb-4">Sostenibilidad</a>
            <a href="#contacto" onClick={closeMenu} className="btn-primary text-center py-4">Contactar</a>

            <div className="mt-8 pt-8 border-t border-brand-green/10">
              <p className="text-xs text-brand-dark/40 uppercase tracking-widest mb-4">Síguenos</p>
              <div className="flex gap-4">
                <a href="#" className="bg-brand-light p-3 rounded-full text-brand-green">
                  <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                </a>
                <a href="#" className="bg-brand-light p-3 rounded-full text-brand-green">
                  <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
                </a>
                <a href="#" className="bg-brand-light p-3 rounded-full text-brand-green">
                  <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=2000"
            alt="Campo agrícola"
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
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
              <a href="#productos" className="btn-secondary flex items-center gap-2 group">
                Ver Productos <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#nosotros" className="px-8 py-3 rounded-full font-semibold text-white border border-white/30 hover:bg-white/10 transition-all">
                Nuestra Historia
              </a>
            </div>
          </div>

          <div className="hidden md:block" data-aos="zoom-in" data-aos-delay="200">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-lime/20 rounded-3xl blur-2xl animate-pulse" />
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800"
                alt="Fertilizante"
                className="relative rounded-3xl shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-brand-green text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Años de Experiencia', value: '15+' },
              { label: 'Clientes Satisfechos', value: '500+' },
              { label: 'Productos Innovadores', value: '24' },
              { label: 'Hectáreas Nutridas', value: '10k+' },
            ].map((stat, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="text-4xl font-bold text-brand-lime mb-2">{stat.value}</div>
                <div className="text-sm text-white/70 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-brand-light relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-green/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div data-aos="fade-right">
              <div className="inline-flex items-center gap-2 bg-brand-green/10 px-4 py-2 rounded-full mb-4">
                <FontAwesomeIcon icon={faStar} className="text-brand-green text-xs" />
                <span className="text-brand-green text-xs font-bold uppercase tracking-widest">Selección Premium</span>
              </div>
              <h2 className="text-4xl font-bold text-brand-dark">Productos <span className="text-brand-green">Destacados</span></h2>
              <p className="text-brand-dark/60 mt-4 max-w-lg">Nuestras soluciones más potentes y solicitadas, diseñadas para transformar la productividad de tu campo.</p>
            </div>
            <div data-aos="fade-left">
              <a href="#productos" className="group flex items-center gap-2 text-brand-green font-bold hover:gap-4 transition-all">
                Explorar catálogo completo <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Pegamento de Trampas',
                category: 'Pegamentos',
                desc: 'Maximiza el desarrollo radicular y el crecimiento vigoroso con tecnología trihormonal avanzada.',
                icon: faSeedling,
                img: 'pegamento.jpeg'
              },
              {
                title: 'Trampa',
                category: 'Monitoreo',
                desc: 'Sistema líder en captura masiva para el control biológico de plagas en cultivos críticos.',
                icon: faShieldHalved,
                img: './trampa.jpeg'
              },
              {
                title: 'Foleares',
                category: 'Coadyuvante',
                desc: 'Optimiza cada gota de tu aplicación mejorando la adherencia y penetración foliar.',
                icon: faDroplet,
                img: 'foleares.jpeg'
              }
            ].map((product, i) => (
              <div
                key={i}
                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-brand-green/5"
                data-aos="fade-up"
                data-aos-delay={i * 150}
              >
                <div className="relative h-[300px] bg-brand-light/30 overflow-hidden flex items-center justify-center p-6">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="max-w-full max-h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-green shadow-lg">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-brand-light rounded-2xl flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                      <FontAwesomeIcon icon={product.icon} className="text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-green transition-colors">{product.title}</h3>
                  </div>
                  <p className="text-brand-dark/60 text-sm leading-relaxed mb-8">{product.desc}</p>
                  <a href="#contacto" className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-2xl bg-brand-dark text-white font-bold text-sm hover:bg-brand-green transition-all shadow-lg hover:shadow-brand-green/20">
                    ver productos <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* About Us */}
      <section id="nosotros" className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative" data-aos="fade-right">
              <img
                src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=800"
                alt="Investigación"
                className="rounded-3xl shadow-xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-brand-lime p-8 rounded-2xl shadow-xl hidden lg:block">
                <FontAwesomeIcon icon={faFlask} className="w-12 h-12 text-brand-dark" />
              </div>
            </div>

            <div data-aos="fade-left">
              <h2 className="text-sm font-bold text-brand-green uppercase tracking-[0.2em] mb-4">Sobre Nosotros</h2>
              <h3 className="text-4xl font-bold mb-6 leading-tight">
                Comprometidos con el Desarrollo del <span className="text-brand-green">Campo</span>
              </h3>
              <p className="text-brand-dark/70 mb-6 leading-relaxed">
                En Agroindustrial Tivan, nos dedicamos a ofrecer soluciones eficaces y sostenibles para el sector agrícola. Con muchos años de experiencia, brindamos fertilizantes de alta calidad que promueven un crecimiento saludable de los cultivos y aumentan la productividad.
              </p>
              <p className="text-brand-dark/70 mb-8 leading-relaxed">
                Nuestro compromiso con la innovación, la investigación y el respeto por el medio ambiente nos permite proporcionar productos adaptados a las necesidades específicas de cada agricultor. Trabajamos con pasión para apoyar el desarrollo del campo y contribuir al éxito de nuestros clientes.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="bg-brand-green/10 p-2 rounded-lg">
                    <FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Calidad Garantizada</h4>
                    <p className="text-xs text-brand-dark/60">Certificación internacional.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-brand-green/10 p-2 rounded-lg">
                    <FontAwesomeIcon icon={faDroplet} className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Sostenibilidad</h4>
                    <p className="text-xs text-brand-dark/60">Respeto al ecosistema.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-sm font-bold text-brand-green uppercase tracking-[0.2em] mb-4">Catálogo de Soluciones</h2>
            <h3 className="text-4xl font-bold mb-6">Líneas Especializadas para el <span className="text-brand-green">Éxito Agrícola</span></h3>
            <p className="text-brand-dark/70">Contamos con una amplia gama de productos diseñados para cubrir cada necesidad técnica del campo moderno.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Protección de Cultivos',
                desc: 'Insecticidas, Fungicidas, Inductores de defensa y Reguladores de crecimiento.',
                note: 'Categoría esencial para la sanidad vegetal.',
                icon: faBug,
                img: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=600'
              },
              {
                title: 'Nutrición de Cultivos',
                desc: 'Fertilizantes edáficos, foliares, Microelementos, NPK, Ácidos húmicos y fúlvicos.',
                note: 'Máxima coherencia técnica para el rendimiento.',
                icon: faSeedling,
                img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=600'
              },
              {
                title: 'Trampas y Monitoreo',
                desc: 'Trampas para mosca de la fruta, diaphorina, escarabajos (Jackson, McPhail, Funnel, etc).',
                note: 'Clave para el control biológico efectivo.',
                icon: faEye,
                img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=600'
              },
              {
                title: 'Atrayentes y Semioquímicos',
                desc: 'Trimedlure, Tripslure, Nu-lure, Torula, Bórax y Proteína hidrolizada.',
                note: 'Lures especializados para manejo de plagas.',
                icon: faFlaskVial,
                img: 'https://i.pinimg.com/736x/f3/ac/93/f3ac937d72269d8c33ce5534de1abb61.jpg'
              },
              {
                title: 'Coadyuvantes y Correctores',
                desc: 'Reguladores de pH, Ablandadores de agua, Detergente y Aceite agrícola.',
                note: 'Optimización crítica de aplicaciones.',
                icon: faDroplet,
                img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=600'
              },
              {
                title: 'Accesorios',
                desc: 'Laminillas, Ganchos, Canastillas, Carruseles y Repuestos de trampas.',
                note: 'Complementos físicos indispensables.',
                icon: faTools,
                img: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=600'
              }
            ].map((category, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-3xl bg-brand-light border border-brand-green/5 hover:shadow-2xl transition-all duration-500"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={category.img}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="bg-brand-green text-brand-lime w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                    <FontAwesomeIcon icon={category.icon} className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{category.title}</h4>
                  <p className="text-brand-dark/60 text-sm mb-4 leading-relaxed">{category.desc}</p>
                  <p className="text-brand-green font-bold text-xs uppercase tracking-wider mb-6">{category.note}</p>
                  <a href="#" className="flex items-center gap-2 text-brand-green font-bold text-sm group/btn">
                    Ver línea completa <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center" data-aos="fade-up">
            <a href="#" className="btn-primary inline-flex items-center gap-2 group">
              Ver todos los productos <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sostenibilidad" className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <FontAwesomeIcon icon={faWind} className="w-full h-full text-brand-lime" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <h2 className="text-sm font-bold text-brand-lime uppercase tracking-[0.2em] mb-4">Eco-Compromiso</h2>
              <h3 className="text-4xl font-bold mb-8 leading-tight">Innovación que Respeta el <span className="text-brand-lime">Medio Ambiente</span></h3>
              <div className="space-y-8">
                {[
                  { title: 'Investigación Verde', desc: 'Desarrollamos fórmulas que minimizan el impacto ambiental sin sacrificar la eficacia.' },
                  { title: 'Producción Limpia', desc: 'Procesos industriales optimizados para reducir la huella de carbono.' },
                  { title: 'Educación al Agricultor', desc: 'Asesoría técnica para el uso responsable y eficiente de los recursos.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 bg-brand-lime/20 p-2 rounded-lg h-fit">
                      <div className="w-2 h-2 bg-brand-lime rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-white/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=400"
                alt="Naturaleza"
                className="rounded-2xl w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=400"
                alt="Campo verde"
                className="rounded-2xl w-full h-64 object-cover mt-8"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-sm font-bold text-brand-green uppercase tracking-[0.2em] mb-4">Contacto Directo</h2>
            <h3 className="text-4xl font-bold mb-6">Estamos para <span className="text-brand-green">Atenderte</span></h3>
            <p className="text-brand-dark/70">Elige el canal de tu preferencia y recibe asesoría técnica personalizada de inmediato.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Área Comercial',
                value: 'ventas@agroindustrialtivan.com',
                desc: 'Envíanos tus requerimientos o solicita cotizaciones formales.',
                icon: <FontAwesomeIcon icon={faEnvelope} className="w-8 h-8" />,
                action: 'Enviar correo',
                link: 'mailto:ventas@agroindustrialtivan.com'
              },
              {
                title: 'Llámanos',
                value: '+51 939 255 451',
                desc: 'Atención personalizada para consultas y pedidos directos.',
                icon: <FontAwesomeIcon icon={faPhone} className="w-8 h-8" />,
                action: 'Llamar ahora',
                link: 'tel:+51939255451'
              },
              {
                title: 'Ubicación',
                value: 'Puente Piedra, Perú',
                desc: 'Psje. Las Orquideas Mz. Lt 1 – Puente Piedra – Perú',
                icon: <FontAwesomeIcon icon={faLocationDot} className="w-8 h-8" />,
                action: 'Ver en mapa',
                link: 'https://maps.google.com/?q=Psje.+Las+Orquideas+Mz.+Lt+1+Puente+Piedra+Peru'
              }
            ].map((method, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-brand-green/5 group"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="bg-brand-green text-brand-lime w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {method.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{method.title}</h4>
                <p className="text-brand-green font-bold mb-4 break-words">{method.value}</p>
                <p className="text-brand-dark/60 text-sm mb-8 leading-relaxed">{method.desc}</p>
                <a
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-dark font-bold text-sm bg-brand-lime px-6 py-3 rounded-xl hover:bg-brand-green hover:text-white transition-all w-full justify-center"
                >
                  {method.action} <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-brand-green rounded-[3rem] p-12 text-center text-white relative overflow-hidden" data-aos="zoom-in">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <FontAwesomeIcon icon={faLeaf} className="w-64 h-64 -rotate-12 -translate-x-20 -translate-y-20" />
            </div>
            <h4 className="text-2xl font-bold mb-4 relative z-10">¿Prefieres una respuesta inmediata?</h4>
            <p className="text-white/70 mb-8 max-w-xl mx-auto relative z-10">Nuestro equipo técnico está disponible en WhatsApp para resolver tus dudas sobre fertilización y rendimiento de cultivos.</p>
            <a
              href="https://wa.me/51939255451"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2 relative z-10"
            >
              Chatear por WhatsApp <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white pt-20 pb-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-brand-green p-2 rounded-lg">
                  <FontAwesomeIcon icon={faLeaf} className="text-brand-lime w-6 h-6" />
                </div>
                <span className="text-2xl font-bold tracking-tight">
                  Agroindustrial <span className="text-brand-lime">Tivan</span>
                </span>
              </div>
              <p className="text-white/60 max-w-md leading-relaxed mb-8">
                Líderes en soluciones agrícolas sostenibles. Transformamos el campo con tecnología y pasión por la tierra.
              </p>
              <div className="flex gap-4">
                <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-brand-lime hover:text-brand-dark transition-all">
                  <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-brand-lime hover:text-brand-dark transition-all">
                  <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-brand-lime hover:text-brand-dark transition-all">
                  <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-brand-lime uppercase tracking-widest text-xs">Enlaces Rápidos</h4>
              <ul className="space-y-4 text-white/60 text-sm">
                <li><a href="#inicio" className="hover:text-brand-lime transition-colors">Inicio</a></li>
                <li><a href="#nosotros" className="hover:text-brand-lime transition-colors">Nosotros</a></li>
                <li><a href="#productos" className="hover:text-brand-lime transition-colors">Productos</a></li>
                <li><a href="#sostenibilidad" className="hover:text-brand-lime transition-colors">Sostenibilidad</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-brand-lime uppercase tracking-widest text-xs">Contacto</h4>
              <ul className="space-y-4 text-white/60 text-sm">
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4 text-brand-lime shrink-0 mt-1" />
                  Psje. Las Orquideas Mz. Lt 1 – Puente Piedra – Perú
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faPhone} className="w-4 h-4 text-brand-lime" />
                  +51 939 255 451
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 text-brand-lime" />
                  ventas@agroindustrialtivan.com
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
            <p>© {new Date().getFullYear()} Agroindustrial Tivan S.A. Todos los derechos reservados.</p>
            <p className="flex items-center gap-1">
              Desarrollado por <a href="https://tu-sitioweb.com" target="_blank" rel="noopener noreferrer" className="text-brand-lime hover:underline">tu-sitioweb.com</a>
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/51939255451?text=Hola,%20me%20gustaría%20recibir%20más%20información%20sobre%20sus%20productos."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
        aria-label="Contactar por WhatsApp"
      >
        <div className="absolute -top-12 right-0 bg-white text-brand-dark text-xs font-bold py-2 px-4 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          ¿En qué podemos ayudarte?
          <div className="absolute -bottom-1 right-5 w-2 h-2 bg-white rotate-45" />
        </div>
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
}
