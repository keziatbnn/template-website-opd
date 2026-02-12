import React, { useState, useEffect } from 'react';
import { FiSearch, FiMic } from 'react-icons/fi'; 
import heroImg from '../../assets/img/hero.jpg';
import kegiatan1 from '../../assets/img/kegiatan1.jpeg';
import kegiatan2 from '../../assets/img/kegiatan2.png';
import kegiatan3 from '../../assets/img/kegiatan3.png';

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const heroImages = [
    { id: 1, src: kegiatan1 },
    { id: 2, src: kegiatan2 },
    { id: 3, src: kegiatan3 },
  ];

  const getImage = (offset) => {
    return heroImages[(activeIndex + offset) % heroImages.length];
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative w-full min-h-[650px] flex items-center pt-28 pb-10 lg:pb-0 overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      
      <style>{`
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-pop {
          animation: popIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70 dark:opacity-40"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>

      <div className="absolute inset-0 bg-primary/40 mix-blend-multiply z-10 dark:bg-gray-900/70"></div>

      {/* CONTAINER UTAMA */}
      <div className="container mx-auto px-6 relative z-30 flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-20 items-center h-full">
        
        {/* === TEKS & SEARCH === */}
        <div className="text-base space-y-6 lg:space-y-8 py-4 lg:py-10 w-full">
            <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-base">Selamat pagi,</h2>
                <p className="text-base md:text-xl font-medium leading-relaxed max-w-lg">
                    Informasi dan layanan kesehatan apa yang dapat kami bantu hari ini?
                </p>
            </div>

            <div className="relative w-full max-w-xl">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
                    <FiSearch size={22} />
                </div>

                <input 
                    type="text" 
                    placeholder="Cari layanan, informasi, atau pengaduan..." 
                    className="w-full h-12 md:h-14 pl-12 md:pl-14 pr-12 md:pr-14 rounded-full bg-base dark:bg-gray-800 shadow-lg text-gray-700 dark:text-gray-200 placeholder-gray-400 focus:outline-none transition-all text-sm dark:border dark:border-gray-700"
                />

                <div className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-primary dark:hover:text-teal-400 transition-colors p-1">
                    <FiMic size={22} />
                </div>
            </div>
        </div>

        {/* ===  GAMBAR === */}
        <div className="w-full grid grid-cols-3 gap-3 lg:grid-cols-12 lg:gap-6 items-center relative mt-4 lg:mt-0">             
             {/* GAMBAR 1 */}
             <div className="col-span-1 lg:col-span-7 lg:row-span-2 relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl aspect-square lg:aspect-auto h-full">
                <img 
                    key={getImage(0).id} 
                    src={getImage(0).src} 
                    alt="Main Activity" 
                    className="w-full h-full object-cover animate-pop"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay dark:bg-white/5"></div>
             </div>

             {/* GAMBAR 2 */}
             <div className="col-span-1 lg:col-span-5 relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl aspect-square">
                <img 
                    key={getImage(1).id} 
                    src={getImage(1).src} 
                    alt="Side Activity 1" 
                    className="w-full h-full object-cover animate-pop"
                />
             </div>

             {/* GAMBAR 3 */}
             <div className="col-span-1 lg:col-span-5 relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl aspect-square">
                <img 
                    key={getImage(2).id} 
                    src={getImage(2).src} 
                    alt="Side Activity 2" 
                    className="w-full h-full object-cover animate-pop"
                />
             </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;