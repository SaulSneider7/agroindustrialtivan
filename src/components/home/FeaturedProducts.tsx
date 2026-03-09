import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStar, 
  faChevronRight,
  faShieldHalved,
  faSeedling,
  faDroplet,
  faArrowUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons';

export default function FeaturedProducts() {
  const products = [
    {
      title: 'Trampa de Ala (WingTrap)',
      category: 'Monitoreo',
      desc: 'Sistema líder en captura masiva para el control biológico de plagas en cultivos críticos.',
      icon: faShieldHalved,
      img: './trampa_ala.jpg'
    },
    {
      title: 'CreciFácil Trihormonal',
      category: 'Bioestimulante',
      desc: 'Maximiza el desarrollo radicular y el crecimiento vigoroso con tecnología trihormonal avanzada.',
      icon: faSeedling,
      img: './crecifacil_trihormonal.jpg'
    },
    {
      title: 'Ultra Wett',
      category: 'Coadyuvante',
      desc: 'Optimiza cada gota de tu aplicación mejorando la adherencia y penetración foliar.',
      icon: faDroplet,
      img: './ultra_wett.jpg'
    }
  ];

  const slugify = (name: string) => name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '');

  return (
    <section className="py-24 bg-brand-light relative overflow-hidden">
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
            <Link to="/catalogo" className="group flex items-center gap-2 text-brand-green font-bold hover:gap-4 transition-all">
              Explorar catálogo completo <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div 
              key={i} 
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-brand-green/5 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-green shadow-lg">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-10 flex flex-col flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-brand-light rounded-2xl flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                    <FontAwesomeIcon icon={product.icon} className="text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-green transition-colors">{product.title}</h3>
                </div>
                <p className="text-brand-dark/60 text-sm leading-relaxed mb-8 flex-1">{product.desc}</p>
                <Link 
                  to={`/producto/${slugify(product.title)}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-2xl bg-brand-dark text-white font-bold text-sm hover:bg-brand-green transition-all shadow-lg hover:shadow-brand-green/20"
                >
                  Ver Detalles <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
