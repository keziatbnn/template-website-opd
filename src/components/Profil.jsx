import React, { useState } from 'react';
import gedungImg from '../assets/img/gedung.png'; 
import dividerImg from '../assets/img/divider2.png';
import strukturImg from '../assets/img/struktur-org.png';
import kadinImg from '../assets/img/kadin.jpg'; 
import sekretarisImg from '../assets/img/sekretaris.jpg';

const Profil = () => {
  const [activeTab, setActiveTab] = useState('struktur');

  // --- KONTEN TUPOKSI (TEKS) ---
  const TupoksiContent = () => (
    <div className="text-left text-text p-4 md:p-8 animate-zoomIn space-y-6">
      <div className="bg-secondary p-4 rounded-xl border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow duration-300">
        <p className="font-semibold text-lg mb-2">Tugas Dinas Kesehatan</p>
        <p className="text-sm md:text-text leading-relaxed">
          Dinas Kesehatan memiliki tugas melaksanakan urusan pemerintahan bidang kesehatan yang menjadi kewenangan Pemerintah Daerah berdasarkan asas otonomi dan tugas pembantuan.
        </p>
      </div>

      <div>
        <p className="font-semibold text-lg mb-4 text-primary">Fungsi Dinas Kesehatan</p>
        <ul className="list-disc pl-5 space-y-3 text-sm text-text">
          {[
            "Perumusan kebijakan terkait upaya kesehatan, sumber daya manusia (SDM) kesehatan, sediaan farmasi, alat kesehatan dan makanan minuman, serta pemberdayaan masyarakat bidang kesehatan;",
            "Penyelenggaraan urusan pemerintahan dan pelayanan umum terkait upaya kesehatan, sumber daya manusia (SDM) kesehatan, sediaan farmasi, alat kesehatan dan makanan minuman, serta pemberdayaan masyarakat bidang kesehatan;",
            "Pembinaan dan pelaksanaan tugas terkait upaya kesehatan, sumber daya manusia (SDM) kesehatan, sediaan farmasi, alat kesehatan dan makanan minuman, serta pemberdayaan masyarakat bidang kesehatan;",
            "Pemantauan, evaluasi dan pelaporan terkait upaya kesehatan, sumber daya manusia (SDM) kesehatan, sediaan farmasi, alat kesehatan dan makanan minuman, serta pemberdayaan masyarakat bidang kesehatan;",
            "Pelaksanaan kesekretariatan dinas terkait perencanaan dan penganggaran, administrasi dan umum serta organisasi dan kepegawaian;",
            "Pelaksanaan tugas lain yang diberikan oleh Walikota sesuai dengan tugas dan fungsinya."
          ].map((item, idx) => (
             <li key={idx} className="hover:text-primary transition-colors duration-200 cursor-default">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  // --- KONTEN PEJABAT ---
  const PejabatContent = () => {
    const pejabatList = [
        {
            img: kadinImg,
            data: {
                "Nama": "dr. Retno Erawati Wulandari",
                "Pangkat (Golru)": "Pembina Tk. I (IV/b)",
                "TMT Pangkat": "1 April 2022",
                "Jabatan": "Kepala Dinas Kesehatan",
                "TMT Jabatan": "19 April 2024",
                "Unit Kerja": "Dinas Kesehatan",
                "Pendidikan": "S-2 / Profesi Dokter 1998"
            }
        },
        {
            img: sekretarisImg,
            data: {
                "Nama": "Dra. SETYOWATI, Apt",
                "Pangkat (Golru)": "Pembina Tk. I (IV/b)",
                "TMT Pangkat": "01 Oktober 2019",
                "Jabatan": "Sekretaris",
                "TMT Jabatan": "19 April 2024",
                "Unit Kerja": "Dinas Kesehatan",
                "Pendidikan": "S-2 / Profesi Apoteker 1991"
            }
        }
    ];

    return (
        <div className="flex flex-col gap-6 p-4 md:p-8 animate-zoomIn">
            {pejabatList.map((pejabat, idx) => (
                <div 
                    key={idx} 
                    className="flex flex-col md:flex-row bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    style={{ animationDelay: `${idx * 0.2}s` }}
                >
                    {/* Foto */}
                    <div className="w-full md:w-48 bg-gray-200 flex-shrink-0 relative overflow-hidden group">
                        <img 
                            src={pejabat.img} 
                            alt={pejabat.data.Nama} 
                            className="w-full h-full object-cover min-h-[200px] transition-transform duration-500 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Biodata */}
                    <div className="flex-grow p-6">
                        <table className="w-full text-sm text-text">
                            <tbody>
                                {Object.entries(pejabat.data).map(([key, value]) => (
                                    <tr key={key} className="border-b border-gray-100 last:border-0 hover:bg-white transition-colors duration-200">
                                        <td className="py-2 pr-4 font-medium text-gray-500 w-[140px] align-top">{key}</td>
                                        <td className="py-2 px-2 text-gray-400 w-[10px] align-top">:</td>
                                        <td className="py-2 font-semibold text-gray-800 align-top">{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </div>
    );
  };

  return (
    <section className="pt-32 pb-20 min-h-screen container mx-auto px-4 font-poppins relative z-10 overflow-hidden">
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); }
        }
        
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        .animate-bounceIn { animation: bounceIn 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both; }
        .animate-slideUp { animation: slideUpFade 0.8s ease-out both; }
        .animate-slideInRight { animation: slideInRight 0.5s ease-out both; }
        .animate-zoomIn { animation: zoomIn 0.5s ease-out both; }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>

      {/* --- BREADCRUMB --- */}
      <div className="mb-8 text-primary font-medium animate-slideInRight" style={{ animationDelay: '0.1s' }}>
        <span>Beranda</span> <span className="mx-2">/</span> <span className="font-bold">Profil</span>
      </div>

      {/* --- INTRO --- */}
      <div className="flex flex-col lg:flex-row items-center gap-8 mb-20">
        <div className="w-full lg:w-1/3 flex-shrink-0 animate-bounceIn" style={{ animationDelay: '0.2s' }}>
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-base rotate-2 hover:rotate-0 transition-transform duration-500 animate-float">
            <img src={gedungImg} alt="Gedung Dinas Kesehatan" className="w-full h-auto object-cover" />
          </div>
        </div>
        <div className="w-full lg:w-2/3 text-justify leading-relaxed text-sm text-text animate-slideUp" style={{ animationDelay: '0.4s' }}>
          <p>
            Surakarta adalah kota yang tumbuh dalam dekapan tradisi, di mana harmoni dan kesejahteraan masyarakat menjadi denyut nadi kehidupan. 
            Sebagai jantung budaya Jawa, Surakarta terus bersolek menjadi kota modern tanpa meninggalkan jati dirinya. 
            Dinas Kesehatan Kota Surakarta hadir bukan sekadar sebagai penyedia layanan, melainkan sebagai mitra bagi setiap warga untuk merajut kemandirian hidup sehat.
          </p>
          <p className="mt-4">
            Kami percaya bahwa kesehatan adalah fondasi utama bagi masyarakat yang berdaya, selaras dengan semangat Solo yang Sehat, Nyaman, dan Sejahtera. 
            Di sinilah, setiap langkah pelayanan kami dedikasikan untuk merawat kehidupan dengan hati.
          </p>
        </div>
      </div>

      {/* --- VISI & MISI --- */}
      <div className="max-w-4xl mx-auto mb-20 space-y-12">
        <div className="text-center animate-slideUp" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-3xl font-bold text-primary mb-2">Visi</h2>
          <div className="flex justify-center mb-6">
             <img src={dividerImg} alt="divider" className="h-4 md:h-6 object-contain opacity-60" /> 
          </div>
          <div className="bg-secondary rounded-2xl p-6 md:p-8 shadow-inner transform transition-transform duration-300 hover:scale-105">
            <p className="font-medium text-text text-center md:text-lg">
              Mewujudkan Surakarta sebagai kota budaya yang modern, tangguh, gesit, kreatif dan sejahtera.
            </p>
          </div>
        </div>

        <div className="text-center animate-slideUp" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-3xl font-bold text-primary mb-2">Misi</h2>
           <div className="flex justify-center mb-6">
             <img src={dividerImg} alt="divider" className="h-4 md:h-6 object-contain opacity-60" />
          </div>
          <div className="bg-secondary rounded-2xl p-6 md:p-8 shadow-inner text-left transform transition-transform duration-300 hover:scale-[1.02]">
            <ol className="list-decimal list-outside pl-5 space-y-2 text-sm text-text">
              <li>Meningkatkan kualitas kesehatan masyarakat yang berkelanjutan;</li>
              <li>Memperkuat pertumbuhan ekonomi yang adaptif dan berkelanjutan;</li>
              <li>Mewujudkan tata ruang dan infrastruktur kota yang mendukung kemajuan kebudayaan dan pariwisata berkelanjutan;</li>
              <li>Meningkatkan kualitas dan daya saing pemuda dan masyarakat umum, di bidang pendidikan, ekonomi, seni budaya, dan olahraga;</li>
              <li>Mengembangkan tata kelola pemerintahan dan pelayanan publik yang gesit dan kolaboratif berlandaskan semangat gotong royong dan kebinekaan;</li>
              <li>Mewujudkan kemakmuran dan kesejahteraan bersama warga kota yang berkeadilan dan inklusif; dan</li>
              <li>Mewujudkan daerah yang kondusif dan kerukunan antar umat beragama dalam tata kehidupan bermasyarakat yang saling menghormati.</li>
            </ol>
          </div>
        </div>
      </div>

      {/* --- TABS --- */}
      <div className="max-w-5xl mx-auto animate-slideUp" style={{ animationDelay: '1s' }}>
        
        {/* Tombol Tab */}
        <div className="flex flex-nowrap overflow-x-auto no-scrollbar justify-start md:justify-center gap-2 md:gap-4 mb-8 px-1 py-2">
          {[
            { id: 'struktur', label: 'Struktur Organisasi' },
            { id: 'tupoksi', label: 'Tupoksi' },
            { id: 'pejabat', label: 'Pejabat' },
          ].map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex-shrink-0 px-6 py-2 md:px-10 md:py-3 rounded-full font-bold text-sm md:text-base whitespace-nowrap shadow-lg transition-all transform hover:scale-110 active:scale-95 animate-slideInRight
                ${activeTab === tab.id
                  ? 'bg-[#006e61] text-base ring-2 ring-offset-2 ring-[#006e61]'
                  : 'bg-[#38b2ac] text-base hover:bg-[#2c8d89]'
                }
              `}
              style={{ animationDelay: `${1.2 + (idx * 0.1)}s` }} 
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Konten Tab */}
        <div className="bg-primary rounded-3xl p-2 md:p-4 shadow-2xl transition-all duration-500">
          <div className="bg-base rounded-2xl overflow-hidden min-h-[300px] flex items-center justify-center p-2 bg-base relative">
            
            <div key={activeTab} className="w-full animate-zoomIn"> 
                {activeTab === 'tupoksi' ? (
                    <TupoksiContent />
                ) : activeTab === 'pejabat' ? (
                    <PejabatContent />
                ) : (
                    <img 
                      src={strukturImg} 
                      alt="Struktur Organisasi"
                      className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                    />
                )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Profil;