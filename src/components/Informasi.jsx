import React, { useState } from 'react';
import DBD from '../assets/img/dbd.png'; 

const Informasi = () => {
  // --- STATE ---
  const [activeTab, setActiveTab] = useState("Informasi Berkala");
  const [activeMenu, setActiveMenu] = useState("Profil Kesehatan");
  const [activeYear, setActiveYear] = useState("2024"); 

  // --- DATA ---
  const tabs = ["Informasi Berkala", "Informasi Serta Merta", "Informasi Setiap Saat", "Informasi Dikecualikan"];
  const sideMenus = ["Profil Kesehatan", "Profil SDMK", "Buku Saku", "Solo Data"];
  const years = ["2024", "2023", "2022", "2021", "2020"];

  // --- DATABASE LINK ---
  const defaultLink = "https://drive.google.com/file/d/12WHn_pTd-bhvBoZeZnPN-7tDiC80GtPz/preview";

  const linkDatabase = {
    "Profil Kesehatan": {
        "2024": defaultLink, 
        "2023": "https://drive.google.com/file/d/18j4ebByWOfY1ZqdUDoRNsIpyk0eGYKeQ/preview", 
        "2022": "https://drive.google.com/file/d/1AYhRguK26NRX4mxK7lJZyOJp3h_Nalyr/preview",
        "2021": "https://drive.google.com/file/d/1jucKipZe4lUP3ml8Lswzg_SmnEkxcWNg/preview",
        "2020": "https://drive.google.com/file/d/1yyDJTww-wZ9iOz90lf8yvgkWnkASLGNr/preview",
    },
    "Profil SDMK": { "2024": "https://drive.google.com/file/d/1sB7GZY8Hb7xbHNmDJGeQBKukxLwOZQnw/preview" },
    "Buku Saku": { "2024": "https://drive.google.com/file/d/10SV50hU7wBwweNDHuJEIULf893xsKxJH/preview" },
    "Solo Data": { "2024": "https://drive.google.com/file/d/1_Ba4mtFuYQHmzPACId-DibcdyJ66wnn_/preview" }
  };

  const getEmbedUrl = () => {
    try {
        const specificLink = linkDatabase[activeMenu]?.[activeYear];
        return specificLink || defaultLink; 
    } catch (e) {
        return defaultLink;
    }
  };

  return (
    <section className="pt-24 md:pt-32 pb-20 min-h-screen container mx-auto px-4">
        <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes fadeInSlide {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-tab-change {
            animation: fadeInSlide 0.5s ease-out forwards;
        }
      `}</style>
      
      {/* --- BREADCRUMB --- */}
      <div className="mb-8 text-primary font-medium">
        <span>Beranda</span> <span className="mx-2">/</span> <span className="font-bold">Informasi</span>
      </div>

      {/* 2. TAB ATAS */}
      <div className="flex items-end pl-2 md:pl-6 overflow-x-auto no-scrollbar relative z-10 -mb-[1px]">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                  relative px-6 md:px-10 py-3 md:py-4 font-medium text-xs md:text-base whitespace-nowrap transition-all duration-300 flex justify-center items-center -mx-1 md:-mx-2 first:ml-0
                  ${isActive ? 'text-base z-20 pt-5 md:pt-6 pb-4 md:pb-5' : 'text-base/80 z-10 mt-2 md:mt-3 hover:text-base'}
              `}
            >
              <div className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-sm">
                 <svg viewBox="0 0 270 63" preserveAspectRatio="none" className="w-full h-full">
                    <path d="M23.0412 10.6437C25.9409 4.16808 32.3742 0 39.4694 0H231.272C238.447 0 244.936 4.26026 247.788 10.843L270 62.1H0L23.0412 10.6437Z" 
                        className={`transition-colors duration-300 ${isActive ? 'fill-primary' : 'fill-tertiary'}`} />
                 </svg>
              </div>
              <span className="relative z-10">{tab}</span>
            </button>
          );
        })}
      </div>

      {/* 3. MAIN CONTAINER */}
      <div className="bg-primary rounded-b-3xl lg:rounded-3xl p-4 md:p-10 shadow-2xl relative z-20 min-h-[500px]">        
        <div key={activeTab} className="animate-tab-change w-full h-full">

            {activeTab === "Informasi Berkala" ? (
                <div className="flex flex-col lg:flex-row gap-6 md:gap-8 h-full">
                    
                    {/* SIDEBAR MENU */}
                    <div className="w-full lg:w-1/4 flex flex-col gap-4">
                        <div className="bg-base p-2 md:p-4 rounded-2xl border border-base/10 backdrop-blur-sm grid grid-cols-2 lg:flex lg:flex-col gap-2">
                            {sideMenus.map((menu) => (
                                <button
                                    key={menu}
                                    onClick={() => { setActiveMenu(menu); setActiveYear("2024"); }}
                                    className={`
                                        w-full text-left px-3 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl font-semibold transition-all duration-300 shadow-sm text-center text-xs md:text-base
                                        ${activeMenu === menu 
                                            ? 'bg-tertiary text-base ring-2 ring-base/30 scale-105 shadow-md' 
                                            : 'bg-primary text-base/70 hover:bg-tertiary hover:text-base'
                                        }
                                    `}
                                >
                                    {menu}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* KONTEN KANAN */}
                    <div className="w-full lg:w-3/4 flex flex-col gap-4 md:gap-6">
                        
                        {/* TAHUN */}
                        {activeMenu === "Profil Kesehatan" && (
                            <div className="bg-base rounded-2xl p-1 md:p-2 flex w-full gap-1 md:gap-2 items-center shadow-inner">
                                {years.map((year) => (
                                    <button
                                        key={year}
                                        onClick={() => setActiveYear(year)}
                                        className={`
                                            flex-1 
                                            py-2 md:py-2 
                                            rounded-lg md:rounded-xl 
                                            
                                            /* PERBAIKAN: Gunakan 'text-sm' untuk desktop (karena 'text-base' adalah warna) */
                                            text-xs md:text-sm font-bold 
                                            transition-all duration-300
                                            
                                            /* Logic Warna (text-base dipakai di sini saat aktif) */
                                            ${activeYear === year
                                                ? 'bg-primary text-base shadow-md'
                                                : 'bg-transparent text-gray-500 hover:bg-gray-200'
                                            }
                                        `}
                                    >
                                        {year}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* IFRAME PDF */}
                        <div className="flex-grow bg-base rounded-2xl md:rounded-3xl overflow-hidden shadow-inner relative h-[50vh] md:h-[85vh]">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-500 z-0">
                                <div className="text-center">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
                                    <p className="font-bold text-sm md:text-lg">Memuat Data...</p>
                                </div>
                            </div>
                            <iframe 
                                src={getEmbedUrl()}
                                className="relative z-10 w-full h-full border-0 bg-base"
                                title="Preview"
                                allow="autoplay"
                            ></iframe>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-full flex flex-col items-center justify-center min-h-[300px] md:min-h-[500px]">
                    
                    {activeTab === "Informasi Serta Merta" && (
                        <div className="w-full justify-center items-center p-0 md:px-4">
                            <h3 className='text-base font-bold text-xl md:text-2xl pb-5'>DBD Tahun 2023</h3>
                            <img 
                                src={DBD} 
                                alt="Informasi DBD"
                                className="w-full max-w-4xl h-auto rounded-xl shadow-2xl border-4 border-base/20"
                            />
                        </div>
                    )}

                    {(activeTab === "Informasi Setiap Saat" || activeTab === "Informasi Dikecualikan") && (
                        <div className="text-center text-base/80 py-10">
                            <svg className="w-16 h-16 md:w-20 md:h-20 mb-4 opacity-50 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <h3 className="text-xl md:text-2xl font-bold">Belum Ada Data</h3>
                            <p className="text-xs md:text-sm mt-2 opacity-75 px-4">Informasi untuk bagian ini belum tersedia.</p>
                        </div>
                    )}
                </div>
            )}
        
        </div>

      </div>
    </section>
  );
};

export default Informasi;