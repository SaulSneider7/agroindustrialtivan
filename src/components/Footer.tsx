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
    <footer className="bg-brand-dark-green text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <img
                src="/logo-agroindustrialtivan.png"
                alt="Agroindustrial Tivan"
                className="h-18 w-auto object-contain bg-white p-2 rounded-lg"
              />
            </div>
            <p className="text-white/60 max-w-md leading-relaxed mb-8">
              Líderes en soluciones agrícolas sostenibles. Transformamos el campo con tecnología y pasión por la tierra.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/agroindustrialtivan/" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-brand-lime hover:text-brand-dark transition-all">
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/Agroindustrialtivan" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-brand-lime hover:text-brand-dark transition-all">
                <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/agroindustrialtivan" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-brand-lime hover:text-brand-dark transition-all">
                <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
              </a>
              <a href="http://www.youtube.com/@AGROTIVAN" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-brand-lime hover:text-brand-dark transition-all">
                <FontAwesomeIcon icon={faYoutube} className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-brand-lime uppercase tracking-widest text-xs">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><Link to="/" className="hover:text-brand-lime transition-colors">Inicio</Link></li>
              <li><Link to="/#nosotros" className="hover:text-brand-lime transition-colors">Nosotros</Link></li>
              <li><Link to="/catalogo" className="hover:text-brand-lime transition-colors">Catálogo</Link></li>
              <li><Link to="/#redes-sociales" className="hover:text-brand-lime transition-colors">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-brand-lime uppercase tracking-widest text-xs">Contacto</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex items-start gap-3">
                <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4 text-brand-lime shrink-0 mt-1" />
                Psje. Las Orquideas Mz. L Lt 1 – Puente Piedra – Perú
              </li>
              <li className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faPhone} className="w-4 h-4 text-brand-lime" />
                  +51 988 108 618
                </div>
                <div className="flex items-center gap-3 ml-7">
                  +51 939 255 451
                </div>
              </li>
              <li className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 text-brand-lime" />
                  ventas@agroindustrialtivan.com
                </div>
                <div className="flex items-center gap-3 ml-7">
                  agroindustrialtivan@gmail.com
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-left">
            <p>© {new Date().getFullYear()} Agroindustrial Tivan S.A. Todos los derechos reservados.</p>

            <p className="text-white/40">
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
