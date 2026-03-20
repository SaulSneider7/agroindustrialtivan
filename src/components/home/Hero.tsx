import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function HeroVideo() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero_agroindustrial_tivan.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Glow decorativo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-green-500/10 blur-[140px] rounded-full" />

      {/* Contenido */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-10 flex items-center">
        <div className="max-w-3xl text-white">
          <p className="inline-flex items-center rounded-full border border-white/15 bg-white/10 backdrop-blur-md px-4 py-2 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase mb-5">
            Soluciones agrícolas de alto rendimiento
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-5">
            Nutriendo y protegiendo <br />
            <span className="text-green-400">tus cultivos con resultados reales</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mb-8 leading-relaxed">
            Tecnología, nutrición y protección agrícola para potenciar el desarrollo de tus cultivos,
            mejorar su resistencia y maximizar la productividad en cada campaña.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#productos"
              className="inline-flex items-center gap-3 rounded-2xl bg-green-600 px-7 py-4 text-white font-semibold text-base md:text-lg hover:bg-green-700 transition-all"
            >
              Ver productos
              <FontAwesomeIcon icon={faChevronRight} />
            </a>

            <a
              href="#contacto"
              className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md px-7 py-4 text-white font-semibold text-base md:text-lg hover:bg-white/15 transition-all"
            >
              Solicitar asesoría
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}