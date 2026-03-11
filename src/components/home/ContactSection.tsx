import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhone, 
  faLocationDot,
  faArrowUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons';

export default function ContactSection() {
  const methods = [
    {
      title: 'Área Comercial',
      value: 'ventas@agroindustrialtivan.com / agroindustrialtivan@gmail.com',
      desc: 'Envíanos tus requerimientos o solicita cotizaciones formales.',
      icon: <FontAwesomeIcon icon={faEnvelope} className="w-8 h-8" />,
      action: 'Enviar correo',
      link: 'mailto:ventas@agroindustrialtivan.com'
    },
    {
      title: 'Llámanos',
      value: '+51 988 108 618 / +51 939 255 451',
      desc: 'Atención personalizada para consultas y pedidos directos.',
      icon: <FontAwesomeIcon icon={faPhone} className="w-8 h-8" />,
      action: 'Llamar ahora',
      link: 'tel:+51988108618'
    },
    {
      title: 'Ubicación',
      value: 'Puente Piedra, Perú',
      desc: 'Psje. Las Orquideas Mz. M Lt 1 – Puente Piedra – Perú',
      icon: <FontAwesomeIcon icon={faLocationDot} className="w-8 h-8" />,
      action: 'Ver en mapa',
      link: 'https://maps.google.com/?q=Psje.+Las+Orquideas+Mz.+Lt+1+Puente+Piedra+Peru'
    }
  ];

  return (
    <section id="contacto" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-sm font-bold text-brand-green uppercase tracking-[0.2em] mb-4">Contacto Directo</h2>
          <h3 className="text-4xl font-bold mb-6">Estamos para <span className="text-brand-green">Atenderte</span></h3>
          <p className="text-brand-dark/70">Elige el canal de tu preferencia y recibe asesoría técnica personalizada de inmediato.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {methods.map((method, i) => (
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
                className="inline-flex items-center gap-2 text-brand-dark font-bold text-sm bg-brand-lime px-6 py-3 rounded-xl hover:bg-brand-green hover:text-white transition-all w-full justify-center"
              >
                {method.action} <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
