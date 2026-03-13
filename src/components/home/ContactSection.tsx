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
      icon: <FontAwesomeIcon icon={faEnvelope} className="w-9 h-9" />,
      action: 'Enviar correo',
      link: 'mailto:ventas@agroindustrialtivan.com'
    },
    {
      title: 'Llámanos',
      value: '+51 988 108 618 / +51 939 255 451',
      desc: 'Atención personalizada para consultas y pedidos directos.',
      icon: <FontAwesomeIcon icon={faPhone} className="w-9 h-9" />,
      action: 'Llamar ahora',
      link: 'tel:+51988108618'
    },
    {
      title: 'Ubicación',
      value: 'Puente Piedra, Perú',
      desc: 'Psje. Las Orquideas Mz. M Lt 1 – Puente Piedra – Perú',
      icon: <FontAwesomeIcon icon={faLocationDot} className="w-9 h-9" />,
      action: 'Ver en mapa',
      link: 'https://maps.google.com/?q=Psje.+Las+Orquideas+Mz.+Lt+1+Puente+Piedra+Peru'
    }
  ];

  return (
    <section id="contacto" className="py-28 bg-brand-light">
      <div className="max-w-[1440px] mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">

          <h2 className="text-base font-bold text-brand-green uppercase tracking-[0.25em] mb-6">
            Contacto Directo
          </h2>

          <h3 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Estamos para <span className="text-brand-green">Atenderte</span>
          </h3>

          <p className="text-lg md:text-xl text-brand-dark/70 leading-relaxed">
            Elige el canal de tu preferencia y recibe asesoría técnica personalizada de inmediato.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {methods.map((method, i) => (
            <div 
              key={i} 
              className="bg-white p-12 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-brand-green/5 group"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >

              {/* Icon */}
              <div className="bg-brand-green text-brand-lime w-18 h-18 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {method.icon}
              </div>

              {/* Title */}
              <h4 className="text-2xl font-bold mb-3 text-brand-dark">
                {method.title}
              </h4>

              {/* Value */}
              <p className="text-brand-green font-bold text-lg mb-5 break-words leading-relaxed">
                {method.value}
              </p>

              {/* Description */}
              <p className="text-brand-dark/70 text-base mb-8 leading-relaxed">
                {method.desc}
              </p>

              {/* Button */}
              <a 
                href={method.link} 
                className="inline-flex items-center gap-3 text-brand-dark font-bold text-base bg-brand-lime px-7 py-4 rounded-xl hover:bg-brand-green hover:text-white transition-all w-full justify-center"
              >
                {method.action}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-4 h-4" />
              </a>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}