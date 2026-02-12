import React from 'react';
import { 
  FaUserCircle, 
  FaBullseye, 
  FaCogs, 
  FaSyncAlt, 
  FaChartBar, 
  FaFileAlt 
} from 'react-icons/fa';

const ProfilPPID = () => {

  // --- DATA DOKUMEN ---
  const documents = [
    {
      id: 1,
      title: "Profil PPID",
      desc: "Dokumen SK Tim Pejabat Pengelola Informasi dan Dokumentasi (PPID) Pelaksana Dinas Kesehatan Kota Surakarta",
      icon: <FaUserCircle />,
      link: "https://drive.google.com/file/d/1YEdzG9iWWFZuH12xu2bNVmQSonBEpn8E/view?usp=sharing" 
    },
    {
      id: 2,
      title: "RENJA",
      desc: "Dokumen Rencana Kerja 2026 Dinas Kesehatan Kota Surakarta",
      icon: <FaBullseye />,
      link: "https://drive.google.com/file/d/1JMLqNqHrfGTPQ43F5E8vlpBSOq4b1chc/view?usp=sharing"
    },
    {
      id: 3,
      title: "RENSTRA",
      desc: "Dokumen Rencana Strategis 2025-2029 Dinas Kesehatan Kota Surakarta",
      icon: <FaCogs />,
      link: "https://drive.google.com/file/d/1e3Di3Lh5pxuqIQMoFTHo9VWGSz9SWqn6/view?usp=sharing"
    },
    {
      id: 4,
      title: "Perubahan RENSTRA",
      desc: "Perubahan Renstra Dinas Kesehatan Kota Surakarta Tahun 2021-2026",
      icon: <FaSyncAlt />,
      link: "https://drive.google.com/file/d/1O9zmUBPZsJVvGv7BaThxKQ-ikVt60HXh/view?usp=sharing"
    },
    {
      id: 5,
      title: "LKjIP",
      desc: "Laporan Kinerja Instansi Pemerintah Dinas Kesehatan Kota Surakarta Tahun 2025",
      icon: <FaChartBar />,
      link: "https://drive.google.com/file/d/1FlHr6eqiKJ6YdqHocfeKU1DVOX-lsIxg/view?usp=sharing"
    },
    {
      id: 6,
      title: "Laporan Pelayanan",
      desc: "Laporan Pelayanan Informasi Publik 2025 PPID Pelaksana Dinas Kesehatan Kota Surakarta",
      icon: <FaFileAlt />,
      link: "https://drive.google.com/file/d/1qLGHsP61HzOTvej-pDTp7PCpctUvXl5E/view?usp=sharing"
    },
  ];

  return (
    <section className="pt-32 pb-20 container mx-auto px-4 font-poppins relative z-10">
      
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .card-enter {
          opacity: 0; /* Awal sembunyi */
          animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* --- BREADCRUMB --- */}
      <div className="mb-8 text-primary font-medium">
        <span>Beranda</span> <span className="mx-2">/</span> <span className="font-bold">Profil PPID</span>
      </div>

      {/* --- GRID CONTAINER --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        
        {documents.map((item, index) => (
          <div 
            key={item.id}
            className="card-enter group bg-primary rounded-3xl p-6 md:p-8 relative shadow-lg hover:shadow-2xl transition-all duration-300 border border-teal-600 flex items-start gap-6 overflow-hidden hover:-translate-y-1 cursor-pointer"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-base to-transparent"></div>

            {/* --- ICON --- */}
            <div className="text-base text-5xl md:text-7xl opacity-90 flex-shrink-0 mt-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              {item.icon}
            </div>

            {/* --- TEXT CONTENT --- */}
            <div className="flex-grow pr-16 text-base">
              <h3 className="text-xl md:text-2xl font-bold mb-2 uppercase tracking-wide">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm font-light opacity-90 leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* --- BUTTON --- */}
            <a 
              href={item.link}
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 bg-base text-primary w-14 h-14 rounded-full flex flex-col items-center justify-center shadow-lg transition-all duration-300 z-20 group-hover:bg-yellow-50 cursor-pointer text-decoration-none transform group-hover:scale-110 group-hover:rotate-6"
            >
              <span className="text-[10px] font-bold leading-none mt-1">Lihat</span>
              <span className="text-[10px] font-bold leading-none">PDF</span>
            </a>

          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfilPPID;