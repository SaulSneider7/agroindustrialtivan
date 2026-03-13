import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faFacebook,
  faLinkedinIn,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-brand-dark-green text-white pt-24 pb-12 border-t border-white/5">

      <div className="max-w-[1440px] mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-14 mb-16">

          {/* Logo + descripción */}
          <div className="col-span-1 md:col-span-2">

            <div className="mb-6">
              <img
                src="/logo-agroindustrialtivan.png"
                alt="Agroindustrial Tivan"
                className="h-20 w-auto object-contain bg-white p-2 rounded-lg"
              />
            </div>

            <p className="text-white/70 text-lg max-w-md leading-relaxed mb-10">
              Líderes en soluciones agrícolas sostenibles. Transformamos el campo con tecnología y pasión por la tierra.
            </p>

            <div className="flex gap-5">

              <a href="https://www.instagram.com/agroindustrialtivan/" target="_blank" rel="noopener noreferrer"
                className="bg-white/5 p-4 rounded-full hover:bg-brand-lime hover:text-brand-dark transition-all">

                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />

              </a>

              <a href="https://www.facebook.com/Agroindustrialtivan" target="_blank" rel="noopener noreferrer"
                className="bg-white/5 p-4 rounded-full hover:bg-brand-lime hover:text-brand-dark transition-all">

                <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />

              </a>

              <a href="https://www.linkedin.com/in/agroindustrialtivan" target="_blank" rel="noopener noreferrer"
                className="bg-white/5 p-4 rounded-full hover:bg-brand-lime hover:text-brand-dark transition-all">

                <FontAwesomeIcon icon={faLinkedinIn} className="w-6 h-6" />

              </a>

              <a href="http://www.youtube.com/@AGROTIVAN" target="_blank" rel="noopener noreferrer"
                className="bg-white/5 p-4 rounded-full hover:bg-brand-lime hover:text-brand-dark transition-all">

                <FontAwesomeIcon icon={faYoutube} className="w-6 h-6" />

              </a>

            </div>

          </div>

          {/* Enlaces */}
          <div>

            <h4 className="font-bold mb-6 text-brand-lime uppercase tracking-widest text-sm">
              Enlaces Rápidos
            </h4>

            <ul className="space-y-4 text-white/70 text-base">

              <li>
                <Link to="/" className="hover:text-brand-lime transition-colors">
                  Inicio
                </Link>
              </li>

              <li>
                <Link to="/#nosotros" className="hover:text-brand-lime transition-colors">
                  Nosotros
                </Link>
              </li>

              <li>
                <Link to="/catalogo" className="hover:text-brand-lime transition-colors">
                  Catálogo
                </Link>
              </li>

              <li>
                <Link to="/#redes-sociales" className="hover:text-brand-lime transition-colors">
                  Contacto
                </Link>
              </li>

            </ul>

          </div>

          {/* Contacto */}
          <div>

            <h4 className="font-bold mb-6 text-brand-lime uppercase tracking-widest text-sm">
              Contacto
            </h4>

            <ul className="space-y-5 text-white/70 text-base">

              <li className="flex items-start gap-3">
                <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5 text-brand-lime shrink-0 mt-1" />
                Psje. Las Orquideas Mz. L Lt 1 – Puente Piedra – Perú
              </li>

              <li className="flex flex-col gap-2">

                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-brand-lime" />
                  +51 988 108 618
                </div>

                <div className="flex items-center gap-3 ml-8">
                  +51 939 255 451
                </div>

              </li>

              <li className="flex flex-col gap-2">

                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-brand-lime" />
                  ventas@agroindustrialtivan.com
                </div>

                <div className="flex items-center gap-3 ml-8">
                  agroindustrialtivan@gmail.com
                </div>

              </li>

            </ul>

          </div>

        </div>

        {/* Bottom bar */}

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-base text-white/50">

          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-left">

            <p>
              © {new Date().getFullYear()} Agroindustrial Tivan S.A. Todos los derechos reservados.
            </p>

            <p>
              Diseñado y desarrollado por{" "}
              <a
                href="https://tu-sitioweb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-lime hover:underline font-semibold"
              >
                Tu-Sitioweb
              </a>
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}