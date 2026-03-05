import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFlask, 
  faShieldHalved,
  faDroplet
} from '@fortawesome/free-solid-svg-icons';

export default function AboutUs() {
  return (
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
  );
}
