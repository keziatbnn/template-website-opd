import React, { useState, useEffect, useRef } from 'react';
import { FaArrowRight, FaUser, FaCalendarAlt } from 'react-icons/fa';
import artikel1 from '../../assets/img/artikel1.jpg'
import artikel2 from '../../assets/img/artikel2.jpg'
import artikel3 from '../../assets/img/artikel3.jpg'
import artikel4 from '../../assets/img/artikel4.jpg'
import ornamen from '../../assets/img/ornamen.png'

const articles = [
  {
    id: 1,
    title: "Pemberian Makanan Tambahan",
    author: "Gani Gunawan",
    date: "12 Jan 2026",
    excerpt: "Pemberian Makanan Tambahan (PMT) ialah makanan tambahan pangan lokal yang diberikan untuk memenuhi kesenjangan asupan gizi guna memperbaiki status gizi balita.",
    image: artikel1,
    isFeatured: true
  },
  {
    id: 2,
    title: "HOAX Diskusi Nasional Wirausaha",
    author: "Gani Gunawan",
    date: "10 Jan 2026",
    excerpt: "Telah beredar surat palsu terkait undangan Diskusi Nasional Wirausaha yang mengatasnamakan Dinas Kesehatan. Harap waspada.",
    image: artikel2,
    isFeatured: false
  },
  {
    id: 3,
    title: "Baby Cafe Bintangku",
    author: "Gani Gunawan",
    date: "08 Jan 2026",
    excerpt: "Apa jadinya kalau bayi tak mendapatkan makanan pendamping yang tepat? Baby Cafe Bintangku hadir sebagai solusi gizi.",
    image: artikel3,
    isFeatured: false
  },
  {
    id: 4,
    title: "Cuaca Panas Bukan Alasan Tumbang",
    author: "Gani Gunawan",
    date: "05 Jan 2026",
    excerpt: "Gerah, keringetan, bawaannya pengen rebahan terus? Eits, jangan sampai cuaca panas bikin produktivitas menurun.",
    image: artikel4,
    isFeatured: false
  }
];

const Artikel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  const featuredArticle = articles.find(a => a.isFeatured) || articles[0];
  const listArticles = articles.filter(a => a.id !== featuredArticle.id);

  return (
    <section className="relative w-full pt-20 pb-0 overflow-visible z-10 transition-colors duration-300">
      
      <div className="absolute inset-0 bg-primary rounded-t-4xl -mb-1 shadow-2xl transition-colors duration-300"></div>
      
      {/* --- ORNAMEN POJOK --- */}
      <div className="absolute top-0 left-0 p-2 w-32 h-32 md:w-48 md:h-48 pointer-events-none z-10">
         <img src={ornamen} alt="Ornamen Sudut" className="w-full h-full object-contain " />
      </div>

      <div className="absolute top-0 right-0 p-2 w-32 h-32 md:w-48 md:h-48 pointer-events-none z-10">
         <img src={ornamen} alt="Ornamen Sudut" className="w-full h-full object-contain rotate-[90deg]" />
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <div 
        ref={sectionRef}
        className={`
            container mx-auto px-6 relative z-10 pb-20
            transition-all duration-1000 ease-out transform
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
        `}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">Artikel Kesehatan</h2>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
            
            {/* === CARD BESAR === */}
            <div className="bg-secondary rounded-2xl overflow-hidden shadow-2xl group cursor-pointer hover:-translate-y-2 transition-all duration-300 border border-transparent">
                <div className="mx-7 mt-7 rounded-2xl h-60 md:h-60 overflow-hidden relative">
                    <img src={featuredArticle.image} alt={featuredArticle.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duraaccent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-primary transition-colors">{featuredArticle.title}</h3>
                    <div className="flex items-center gap-4 text-xs md:text-sm text-text mb-4">
                        <span className="flex items-center gap-1"><FaUser /> {featuredArticle.author}</span>
                        <span className="flex items-center gap-1"><FaCalendarAlt /> {featuredArticle.date}</span>
                    </div>
                    <p className="text-text leading-relaxed mb-4 line-clamp-3">{featuredArticle.excerpt}</p>
                    <span className="text-primary font-bold text-sm hover:underline cursor-pointer">Baca Selengkapnya...</span>
                </div>
            </div>

            {/* === LIST CARD === */}
            <div className="flex flex-col gap-5">
                {listArticles.map((article) => (
                    <div key={article.id} className="bg-secondary rounded-2xl p-4 flex gap-4 shadow-lg hover:shadow-xl hover:translate-x-2 transition-all duration-300 cursor-pointer group border border-transparent">
                        <div className="w-24 h-24 md:w-38 md:h-25 shrink-0 rounded-xl overflow-hidden">
                            <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duraaccent" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h4 className="font-bold text-text mb-1 leading-tight group-hover:text-primary transition-colors line-clamp-2">{article.title}</h4>
                            <p className="text-xs text-text mb-2">{article.author}</p>
                            <p className="text-xs md:text-sm text-text line-clamp-2">{article.excerpt}</p>
                        </div>
                    </div>
                ))}

                <div className="flex justify-end mt-2">
                    <button className="bg-secondary hover:bg-gray-100 text-primary px-6 py-2 rounded-full font-bold shadow-lg flex items-center gap-2 hover:scale-105 transition-all duraaccent">
                        Lihat Lainnya <FaArrowRight />
                    </button>
                </div>
            </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none -mt-10 z-0 translate-y-[99%]">
        <svg 
            className="relative block w-full h-[80px] md:h-[120px]" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
        >
            <path 
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                className="fill-primary transition-colors duration-300"
            />
        </svg>
      </div>

    </section>
  );
};

export default Artikel;