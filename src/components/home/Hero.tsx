import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeXmark, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

export default function HeroSlider() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleAudio = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="w-full h-screen">

      <Swiper
        modules={[Autoplay, Pagination, EffectFade, Navigation]}
        effect="fade"
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        navigation
        className="h-full"
      >

        {/* 🎬 SLIDE 1 - VIDEO */}
        <SwiperSlide>
          <div className="relative w-full h-screen overflow-hidden bg-black">

            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="absolute w-full h-full object-cover"
            >
              <source src="/video_hero.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/30" />

            {/* BOTÓN AUDIO */}
            <button
              onClick={toggleAudio}
              className="absolute bottom-32 right-6 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:scale-110"
            >
              <FontAwesomeIcon icon={isMuted ? faVolumeXmark : faVolumeHigh} />
            </button>
          </div>
        </SwiperSlide>

        {/* 🧪 SLIDE PRODUCTO 1 */}
        <SwiperSlide>
          <div className="relative h-screen flex items-center overflow-hidden">

            {/* FONDO */}
            <div className="absolute inset-0">
              <img
                src="/fondo.jpeg"
                className="w-full h-full object-cover md:object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* CONTENIDO */}
            <div className="
              relative z-10 
              flex flex-col md:grid md:grid-cols-2 
              items-center 
              gap-8 md:gap-12 
              w-full max-w-7xl mx-auto px-6 md:px-10
            ">

              {/* IMAGEN */}
              <div className="flex justify-center w-full order-1 md:order-none">
                <img
                  src="/alga_force.png"
                  className="
                    w-[220px] sm:w-[280px] md:w-[420px] lg:w-[500px]
                    object-contain
                    drop-shadow-2xl
                    animate-float3d
                  "
                />
              </div>

              {/* TEXTO */}
              <div className="
                text-white 
                text-center md:text-left 
                max-w-xl
              ">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  ALGA FORCE
                </h2>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
                  Impulsa el crecimiento de tus cultivos
                </h3>

                <p className="text-sm sm:text-base md:text-lg text-white/80 mb-4 md:mb-6">
                  Bioestimulante natural que acelera el desarrollo, mejora el enraizamiento y aumenta la productividad en cada etapa del cultivo.
                </p>

                <ul className="text-white/70 space-y-1 md:space-y-2 text-sm md:text-base">
                  <li>✔ Estimula brotación, floración y cuajado</li>
                  <li>✔ Reduce el estrés por clima o trasplante</li>
                  <li>✔ Potencia la resistencia a enfermedades</li>
                </ul>
              </div>

            </div>
          </div>
        </SwiperSlide>

        {/* 🧪 SLIDE PRODUCTO 2 */}
        <SwiperSlide>
          <div className="relative h-screen flex items-center overflow-hidden">

            {/* FONDO */}
            <div className="absolute inset-0">
              <img
                src="/fondo.jpeg"
                className="w-full h-full object-cover md:object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* CONTENIDO */}
            <div className="
              relative z-10 
              flex flex-col md:grid md:grid-cols-2 
              items-center 
              gap-8 md:gap-12 
              w-full max-w-7xl mx-auto px-6 md:px-10
            ">

              {/* IMAGEN */}
              <div className="flex justify-center w-full order-1 md:order-none">
                <img
                  src="/rollo_hero.png"
                  className="
                    w-[220px] sm:w-[280px] md:w-[420px] lg:w-[500px]
                    object-contain
                    drop-shadow-2xl
                    animate-float3d
                  "
                />
              </div>

              {/* TEXTO */}
              <div className="
                  text-white 
                  text-center md:text-left 
                  max-w-xl
                ">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  ROLLO ADHESIVO NOVITRAP
                </h2>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
                  Captura eficaz de insectos voladores
                </h3>

                <p className="text-sm sm:text-base md:text-lg text-white/80 mb-4 md:mb-6">
                  Trampa cromática de alta eficiencia para el control físico de plagas en grandes plantaciones.
                </p>

                <ul className="text-white/70 space-y-1 md:space-y-2 text-sm md:text-base">
                  <li>✔ Atracción por color altamente efectiva</li>
                  <li>✔ Recubrimiento adhesivo doble cara</li>
                  <li>✔ Ideal para cultivos intensivos</li>
                </ul>
              </div>

            </div>
          </div>
        </SwiperSlide>

        {/* 🧪 SLIDE PRODUCTO 3 */}
        <SwiperSlide>
          <div className="relative h-screen flex items-center overflow-hidden">

            {/* FONDO */}
            <div className="absolute inset-0">
              <img
                src="/fondo.jpeg"
                className="w-full h-full object-cover md:object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* CONTENIDO */}
            <div className="
              relative z-10 
              flex flex-col md:grid md:grid-cols-2 
              items-center 
              gap-8 md:gap-12 
              w-full max-w-7xl mx-auto px-6 md:px-10
            ">

              {/* IMAGEN */}
              <div className="flex justify-center w-full order-1 md:order-none">
                <img
                  src="/trampa_bucket.png"
                  className="
                    w-[220px] sm:w-[280px] md:w-[420px] lg:w-[500px]
                    object-contain
                    drop-shadow-2xl
                    animate-float3d
                  "
                />
              </div>

              {/* TEXTO */}
              <div className="
                  text-white 
                  text-center md:text-left 
                  max-w-xl
                ">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  TRAMPA BUCKET
                </h2>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
                  Controla plagas sin dañar el ecosistema
                </h3>

                <p className="text-sm sm:text-base md:text-lg text-white/80 mb-4 md:mb-6">
                  Sistema eficiente para monitorear y reducir la población de insectos en cultivos sin uso de químicos agresivos.
                </p>

                <ul className="text-white/70 space-y-1 md:space-y-2 text-sm md:text-base">
                  <li>✔ Reduce la reproducción de plagas</li>
                  <li>✔ Funciona en campo abierto y cerrado</li>
                  <li>✔ Resistente al sol y la lluvia</li>
                </ul>
              </div>

            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </section>
  );
}