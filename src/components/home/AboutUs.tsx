import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLeaf, 
  faRocket,
  faEye
} from '@fortawesome/free-solid-svg-icons';

export default function AboutUs() {
  return (
    <section id="nosotros" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative" data-aos="fade-right">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-brand-green/5">
              <img 
                src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1200" 
                alt="Agroindustrial Tivan - Aliados del campo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-brand-lime p-8 rounded-3xl shadow-2xl hidden lg:block border-4 border-white">
              <FontAwesomeIcon icon={faLeaf} className="w-12 h-12 text-brand-dark" />
            </div>
          </div>
          
          <div data-aos="fade-left">
            <div className="inline-flex items-center gap-2 bg-brand-green/10 px-4 py-2 rounded-full mb-6">
              <span className="text-brand-green text-xs font-bold uppercase tracking-widest">Nuestra Esencia</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-8 leading-tight">
              Aliados Estratégicos del <span className="text-brand-green">Campo</span>
            </h2>
            <div className="space-y-6 text-brand-dark/70 text-lg leading-relaxed">
              <p>
                En Agroindustrial Tivan, somos aliados estratégicos del campo. Nos dedicamos a diseñar y ofrecer soluciones eficaces y sostenibles que responden a los desafíos actuales del sector agrícola.
              </p>
              <p>
                Nuestro enfoque combina la innovación tecnológica con una profunda investigación científica, manteniendo siempre un compromiso inquebrantable con el respeto por el medio ambiente.
              </p>
              <p>
                Creemos que cada agricultor tiene retos únicos, por lo que proporcionamos productos adaptados a las necesidades específicas de cada cultivo para maximizar su rendimiento.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div 
            className="bg-brand-light p-12 rounded-[2.5rem] border border-brand-green/10 hover:shadow-xl transition-all duration-500 group"
            data-aos="fade-up"
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-green mb-8 shadow-sm group-hover:bg-brand-green group-hover:text-white transition-colors">
              <FontAwesomeIcon icon={faRocket} className="text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Misión</h3>
            <p className="text-brand-dark/60 leading-relaxed text-lg">
              Impulsar la competitividad y sostenibilidad del sector agrícola mediante el desarrollo y suministro de soluciones tecnológicas de vanguardia. Nos comprometemos a transformar la investigación científica en herramientas prácticas que optimicen la sanidad, nutrición y rendimiento de los cultivos, garantizando siempre el respeto por el entorno natural y el éxito económico de nuestros aliados.
            </p>
          </div>

          <div 
            className="bg-brand-dark p-12 rounded-[2.5rem] text-white hover:shadow-xl transition-all duration-500 group"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:bg-brand-lime group-hover:text-brand-dark transition-colors">
              <FontAwesomeIcon icon={faEye} className="text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-6">Visión</h3>
            <p className="text-white/70 leading-relaxed text-lg">
              Consolidarnos como la compañía referente en el mercado nacional de soluciones agrícolas integrales, siendo reconocidos por nuestra capacidad de innovación en el manejo etológico y biotecnológico. Aspiramos a liderar la transición hacia una agricultura de precisión, estableciendo nuevos estándares de eficiencia y responsabilidad ambiental en toda la cadena productiva.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
