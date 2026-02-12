import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaDatabase, FaShieldAlt, FaPhoneAlt, FaStethoscope } from 'react-icons/fa';

const Layanan = () => {
  const services = [
    {
      id: 1,
      title: "Pengambilan Data & Penelitian",
      desc: "Alat bantu bagi masyarakat yang bermaksud mengurus perizinan penelitian, pendahuluan, uji validitas dan realibitas dengan kejelasan syarat, prosedur, waktu, biaya dan keterbukaan informasi proses yang diberikan.",
      icon: <FaDatabase />,
      color: "bg-green-500"      
    },
    {
      id: 2,
      title: "Layanan SPGDT",
      desc: "Mekanisme pelayanan Korban/Pasien Gawat Darurat yang terintegrasi dan berbasis call center dengan menggunakan kode akses telekomunikasi 119 dengan melibatkan masyarakat.",
      icon: <FaPhoneAlt />,
      color: "bg-orange-500"
    },
    {
      id: 3,
      title: "SIPUKIS",
      desc: "Akses informasi bagi masyarakatnya untuk memeriksa progress pendaftaran kepesertaan Jaminan Kesehatan Nasional (JKN) melalui layanan online.",
      icon: <FaShieldAlt />,
      color: "bg-blue-500"
    },
    {
      id: 4,
      title: "Penerbitan Rekomendasi Ambulans",
      desc: "Alat bantu bagi masyarakat yang bermaksud mengurus Standar Pelayanan Penerbitan Rekomendasi Ambulans.",
      icon: <FaStethoscope />,
      color: "bg-red-500"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, services.length]); 
  // ------------------------------------------------

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const getCardStyle = (index) => {
    if (index === currentIndex) return "scale-110 opacity-100 z-20 shadow-2xl bg-secondary";
    
    const prevIndex = currentIndex === 0 ? services.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === services.length - 1 ? 0 : currentIndex + 1;

    if (index === prevIndex || index === nextIndex) {
        return "scale-90 opacity-60 z-10 bg-secondary/90 blur-[1px]";
    }
    
    return "hidden";
  };

  return (
    <section className="relative z-40 -mt-15 pb-20 px-4">
      <div 
        ref={sectionRef}
        className={`container mx-auto relative filter drop-shadow-2xl transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}
      >
        
        {/* === KOTAK HIJAU UTAMA === */}
        <div className="container mx-auto bg-primary rounded-[40px] py-16 px-4 relative z-10">
        
          <h2 className="text-3xl md:text-4xl font-bold text-base text-center mb-15">Layanan</h2>

          {/* Container Slider */}
          <div className="relative flex items-center justify-center h-[320px]">
             
             {/* Tombol Kiri */}
             <button 
                 onClick={prevSlide}
                 className="absolute left-0 md:left-4 z-30 bg-white/20 hover:bg-white/40 text-base p-3 rounded-full backdrop-blur-sm transition"
             >
                 <FaChevronLeft size={20} />
             </button>

             <div className="flex items-center justify-center w-full h-full perspective-1000 overflow-visible">
                 {services.map((item, index) => (
                     <div
                         key={item.id}
                         className={`
                             absolute w-[75%] md:w-[400px] 
                             p-4 md:p-8  
                             rounded-3xl transition-all duration-500 ease-in-out flex flex-col items-center justify-center gap-2 md:gap-4 text-center border-2 border-transparent
                             h-[80%] md:h-[300px] flex-none
                             ${getCardStyle(index)}
                             ${index === currentIndex ? 'border-teal-500/20' : ''}
                         `}
                         style={{
                           left: index === currentIndex ? '52%' : 
                                 (index === (currentIndex === 0 ? services.length - 1 : currentIndex - 1)) ? '20%' :
                                 (index === (currentIndex === services.length - 1 ? 0 : currentIndex + 1)) ? '76%' : '50%',
                           transform: `translateX(-50%) ${index === currentIndex ? 'scale(1.1)' : 'scale(0.9)'}`,
                         }}
                     >

                         <div className={`
                            w-14 h-14 md:w-20 md:h-20 
                            rounded-full flex items-center justify-center 
                            text-2xl md:text-3xl 
                            shadow-lg mb-1 md:mb-2 
                            ${item.color}
                         `}>
                             {item.icon}
                         </div>
                     
                         <h3 className="text-sm md:text-xl font-semibold text-text leading-tight">
                             {item.title}
                         </h3>

                         <p className="text-[60%] md:text-xs text-text line-clamp-3 md:line-clamp-4 leading-snug">
                             {item.desc}
                         </p>
                     </div>
                 ))}
             </div>

             {/* Tombol Kanan */}
             <button 
                 onClick={nextSlide}
                 className="absolute right-0 md:right-4 z-30 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition"
             >
                 <FaChevronRight size={20} />
             </button>

          </div>    
        </div>


        <div className="w-[85%] md:w-[550px] mx-auto bg-primary h-24 rounded-b-[40px] -mt-12 relative z-0 flex items-end justify-center pb-6">
            <div className="flex gap-3">
                {services.map((_, idx) => (
                    <div 
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`
                            w-3 h-3 rounded-full cursor-pointer transition-all duration-300 border border-teal-600
                            ${idx === currentIndex ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'}
                        `}
                    />
                ))}
            </div>
         </div>
      </div>      
    </section>
  );
};

export default Layanan;