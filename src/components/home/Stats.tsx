export default function CTASection() {
  return (
    <section className="py-10 bg-brand-green text-white">
      <div className="max-w-[1440px] mx-auto px-6">
        
        <div className="grid md:grid-cols-3 gap-8 text-center items-center">
          
          {/* 1. FRASE */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Impulsa tu producción con soluciones agrícolas de alto rendimiento
            </h2>
            <p className="text-white/70">
              Tecnología y experiencia para maximizar tus resultados en el campo.
            </p>
          </div>

          {/* 2. VER PRODUCTOS */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Explora nuestros productos
            </h3>
            <a
              href="#productos"
              className="inline-block bg-brand-lime text-brand-dark font-bold px-6 py-3 rounded-xl hover:scale-105 transition"
            >
              Ver productos
            </a>
          </div>

          {/* 3. SOLICITAR ASESORÍA */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              ¿Necesitas asesoría personalizada?
            </h3>
            <a
              href="#contacto"
              className="inline-block border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-brand-green transition"
            >
              Solicitar asesoría
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}