import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLeaf, 
  faChevronDown,
  faPhone, 
  faEnvelope, 
  faBars, 
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import { 
  faInstagram, 
  faFacebook, 
  faLinkedinIn,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

interface NavbarProps {
  productCategories: { name: string; subcategories?: string[] }[];
}

export default function Navbar({ productCategories }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMobileProductsOpen(false);
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-brand-green/10 ${isMenuOpen ? 'bg-white' : 'bg-white/70 backdrop-blur-lg'}`}>
      {/* Top Bar */}
      <div className="hidden lg:block bg-brand-dark text-white py-2 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
          <div className="flex gap-6">
            <a href="tel:+51988108618" className="flex items-center gap-2 hover:text-brand-lime transition-colors">
              <FontAwesomeIcon icon={faPhone} className="text-brand-lime" /> +51 988 108 618
            </a>
            <a href="mailto:ventas@agroindustrialtivan.com" className="flex items-center gap-2 hover:text-brand-lime transition-colors">
              <FontAwesomeIcon icon={faEnvelope} className="text-brand-lime" /> ventas@agroindustrialtivan.com
            </a>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-white/30">Síguenos:</span>
            <a href="https://www.facebook.com/Agroindustrialtivan" target="_blank" rel="noopener noreferrer" className="hover:text-brand-lime transition-colors"><FontAwesomeIcon icon={faFacebook} className="text-sm" /></a>
            <a href="https://www.instagram.com/agroindustrialtivan/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-lime transition-colors"><FontAwesomeIcon icon={faInstagram} className="text-sm" /></a>
            <a href="https://www.linkedin.com/in/agroindustrialtivan" target="_blank" rel="noopener noreferrer" className="hover:text-brand-lime transition-colors"><FontAwesomeIcon icon={faLinkedinIn} className="text-sm" /></a>
            <a href="http://www.youtube.com/@AGROTIVAN" target="_blank" rel="noopener noreferrer" className="hover:text-brand-lime transition-colors"><FontAwesomeIcon icon={faYoutube} className="text-sm" /></a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group cursor-pointer" onClick={handleHomeClick}>
          <div className="bg-brand-green p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <FontAwesomeIcon icon={faLeaf} className="text-brand-lime w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-brand-dark">
            Agroindustrial <span className="text-brand-green">Tivan</span>
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" onClick={handleHomeClick} className="hover:text-brand-green transition-colors">Inicio</Link>
          <Link to="/#nosotros" className="hover:text-brand-green transition-colors">Nosotros</Link>
          
          {/* Products Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsProductsDropdownOpen(true)}
            onMouseLeave={() => setIsProductsDropdownOpen(false)}
          >
            <Link 
              to="/catalogo"
              className="flex items-center gap-1 hover:text-brand-green transition-colors py-8"
            >
              Productos <FontAwesomeIcon icon={faChevronDown} className={`w-3 h-3 transition-transform duration-300 ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
            </Link>
            
            <div className={`absolute top-full left-0 w-72 bg-white shadow-2xl rounded-2xl border border-brand-green/5 overflow-hidden transition-all duration-300 ${isProductsDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              <div className="py-2">
                {productCategories.map((cat, idx) => (
                  <div key={idx} className="group/item">
                    <Link 
                      to={`/catalogo?categoria=${encodeURIComponent(cat.name)}`}
                      className="w-full text-left block px-6 py-3 text-brand-dark/70 hover:bg-brand-light hover:text-brand-green transition-colors font-semibold"
                    >
                      {cat.name}
                    </Link>
                    {cat.subcategories && (
                      <div className="bg-brand-light/50 py-1">
                        {cat.subcategories.map((sub, sIdx) => (
                          <Link 
                            key={sIdx}
                            to={`/catalogo?categoria=${encodeURIComponent(cat.name)}`}
                            className="w-full text-left block px-10 py-2 text-xs text-brand-dark/50 hover:text-brand-green transition-colors"
                          >
                            • {sub}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link to="/#redes-sociales" className="hover:text-brand-green transition-colors">Contacto</Link>
          <Link to="/#contacto" className="btn-primary py-2 px-6 text-xs">Contactar</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-brand-dark hover:text-brand-green transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FontAwesomeIcon icon={faXmark} className="w-6 h-6" /> : <FontAwesomeIcon icon={faBars} className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 top-20 bg-white z-40 transition-transform duration-300 ease-in-out shadow-2xl ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col p-6 gap-6 text-lg font-semibold overflow-y-auto h-full pb-32">
          <Link to="/" onClick={handleHomeClick} className="w-full text-left hover:text-brand-green transition-colors border-b border-brand-green/5 pb-4">Inicio</Link>
          <Link to="/#nosotros" onClick={closeMenu} className="hover:text-brand-green transition-colors border-b border-brand-green/5 pb-4">Nosotros</Link>
          
          {/* Mobile Products Accordion */}
          <div className="border-b border-brand-green/5 pb-4">
            <button 
              onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
              className="flex items-center justify-between w-full hover:text-brand-green transition-colors"
            >
              Productos
              <FontAwesomeIcon icon={faChevronDown} className={`w-4 h-4 transition-transform duration-300 ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`mt-4 flex flex-col gap-2 pl-4 overflow-hidden transition-all duration-300 ${isMobileProductsOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <Link 
                to="/catalogo"
                onClick={closeMenu}
                className="text-left text-brand-green font-bold text-sm mb-4"
              >
                Ver catálogo completo →
              </Link>
              {productCategories.map((cat, idx) => (
                <div key={idx} className="flex flex-col gap-2 mb-2">
                  <Link 
                    to={`/catalogo?categoria=${encodeURIComponent(cat.name)}`}
                    onClick={closeMenu}
                    className="text-left text-base font-bold text-brand-dark/80 hover:text-brand-green transition-colors"
                  >
                    {cat.name}
                  </Link>
                  {cat.subcategories && (
                    <div className="flex flex-col gap-2 pl-4 border-l border-brand-green/10">
                      {cat.subcategories.map((sub, sIdx) => (
                        <Link 
                          key={sIdx}
                          to={`/catalogo?categoria=${encodeURIComponent(cat.name)}`}
                          onClick={closeMenu}
                          className="text-left text-sm font-medium text-brand-dark/50 hover:text-brand-green transition-colors"
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <Link to="/#redes-sociales" onClick={closeMenu} className="hover:text-brand-green transition-colors border-b border-brand-green/5 pb-4">Contacto</Link>
          <Link to="/#contacto" onClick={closeMenu} className="btn-primary text-center py-4">Contactar</Link>
          
          <div className="mt-8 pt-8 border-t border-brand-green/10">
            <p className="text-xs text-brand-dark/40 uppercase tracking-widest mb-4">Síguenos</p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/agroindustrialtivan/" target="_blank" rel="noopener noreferrer" className="bg-brand-light p-3 rounded-full text-brand-green">
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/Agroindustrialtivan" target="_blank" rel="noopener noreferrer" className="bg-brand-light p-3 rounded-full text-brand-green">
                <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/agroindustrialtivan" target="_blank" rel="noopener noreferrer" className="bg-brand-light p-3 rounded-full text-brand-green">
                <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
              </a>
              <a href="http://www.youtube.com/@AGROTIVAN" target="_blank" rel="noopener noreferrer" className="bg-brand-light p-3 rounded-full text-brand-green">
                <FontAwesomeIcon icon={faYoutube} className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
