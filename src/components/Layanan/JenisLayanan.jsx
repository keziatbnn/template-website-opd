import React, { useState } from 'react';
import { FaTimes, FaSearchPlus } from 'react-icons/fa';
import spgdtImg from '../../assets/img/spgdt.jpeg'
import dataImg from '../../assets/img/data-penelitian.jpeg'
import ambulanceImg from '../../assets/img/ambulans.jpeg'
import jknImg from '../../assets/img/jkn-kis.jpeg'
import sipImg from '../../assets/img/sip.jpg'

const JenisLayanan = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Data Layanan
  const layananList = [
    { title: "SPGDT", img: spgdtImg },
    { title: "Standar Pelayanan Data dan Informasi", img: dataImg },
    { title: "Standar Pelayanan Penerbitan Rekomendasi Ambulans", img: ambulanceImg },
    { title: "Pengusulan JKN/KIS", img: jknImg },
    { title: "Penerbitan SIP NAKES", img: sipImg },
  ];

  return (
    <section className="pt-32 pb-20 min-h-screen container mx-auto px-4 font-poppins">
      
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-card {
          opacity: 0; /* Sembunyikan awal */
          animation: slideUp 0.6s ease-out forwards;
        }
      `}</style>

      {/* --- BREADCRUMB --- */}
      <div className="mb-8 text-primary font-medium">
        <span>Beranda</span> <span className="mx-2">/</span> <span className="font-bold">Jenis Layanan</span>
      </div>

      {/* --- TITLE --- */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-primary relative z-10">Jenis Layanan</h1>
      </div>

      {/* --- GRID LAYOUT --- */}
      <div className="flex flex-wrap justify-center gap-8">
        {layananList.map((item, index) => (
          <div 
            key={index}
            className="animate-card group relative w-full md:w-[45%] lg:w-[30%] bg-base rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div 
              className="relative overflow-hidden cursor-pointer bg-gray-100 aspect-[4/3]"
              onClick={() => setSelectedImage(item.img)}
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <FaSearchPlus className="text-base text-3xl opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" />
              </div>
            </div>

            {/* Judul */}
            <div className="bg-primary p-4 flex items-center justify-center flex-grow min-h-[80px]">
              <h3 className="text-base text-center font-semibold text-sm md:text-base leading-tight">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors z-50"
            onClick={() => setSelectedImage(null)}
          >
            <FaTimes size={24} />
          </button>

          <div 
            className="relative max-w-5xl w-full max-h-screen flex justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Preview" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-scaleIn"
            />
          </div>
        </div>
      )}

    </section>
  );
};

export default JenisLayanan;