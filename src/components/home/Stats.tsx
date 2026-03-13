export default function Stats() {
  const stats = [
    { label: 'Años de Experiencia', value: '15+' },
    { label: 'Clientes Satisfechos', value: '500+' },
    { label: 'Productos Innovadores', value: '24' },
    { label: 'Hectáreas Nutridas', value: '10k+' },
  ];

  return (
    <section className="py-20 bg-brand-green text-white">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="text-4xl font-bold text-brand-lime mb-2">{stat.value}</div>
              <div className="text-sm text-white/70 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
