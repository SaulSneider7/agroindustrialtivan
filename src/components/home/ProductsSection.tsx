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
      img: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Nutrición de cultivos',
      desc: 'Fertilizantes edáficos, foliares, Bioestimulantes, Hormonas y Enraizantes.',
      note: 'Máximo rendimiento y vigor.',
      icon: faSeedling,
      img: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&q=80&w=600',
      subs: ['Fertilizantes', 'Bioestimulantes-hormonas-enraizantes']
    },
    {
      title: 'Trampas Entomológicas',
      desc: 'Trampas para mosca de la fruta y sistemas de monitoreo especializado.',
      note: 'Control etológico avanzado.',
      icon: faEye,
      img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=600',
      subs: ['Mosca de la fruta', 'Otras trampas para monitoreo']
    },
    {
      title: 'Atrayentes Alimenticios y Semioquímicos',
      desc: 'Lures, Proteínas hidrolizadas y atrayentes específicos para plagas.',
      note: 'Tecnología de atracción precisa.',
      icon: faFlaskVial,
      img: 'https://images.unsplash.com/photo-1532187863486-abf9d3a36e98?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Pegamentos Entomológicos',
      desc: 'Adhesivos especializados para trampas y barreras físicas.',
      note: 'Captura mecánica eficiente.',
      icon: faShieldHalved,
      img: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Coadyuvantes y correctores',
      desc: 'Reguladores de pH, Ablandadores de agua y Optimizadores de aplicación.',
      note: 'Eficiencia en cada gota.',
      icon: faDroplet,
      img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Accesorios',
      desc: 'Laminillas, Ganchos, Canastillas y repuestos para sistemas de monitoreo.',
      note: 'Complementos técnicos.',
      icon: faTools,
      img: 'https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <section id="productos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-sm font-bold text-brand-green uppercase tracking-[0.2em] mb-4">Catálogo de Soluciones</h2>
          <h3 className="text-4xl font-bold mb-6">Líneas Especializadas para el <span className="text-brand-green">Éxito Agrícola</span></h3>
          <p className="text-brand-dark/70">Contamos con una amplia gama de productos diseñados para cubrir cada necesidad técnica del campo moderno.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, i) => (
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
                
                {category.subs && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {category.subs.map((sub, sIdx) => (
                      <span key={sIdx} className="text-[10px] bg-brand-green/10 text-brand-green px-2 py-1 rounded-md font-bold uppercase tracking-tighter">
                        {sub}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-brand-green font-bold text-xs uppercase tracking-wider mb-6">{category.note}</p>
                <Link 
                  to={`/catalogo?categoria=${encodeURIComponent(category.title)}`}
                  className="flex items-center gap-2 text-brand-green font-bold text-sm group/btn"
                >
                  Ver línea completa <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
