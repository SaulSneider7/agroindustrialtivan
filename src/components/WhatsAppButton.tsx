import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/51988108618?text=Hola,%20me%20gustaría%20recibir%20más%20información%20sobre%20sus%20productos." 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 z-[100] bg-[#25D366] text-white w-18 h-18 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      <div className="absolute right-full mr-4 bg-white text-brand-green px-4 py-2 rounded-xl text-xs font-black shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        ¿Hablamos por WhatsApp?
        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rotate-45" />
      </div>
      <FontAwesomeIcon icon={faWhatsapp} className="text-4xl" />
    </a>
  );
}
