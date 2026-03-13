import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBug,
  faSeedling,
  faEye,
  faFlaskVial,
  faShieldHalved,
  faDroplet,
  faTools,
  faArrowUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons';

export default function ProductsSection() {
  const categories = [
    {
      title: 'Protección de cultivos',
      desc: 'Insecticidas, Fungicidas, Inductores de defensa y Reguladores de crecimiento.',
      note: 'Sanidad vegetal integral.',
      icon: faBug,
      img: './eco_oil.png'
    },
    {
      title: 'Nutrición de cultivos',
      desc: 'Fertilizantes edáficos, foliares, Bioestimulantes, Hormonas y Enraizantes.',
      note: 'Máximo rendimiento y vigor.',
      icon: faSeedling,
      img: './ecopower_micro_mix.png',
      subs: ['Fertilizantes', 'Bioestimulantes-hormonas-enraizantes']
    },
    {
      title: 'Trampas Entomológicas',
      desc: 'Trampas para mosca de la fruta y sistemas de monitoreo especializado.',
      note: 'Control etológico avanzado.',
      icon: faEye,
      img: './trampa_multilure.png',
      subs: ['Mosca de la fruta', 'Otras trampas para monitoreo']
    },
    {
      title: 'Atrayentes Alimenticios y Semioquímicos',
      desc: 'Lures, Proteínas hidrolizadas y atrayentes específicos para plagas.',
      note: 'Tecnología de atracción precisa.',
      icon: faFlaskVial,
      img: './fruit_fly_lure.png'
    },
    {
      title: 'Pegamentos Entomológicos',
      desc: 'Adhesivos especializados para trampas y barreras físicas.',
      note: 'Captura mecánica eficiente.',
      icon: faShieldHalved,
      img: './pegamento_better.png'
    },
    {
      title: 'Coadyuvantes y correctores',
      desc: 'Reguladores de pH, Ablandadores de agua y Optimizadores de aplicación.',
      note: 'Eficiencia en cada gota.',
      icon: faDroplet,
      img: './ultra_wett.png'
    },
    {
      title: 'Accesorios',
      desc: 'Laminillas, Ganchos, Canastillas y repuestos para sistemas de monitoreo.',
      note: 'Complementos técnicos.',
      icon: faTools,
      img: 'laminilla_para_trampa_jackson.png'
    }
  ];

  return (
    <section id="productos" className="py-28 bg-white">
      <div className="max-w-[1440px] mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">

          <h2 className="text-base font-bold text-brand-green uppercase tracking-[0.25em] mb-6">
            Catálogo de Soluciones
          </h2>

          <h3 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Líneas Especializadas para el
            <span className="text-brand-green"> Éxito Agrícola</span>
          </h3>

          <p className="text-lg md:text-xl text-brand-dark/70 leading-relaxed">
            Contamos con una amplia gama de productos diseñados para cubrir cada necesidad técnica del campo moderno.
          </p>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {categories.map((category, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl bg-white border border-brand-green/10 shadow-lg hover:shadow-2xl transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >

              {/* Imagen */}
              <div className="h-72 flex items-center justify-center overflow-hidden bg-white">
                <img
                  src={category.img}
                  alt={category.title}
                  className="max-h-full max-w-[90%] object-contain group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-10">

                {/* Icono */}
                <div className="bg-brand-green text-brand-lime w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform">
                  <FontAwesomeIcon icon={category.icon} className="w-9 h-9" />
                </div>

                {/* Título */}
                <h4 className="text-2xl font-bold mb-4 text-brand-dark">
                  {category.title}
                </h4>

                {/* Descripción */}
                <p className="text-base text-brand-dark/70 mb-6 leading-relaxed">
                  {category.desc}
                </p>

                {/* Subcategorías */}
                {category.subs && (
                  <div className="mb-6 flex flex-wrap gap-2">
                    {category.subs.map((sub, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs bg-brand-green/10 text-brand-green px-3 py-1.5 rounded-md font-bold uppercase tracking-wide"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                )}

                {/* Nota */}
                <p className="text-brand-green font-bold text-sm uppercase tracking-wider mb-6">
                  {category.note}
                </p>

                {/* Botón */}
                <Link
                  to={`/catalogo?categoria=${encodeURIComponent(category.title)}`}
                  className="flex items-center gap-3 text-brand-green font-bold text-base group/btn"
                >
                  Ver línea completa
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                  />
                </Link>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}