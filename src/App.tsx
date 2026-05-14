import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Search, User, Menu, X, ChevronRight, Heart, Facebook, Instagram, Twitter, ShieldCheck, Globe, RefreshCcw, Headset, ChevronLeft } from 'lucide-react';
import { PRODUCTS } from './constants';
import { Product } from './types';

// --- Global Components ---

const AnnouncementBar = () => (
  <div className="bg-black text-[9px] sm:text-[10px] py-4 px-4 flex justify-center items-center tracking-widest font-bold border-b border-white/5 space-x-8">
    <div className="flex items-center space-x-2">
      <Globe className="w-3 h-3" />
      <span>FREE SHIPPING ON ORDERS OVER $100</span>
    </div>
    <div className="h-3 w-[1px] bg-white/20" />
    <div className="flex items-center space-x-2">
      <span>30-DAY RETURNS & EASY EXCHANGES</span>
    </div>
  </div>
);

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('HOME');

  return (
    <nav className="bg-luxury-black sticky top-0 z-50 w-full px-6 py-6 border-b border-white/5">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-1">
          <a href="#" className="inline-block">
            <img 
              src="/logo.png" 
              alt="AH shop" 
              className="h-8 w-auto object-contain brightness-0 invert"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                if (target.nextElementSibling) {
                  (target.nextElementSibling as HTMLElement).style.display = 'block';
                }
              }}
            />
            <h1 className="text-3xl font-black tracking-[0.2em] hidden">AH shop.</h1>
          </a>
        </div>

        {/* Center: Links */}
        <div className="hidden lg:flex items-center space-x-12 text-[10px] font-black tracking-[0.3em]">
          {['HOME', 'SHOP', 'CATEGORIES', 'NEW IN', 'SALE', 'PAGES'].map((link) => (
            <a 
              key={link} 
              href="#" 
              onClick={(e) => { e.preventDefault(); setActiveLink(link); }}
              className={`relative pb-1 transition-all hover:text-white ${activeLink === link ? 'text-white border-b-2 border-white' : 'text-white/40'}`}
            >
              {link}
              {(link === 'SHOP' || link === 'PAGES') && <ChevronRight className="inline ml-1 w-3 h-3 rotate-90" />}
            </a>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex-1 flex justify-end items-center space-x-8">
          <button className="hover:scale-110 transition-transform"><Search className="w-5 h-5 text-white/80" /></button>
          <button className="hover:scale-110 transition-transform"><User className="w-5 h-5 text-white/80" /></button>
          <button className="relative hover:scale-110 transition-transform">
            <ShoppingBag className="w-5 h-5 text-white/80" />
            <span className="absolute -top-1 -right-2 bg-white text-black text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-black">2</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative h-[90vh] min-h-[700px] overflow-hidden flex items-center">
    <div className="absolute inset-0">
      <img 
        src="/back.png" 
        alt="Streetwear Hero" 
        className="w-full h-full object-cover brightness-[0.7]"
        onError={(e) => {
          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=2000&auto=format&fit=crop";
        }}
        referrerPolicy="no-referrer"
      />
    </div>
    
    <div className="relative h-full w-full max-w-[1600px] mx-auto px-10 flex flex-col justify-center items-start">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl"
      >
        <span className="text-[11px] font-black tracking-[0.4em] mb-6 block text-white/90">STREETWEAR COLLECTION</span>
        <h2 className="text-8xl md:text-[11rem] mb-6 brush-text leading-[0.8] text-white">
          URBAN<br />ESSENTIALS
        </h2>
        <p className="text-sm md:text-base font-bold tracking-[0.2em] mb-12 text-white/80 max-w-md">
          Bold looks for the new generation.
        </p>
        <div className="flex space-x-6">
          <button className="bg-white text-black px-14 py-5 text-[11px] font-black tracking-[0.3em] hover:bg-zinc-200 transition-colors uppercase">
            SHOP NOW
          </button>
          <button className="border-2 border-white text-white px-14 py-5 text-[11px] font-black tracking-[0.3em] hover:bg-white hover:text-black transition-colors uppercase">
            EXPLORE
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

const FeaturesRow = () => (
  <section className="bg-black py-16 border-b border-white/5">
    <div className="max-w-[1600px] mx-auto px-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { icon: Globe, title: 'WORLDWIDE SHIPPING', desc: 'Fast & reliable delivery' },
        { icon: RefreshCcw, title: 'EASY RETURNS', desc: '30 days money back' },
        { icon: ShieldCheck, title: 'SECURE PAYMENT', desc: '100% secure checkout' },
        { icon: Headset, title: 'SUPPORT 24/7', desc: "We're here to help" },
      ].map((f, i) => (
        <div key={i} className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-4 md:space-y-0 md:space-x-4">
          <f.icon className="w-8 h-8 text-white/40" strokeWidth={1} />
          <div>
            <h4 className="text-[11px] font-black tracking-widest mb-1">{f.title}</h4>
            <p className="text-[10px] text-white/40 tracking-wider lowercase">{f.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const ProductCard = ({ product }: { product: Product }) => (
  <div className="group cursor-pointer">
    <div className="product-image-container mb-4">
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {product.isNew && (
          <div className="bg-orange-500 text-black text-[9px] px-3 py-1 font-black">NEW</div>
        )}
        {product.isSale && (
          <div className="bg-black/80 text-white text-[9px] px-3 py-1 font-black">
            {product.salePrice ? `-${Math.round((1 - product.price / product.salePrice) * 100)}%` : 'SALE'}
          </div>
        )}
      </div>

      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      
      <button className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
        <Heart className="w-4 h-4 text-white" />
      </button>
    </div>
    <div>
      <h3 className="text-[11px] font-black tracking-[0.2em] mb-2">{product.name}</h3>
      <div className="flex items-center space-x-3 text-[11px] font-bold">
        <span className="text-white">${product.price.toFixed(2)}</span>
        {product.isSale && product.salePrice && (
          <span className="text-white/30 line-through">${product.salePrice.toFixed(2)}</span>
        )}
      </div>
    </div>
  </div>
);

const NewArrivals = () => (
  <section className="bg-black py-24 px-10">
    <div className="max-w-[1600px] mx-auto">
      <div className="flex justify-between items-center mb-16">
        <h2 className="text-4xl font-black tracking-[0.4em]">NEW ARRIVALS</h2>
        <div className="flex space-x-2">
          <button className="p-4 bg-zinc-900/50 border border-white/5 hover:bg-zinc-800 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="p-4 bg-zinc-900/50 border border-white/5 hover:bg-zinc-800 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="mt-24 text-center">
        <button className="border border-white/10 px-16 py-6 text-[10px] font-black tracking-[0.4em] hover:bg-white hover:text-black transition-all">
          VIEW ALL PRODUCTS
        </button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black py-12 border-t border-white/5 text-center">
    <p className="text-[10px] text-white/30 tracking-[0.4em] font-black uppercase mb-4">AH shop. URBAN LUXURY</p>
    <div className="flex justify-center space-x-8 text-[9px] font-black tracking-[0.2em] text-white/50">
      <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
      <a href="#" className="hover:text-white transition-colors">TERMS OF SALE</a>
      <a href="#" className="hover:text-white transition-colors">CONTACT US</a>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <FeaturesRow />
      <NewArrivals />
      <Footer />
    </div>
  );
}
