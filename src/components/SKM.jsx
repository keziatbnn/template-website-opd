import React, { useState } from 'react';
import { FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';

// --- IMPORT GAMBAR ---
import ikmChartImg from '../assets/img/ikm.jpg';

const SKM = () => {
  const embedUrl = "https://appbagor.surakarta.go.id/sop/skm/instrumen/isi/19";
  
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className="pt-32 pb-20 min-h-screen container mx-auto px-4 font-poppins relative z-10">
      
      {/* --- BREADCRUMB --- */}
      <div className="mb-8 text-primary font-medium">
        <span>Beranda</span> <span className="mx-2">/</span> <span className="font-bold">SKM</span>
      </div>

      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">Survei Kepuasan Masyarakat</h1>
        <p className="text-gray-500 text-sm md:text-text">
          Silakan isi formulir di bawah ini untuk membantu kami meningkatkan pelayanan.
        </p>
      </div>

      {/* --- 1. EMBED AREA  --- */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 relative mb-20">      
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 z-0">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
            <p className="text-gray-500 text-sm">Memuat Formulir SKM...</p>
          </div>
        )}

        {/* IFRAME */}
        <div className="relative z-10 w-full h-[800px] md:h-[1200px]">
             <iframe 
                src={embedUrl}
                title="Formulir SKM Surakarta"
                className="w-full h-full border-0"
                onLoad={() => setIsLoading(false)} 
                allowFullScreen
             ></iframe>
        </div>

        <div className="bg-green-50 p-4 text-center border-t border-green-100 flex flex-col md:flex-row items-center justify-center gap-2">
            <FaInfoCircle className="text-primary"/>
            <span className="text-sm text-primary">
                Jika formulir tidak muncul, 
            </span>
            <a 
                href={embedUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary font-bold underline hover:text-green-800 flex items-center gap-1"
            >
                Klik di sini <FaExternalLinkAlt className="text-xs"/>
            </a>
        </div>
      </div>

      {/* --- 2. SECTION INDEKS KEPUASAN MASYARAKAT --- */}
      <div className="max-w-7xl mx-auto mt-20">
        
        {/* Judul Section */}
        <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Indeks Kepuasan Masyarakat</h2>
        </div>

        {/* Gambar Grafik IKM */}
        <div className="bg-white p-2 md:p-4 rounded-3xl shadow-lg border border-gray-100 flex justify-center">
            <img 
                src={ikmChartImg} 
                alt="Grafik Indeks Kepuasan Masyarakat" 
                className="w-full max-w-4xl h-auto object-contain rounded-xl"
            />
        </div>
      </div>
    </section>
  );
};

export default SKM;