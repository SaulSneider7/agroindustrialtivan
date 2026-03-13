import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowLeft, faLeaf, faInfoCircle, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { productsData } from '../data/products';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';

export default function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const initialCategory = searchParams.get('categoria');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCategory);

  // Sync state with URL if it changes externally
  useEffect(() => {
    const cat = searchParams.get('categoria');
    setSelectedCategory(cat);
  }, [searchParams]);

  const handleCategoryChange = (cat: string | null) => {
    setSelectedCategory(cat);
    if (cat) {
      setSearchParams({ categoria: cat });
    } else {
      setSearchParams({});
    }
  };

  const filteredProducts = productsData.filter(cat => {
    if (selectedCategory && cat.categoria.toLowerCase() !== selectedCategory.toLowerCase()) return false;
    return true;
  }).map(cat => ({
    ...cat,
    subcategorias: cat.subcategorias.map(sub => ({
      ...sub,
      productos: sub.productos.filter(p => p.nombre.toLowerCase().includes(searchTerm.toLowerCase()))
    })).filter(sub => sub.productos.length > 0)
  })).filter(cat => cat.subcategorias.length > 0);

  const slugify = (name: string) => name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '');

  return (
    <div className="min-h-screen bg-brand-light pt-32 pb-20">
      <div className="max-w-7xl xl:max-w-[1500px] 2xl:max-w-[1700px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-brand-green font-bold mb-4 hover:gap-3 transition-all"
            >
              <FontAwesomeIcon icon={faArrowLeft} /> Volver al Inicio
            </button>
            <h1 className="text-4xl font-bold text-brand-dark">Catálogo de <span className="text-brand-green">Productos</span></h1>
            <p className="text-brand-dark/60 mt-2">Explora nuestra gama completa de soluciones agrícolas.</p>
          </div>

          <div className="relative max-w-md w-full">
            <FontAwesomeIcon icon={faSearch} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-dark/30" />
            <input 
              type="text" 
              placeholder="Buscar productos..." 
              className="w-full pl-12 pr-6 py-4 rounded-2xl border border-brand-green/10 focus:outline-none focus:ring-2 focus:ring-brand-green/20 transition-all bg-white shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          <button 
            onClick={() => handleCategoryChange(null)}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${!selectedCategory ? 'bg-brand-green text-white shadow-lg shadow-brand-green/20' : 'bg-white text-brand-dark/60 hover:bg-brand-green/5'}`}
          >
            Todos
          </button>
          {productsData.map((cat, i) => (
            <button 
              key={i}
              onClick={() => handleCategoryChange(cat.categoria)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${selectedCategory?.toLowerCase() === cat.categoria.toLowerCase() ? 'bg-brand-green text-white shadow-lg shadow-brand-green/20' : 'bg-white text-brand-dark/60 hover:bg-brand-green/5'}`}
            >
              {cat.categoria}
            </button>
          ))}
        </div>

        {/* Catalog Content */}
        <div className="space-y-20">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((cat, i) => (
              <div key={i} className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-brand-green rounded-2xl flex items-center justify-center text-brand-lime">
                    <FontAwesomeIcon icon={faLeaf} className="text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-brand-dark uppercase tracking-tight">{cat.categoria}</h2>
                </div>

                <div className="space-y-12">
                  {cat.subcategorias.map((sub, j) => (
                    <div key={j}>
                      <h3 className="text-brand-green font-bold text-sm uppercase tracking-widest mb-8 flex items-center gap-4">
                        <span className="h-px bg-brand-green/20 flex-1"></span>
                        {sub.nombre}
                        <span className="h-px bg-brand-green/20 flex-1"></span>
                      </h3>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {sub.productos.map((prod, k) => (
                          <motion.div 
                            key={k}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-sm border border-brand-green/5 hover:shadow-xl transition-all duration-300 group"
                          >
                            <div className="aspect-[4/3] overflow-hidden relative">
                              <img 
                                src={prod.imagen} 
                                alt={prod.nombre}
                                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-white text-xs font-bold uppercase tracking-widest">Agrotivan Solutions</span>
                              </div>
                            </div>
                            <div className="p-6">
                              <h4 className="text-brand-dark font-bold text-lg mb-4 line-clamp-1">{prod.nombre}</h4>
                              <div className="flex flex-col gap-2">
                                <Link 
                                  to={`/producto/${slugify(prod.nombre)}`}
                                  className="w-full py-3 rounded-xl bg-brand-green/5 text-brand-green font-bold text-sm hover:bg-brand-green hover:text-white transition-all flex items-center justify-center gap-2"
                                >
                                  <FontAwesomeIcon icon={faInfoCircle} /> Ver información
                                </Link>
                                {prod.fichaTecnica && (
                                  <a 
                                    href={prod.fichaTecnica}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-3 rounded-xl border border-brand-green/10 text-brand-dark/60 font-bold text-xs hover:bg-brand-light transition-all flex items-center justify-center gap-2"
                                  >
                                    <FontAwesomeIcon icon={faFilePdf} className="text-brand-green" /> Ficha Técnica
                                  </a>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-brand-green/20">
              <p className="text-brand-dark/40 font-medium">No se encontraron productos que coincidan con tu búsqueda.</p>
              <button 
                onClick={() => {setSearchTerm(''); setSelectedCategory(null);}}
                className="mt-4 text-brand-green font-bold hover:underline"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
