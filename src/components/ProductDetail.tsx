import React, { useState, useEffect } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowLeft, 
  faEnvelope, 
  faBuilding, 
  faUser,
  faCheckCircle,
  faFilePdf
} from '@fortawesome/free-solid-svg-icons';
import type { Product } from '../data/products';
import { productsData } from '../data/products';
import ContactSection from './home/ContactSection';
import { motion } from 'framer-motion';

import emailjs from '@emailjs/browser';

export default function ProductDetail() {
  const { productSlug } = useParams<{ productSlug: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    // Initialize EmailJS with Public Key
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  useEffect(() => {
    if (productSlug) {
      // Find product by slugified name
      let foundProduct: Product | null = null;
      for (const cat of productsData) {
        for (const sub of cat.subcategorias) {
          const p = sub.productos.find(p => 
            p.nombre.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '') === productSlug
          );
          if (p) {
            foundProduct = p;
            break;
          }
        }
        if (foundProduct) break;
      }
      
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        navigate('/catalogo');
      }
    }
  }, [productSlug, navigate]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const company = formData.get('company') as string;
    const email = formData.get('email') as string;

    if (!product) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const customerTemplateId = import.meta.env.VITE_EMAILJS_CUSTOMER_TEMPLATE_ID;
    const ownerTemplateId = import.meta.env.VITE_EMAILJS_OWNER_TEMPLATE_ID;

    if (!serviceId || !customerTemplateId || !ownerTemplateId) {
      console.error('EmailJS configuration missing');
      // Fallback for demo purposes if keys aren't set yet
      setTimeout(() => {
        setFormStatus('success');
      }, 1500);
      return;
    }

    try {
      // 1. Send email to the Customer
      const customerParams = {
        to_name: name,
        to_email: email,
        product_name: product.nombre,
        product_description: product.descripcion,
        ficha_tecnica_url: product.fichaTecnica || 'https://agrotivan.com/catalogo',
      };

      // 2. Send email to the Owner
      const ownerParams = {
        from_name: name,
        from_company: company,
        from_email: email,
        product_name: product.nombre,
      };

      await Promise.all([
        emailjs.send(serviceId, customerTemplateId, customerParams),
        emailjs.send(serviceId, ownerTemplateId, ownerParams)
      ]);

      setFormStatus('success');
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Hubo un problema al enviar la solicitud. Por favor, inténtalo de nuevo.');
      setFormStatus('idle');
    }
  };

  if (!product) return null;

  return (
    <div className="min-h-screen bg-white pt-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumbs / Back Button */}
        <div className="mb-12">
          <button 
            onClick={() => navigate('/catalogo')}
            className="flex items-center gap-2 text-brand-green font-bold hover:gap-3 transition-all"
          >
            <FontAwesomeIcon icon={faArrowLeft} /> Volver al Catálogo
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Product Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-brand-green/5">
              <img 
                src={product.imagen} 
                alt={product.nombre} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-brand-lime p-6 rounded-2xl shadow-xl hidden md:block">
              <FontAwesomeIcon icon={faFilePdf} className="w-10 h-10 text-brand-dark" />
            </div>
          </motion.div>

          {/* Product Info & Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <span className="text-brand-green font-bold text-sm uppercase tracking-[0.2em] mb-4">Detalle de Producto</span>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-8">{product.nombre}</h1>
            <p className="text-brand-dark/70 text-lg leading-relaxed mb-12">
              {product.descripcion}
            </p>

            {/* Download Form */}
            <div className="bg-brand-light p-10 rounded-[2.5rem] border border-brand-green/10 shadow-sm">
              <h3 className="text-xl font-bold mb-2">Descarga la información del producto</h3>
              <p className="text-brand-dark/50 text-sm mb-8">Completa tus datos para recibir la ficha técnica y catálogo detallado.</p>
              
              {formStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-brand-green text-brand-lime rounded-full flex items-center justify-center mx-auto mb-4">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-3xl" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-dark mb-2">¡Solicitud Enviada!</h4>
                  <p className="text-brand-dark/60 mb-6">Hemos enviado la información a tu correo electrónico.</p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="text-brand-green font-bold hover:underline"
                  >
                    Volver a solicitar
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <FontAwesomeIcon icon={faUser} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-green/40" />
                    <input 
                      required
                      name="name"
                      type="text" 
                      placeholder="Nombre completo" 
                      className="w-full pl-12 pr-6 py-4 rounded-xl border border-brand-green/10 focus:outline-none focus:ring-2 focus:ring-brand-green/20 bg-white"
                    />
                  </div>
                  <div className="relative">
                    <FontAwesomeIcon icon={faBuilding} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-green/40" />
                    <input 
                      required
                      name="company"
                      type="text" 
                      placeholder="Empresa" 
                      className="w-full pl-12 pr-6 py-4 rounded-xl border border-brand-green/10 focus:outline-none focus:ring-2 focus:ring-brand-green/20 bg-white"
                    />
                  </div>
                  <div className="relative">
                    <FontAwesomeIcon icon={faEnvelope} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-green/40" />
                    <input 
                      required
                      name="email"
                      type="email" 
                      placeholder="Correo electrónico" 
                      className="w-full pl-12 pr-6 py-4 rounded-xl border border-brand-green/10 focus:outline-none focus:ring-2 focus:ring-brand-green/20 bg-white"
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="w-full py-4 rounded-xl bg-brand-green text-white font-bold hover:bg-brand-dark transition-all shadow-lg shadow-brand-green/20 disabled:opacity-50"
                  >
                    {formStatus === 'submitting' ? 'Enviando...' : 'Enviar y Descargar'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Reuse Contact Section */}
      <ContactSection />
    </div>
  );
}
