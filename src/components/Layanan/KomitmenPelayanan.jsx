import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import vimis from '../../assets/img/vimis-layanan.jpg'; 
import motto from '../../assets/img/motto-layanan.jpg'; 
import maklumat from '../../assets/img/maklumat-pelayanan.jpg';
import kompensasi from '../../assets/img/kompensasi-pelayanan.jpg';

import bingkai from '../../assets/img/bingkai.png'; 

const KomitmenPelayanan = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { id: 1, type: 'image', src: vimis, alt: "Visi Misi Pelayanan" },
    { id: 2, type: 'image', src: motto, alt: "Motto Pelayanan" },
    { id: 3, type: 'image', src: maklumat, alt: "Maklumat Layanan" },
    { id: 4, type: 'image', src: kompensasi, alt: "Kompensasi Pelayanan" },
    { id: 5, type: 'drive', src: "https://drive.google.com/file/d/1_fF2fV1zeFNN2SFLDr7gXTBzxZvcFi4E/preview", alt: "Dokumen Komitmen (Drive)" },
  ];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="pt-32 pb-20 container mx-auto px-4 font-poppins relative z-10">
      
      {/* --- STYLE ANIMASI --- */}
      <style>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeInScale 0.5s ease-out forwards;
        }
      `}</style>

      {/* --- BREADCRUMB --- */}
      <div className="mb-8 text-primary font-medium">
        <span>Beranda</span> <span className="mx-2">/</span> <span className="font-bold">Komitmen Pelayanan</span>
      </div>

      {/* --- TITLE --- */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-primary relative z-10">Komitmen Pelayanan</h1>
      </div>

      {/* --- CAROUSEL AREA --- */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 max-w-5xl mx-auto">
        
        {/* Tombol Kiri */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 md:static bg-[#6dbfb8]/90 hover:bg-primary text-white rounded-full p-3 shadow-lg transition-all transform hover:scale-110 z-30"
        >
          <FaChevronLeft size={20} />
        </button>

        {/* --- FRAME UTAMA --- */}
        <div className="relative w-full aspect-[4/3] bg-transparent rounded-xl overflow-hidden flex items-center justify-center">
            
            {/* ORNAMEN BINGKAI */}
            <div className="absolute top-0 left-0 w-20 h-20 md:w-32 md:h-32 z-10 pointer-events-none">
                <img src={bingkai} alt="Ornamen" className="w-full h-full object-contain opacity-80" />
            </div>
            <div className="absolute bottom-0 right-0 w-20 h-20 md:w-32 md:h-32 z-10 pointer-events-none transform rotate-180">
                <img src={bingkai} alt="Ornamen" className="w-full h-full object-contain opacity-80" />
            </div>

            {/* --- KONTEN DINAMIS --- */}
            <div 
                key={currentIndex} 
                className="relative z-20 w-full h-full p-8 md:p-12 flex items-center justify-center animate-fade-in"
            >
                {slides[currentIndex].type === 'image' ? (
                    <img 
                        src={slides[currentIndex].src} 
                        alt={slides[currentIndex].alt}
                        className="w-full h-full object-contain drop-shadow-sm rounded-md"
                    />
                ) : (
                    <iframe 
                        src={slides[currentIndex].src}
                        title="PDF Preview"
                        className="w-full h-full border-0 rounded-md shadow-inner bg-white/50" 
                    ></iframe>
                )}
            </div>

        </div>

        {/* Tombol Kanan */}
        <button 
          onClick={nextSlide}
          className="absolute right-0 md:static bg-[#6dbfb8]/90 hover:bg-primary text-white rounded-full p-3 shadow-lg transition-all transform hover:scale-110 z-30"
        >
          <FaChevronRight size={20} />
        </button>

      </div>
      
      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {slides.map((slide, idx) => (
            <div 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full cursor-pointer transition-all ${
                    currentIndex === idx ? 'bg-primary scale-125' : 'bg-gray-400'
                }`}
            ></div>
        ))}
      </div>

    </section>
  );
};

export default KomitmenPelayanan;