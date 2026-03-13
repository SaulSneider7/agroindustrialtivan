import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebook, 
  faInstagram, 
  faLinkedinIn,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

export default function SocialMediaSection() {

  const socials = [
    { icon: faFacebook, name: 'Facebook', color: 'hover:bg-[#1877F2]', link: 'https://www.facebook.com/Agroindustrialtivan' },
    { icon: faInstagram, name: 'Instagram', color: 'hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]', link: 'https://www.instagram.com/agroindustrialtivan/' },
    { icon: faLinkedinIn, name: 'LinkedIn', color: 'hover:bg-[#0A66C2]', link: 'https://www.linkedin.com/in/agroindustrialtivan' },
    { icon: faYoutube, name: 'YouTube', color: 'hover:bg-[#FF0000]', link: 'http://www.youtube.com/@AGROTIVAN' }
  ];

  return (
    <section id="redes-sociales" className="py-28 bg-white overflow-hidden">

      <div className="max-w-[1440px] mx-auto px-6">

        <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-10">

          {/* Texto */}
          <div className="max-w-xl text-center md:text-left" data-aos="fade-right">

            <h2 className="text-base font-bold text-brand-green uppercase tracking-[0.25em] mb-6">
              Comunidad Tivan
            </h2>

            <h3 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Síguenos en nuestras
              <span className="text-brand-green"> Redes Sociales</span>
            </h3>

            <p className="text-lg md:text-xl text-brand-dark/70 leading-relaxed">
              Únete a nuestra comunidad agrícola digital y mantente al día con consejos técnicos,
              testimonios y nuestras últimas innovaciones en el campo.
            </p>

          </div>

          {/* Botones redes */}
          <div className="flex flex-wrap justify-center gap-6" data-aos="fade-left">

            {socials.map((social, i) => (
              <a 
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 px-10 py-5 rounded-2xl bg-brand-light border border-brand-green/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:text-white ${social.color}`}
              >

                <FontAwesomeIcon 
                  icon={social.icon} 
                  className="text-2xl"
                />

                <span className="font-bold text-base uppercase tracking-wider">
                  {social.name}
                </span>

              </a>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}