import React, { useState, useEffect, useRef } from 'react';
import { FaHeart, FaChild, FaFileAlt, FaCar } from 'react-icons/fa';
import divider from '../../assets/img/divider.png'

const Inovasi = () => {
  const satelliteNodes = [
    { id: 1, title: "Posyandu Juara", icon: <FaChild />, position: "tl" },
    { id: 2, title: "PELARI", icon: <FaFileAlt />, position: "tr" }, 
    { id: 3, title: "LAPOR PAMAN", icon: <FaFileAlt />, position: "bl" },
    { id: 4, title: "SIGAP", icon: <FaCar />, position: "br" },
  ];

  const centerNode = {
    title: "KIE Kesehatan Jiwa",
    icon: <FaHeart />,
  };

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, 200);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 } 
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const getShapeClass = (pos) => {    
    const baseClass = "rounded-full ";
    switch (pos) {
      case 'tl': 
        return baseClass + "md:rounded-tl-none md:rounded-tr-[100px] md:rounded-bl-[100px] md:rounded-br-none md:-translate-x-12 md:-translate-y-8";
      case 'tr': 
        return baseClass + "md:rounded-tr-none md:rounded-tl-[100px] md:rounded-br-[100px] md:rounded-bl-none md:translate-x-12 md:-translate-y-8";
      case 'bl': 
        return baseClass + "md:rounded-bl-none md:rounded-tl-[100px] md:rounded-br-[100px] md:rounded-tr-none md:-translate-x-12 md:translate-y-8";
      case 'br': 
        return baseClass + "md:rounded-br-none md:rounded-tr-[100px] md:rounded-bl-[100px] md:rounded-tl-none md:translate-x-12 md:translate-y-8";
      default: return baseClass;
    }
  };

  return (
    <section className="relative w-full py-15 z-10 overflow-hidden">
      <div 
        ref={sectionRef}
        className={`
            container mx-auto px-4
            transition-all duration-1000 ease-out transform
        `}
      >
        <img 
            src={divider} 
            alt="Divider Top" 
            className={`mx-auto mt-15 w-full md:w-200 mb-6 object-contain opacity-80 rotate-[180deg] transition-all duration-1000 ${isVisible ? 'opacity-80 translate-y-0' : 'opacity-0 -translate-y-10'}`}
        />
        <h2 className={`text-3xl md:text-5xl font-bold text-primary text-center mb-20 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Inovasi</h2>

        {/* Container Utama */}
        <div className="relative w-full max-w-[800px] mx-auto h-auto md:h-[500px] flex flex-col md:block items-center gap-4 md:gap-6">

          {/* KIE Kesehatan Jiwa */}
          <div className="w-full md:w-auto md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-50 order-1">
            <div className={`
                /* Mobile Style */
                w-full h-32 
                bg-primary 
                rounded-full 
                flex flex-col items-center justify-center 
                text-base drop-shadow-2xl p-6 text-center 
                border-1 border-base

                /* Desktop Style */
                md:w-80 md:h-55 md:rounded-[100px]

                /* Animation */
                hover:scale-105 hover:z-50
                transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] 
                ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
            `}>
                <div className="text-4xl md:text-7xl mb-3 md:mb-2">
                    {centerNode.icon}
                </div>
                <div className='inline-block bg-base text-primary px-4 py-1 rounded-full'>
                  <h3 className="text-xl md:text-2xl font-bold leading-tight">
                    {centerNode.title}
                  </h3>
                </div>
            </div>
          </div>

          {/* Node Satelit (Kelopak) */}
          <div className="w-full md:absolute md:inset-0 order-2 z-10">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 h-full'>
              {satelliteNodes.map((node) => (
                <div 
                  key={node.id}
                  className={`
                    flex w-full h-full
                    ${node.position.includes('t') ? 'md:items-end' : 'md:items-start'} 
                    ${node.position.includes('l') ? 'md:justify-end' : 'md:justify-start'}
                  `}
                >
                  <div className={`
                    /* Mobile Style */
                    w-full md:w-[330px] h-32 md:h-[230px] bg-primary 
                    flex flex-col items-center justify-center text-base drop-shadow-2xl p-6 text-center
                    border-1 border-base hover:scale-105 hover:z-50
                    
                    transition-all duration-1000 delay-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    
                    ${getShapeClass(node.position)}
                    
                    ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0 md:!translate-x-0 md:!translate-y-0'}
                  `}>
                      <div className="text-4xl md:text-5xl mb-3">
                          {node.icon}
                      </div>
                      {/* Label Putih */}
                      <div className="inline-block bg-base text-primary px-4 py-1 rounded-full">
                          <h3 className="text-xl md:text-2xl font-bold">
                              {node.title}
                          </h3>
                      </div>
                  </div>
                </div>
              ))}
            </div>            
          </div>
        </div>
        <img 
            src={divider} 
            alt="Divider Down" 
            className={`mx-auto mt-15 w-full md:w-200 object-contain opacity-80 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-80 translate-y-0' : 'opacity-0 translate-y-10'}`}
        />
      </div>
    </section>
  );
};

export default Inovasi;