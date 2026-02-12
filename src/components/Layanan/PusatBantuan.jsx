import React, { useState } from 'react';
import { FaPlus, FaMinus, FaCamera, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import alur from '../../assets/img/alur-aduan.jpg';
import pengelola from '../../assets/img/pengelola-aduan.png';

const penyelesaianLinks = {
    "2023": "https://drive.google.com/file/d/1SaxjoQXhbU4zFUGAocfDi1yE57DoKLXM/preview",
    "2022": "https://drive.google.com/file/d/1zKlaPEWQo5VF0Di_gM9c14FfOsth8K_M/preview",
    "2021": "https://drive.google.com/file/d/1ZMKbU0OBg_vvevbL-HTXYJLceM9EaRSE/preview"
};

const skPdfLink = "https://drive.google.com/file/d/1_fF2fV1zeFNN2SFLDr7gXTBzxZvcFi4E/preview";

const PusatBantuan = () => {
  // --- STATE FAQ ---
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // --- DATA FAQ ---
  const faqData = [
    {   q: "Apa saja layanan yang ada di Dinas Kesehatan?", 
        a: "SIPNAKES, Penerbitan STPT, Penerbitan Sertifikat Standar Faskes, SIPAPAK, Pelayanan Data dan Informasi, Penerbitan Kartu JKN KIS dan SPGDT." },
    {   q: "Apa itu SIPNAKES?", 
        a: "Sistem informasi ini merupakan alat bantu yang disediakan oleh Dinas Kesehatan bagi masyarakat yang bermaksud mencari informasi atau mengurus perizinan atau prasyarat perizinan bidang Kesehatan." },
    {   q: "Bagaimana jika saya mempunyai permasalahan dalam mengurus perizinan tenaga kesehatan?", 
        a: "Untuk permasalahan terkait perizinan tenaga kesehatan, dapat mengirimkan email ke sipnakes.dinkes@gmail.com." },
    {   q: "Apa itu SIPAPAK?", 
        a: "SIPAPAK adalah Sistem Informasi Pelayanan Administrasi Penetapan Angka Kredit." },
    {   q: "Bagaimana alur permohonan data dan informasi di Dinas Kesehatan Kota Surakarta?", 
        a: "Membawa persyaratan lengkap, menyerahkan berkas ke petugas, mengisi formulir permohonan, berkas diverifikasi oleh petugas, pemohon mengambil surat balasan." },
    {   q: "Apa saja persyaratan pengajuan KIS APBD?", 
        a: "Pengajuan melalui Kelurahan setempat dengan membawa syarat-syarat sebagai berikut : Surat keterangan RT, RW dan Kelurahan bagi penduduk tidak mampu berdomisili di Kota Surakarta lebih dari 5 tahun, fotocopy KTP, fotocopy KK, fotocopy Kartu Identitas Anak (KIA) dan Akta Kelahiran, Surat pernyataan tidak mampu membayar premi BPJS yang diketahui Lurah." },
    {   q: "Berapa lama pengajuan KIS APBD?", 
        a: "Maksimal 2 bulan." },
    {   q: "Jika saya dalam kondisi darurat dan belum mempunyai KIS, apakah bisa mengusulkan percepatan KIS APBD?", 
        a: "Bisa, pengajuan berkas langsung ke Dinas kesehatan Kota Surakarta dengan membawa persyaratan sebagai berikut: Surat keterangan sakit dari Rumah Sakit/ Puskesmas yang menyatakan peserta membutuhkan penanganan lebih lanjut, fotocopy KK, E-KTP, KIA dan Akta Kelahiran, Surat pernyataan tidak mampu membayar premi BPJS (tulisan tangan) yang diketahui Lurah, Surat keterangan domisili 5 tahun berturut-turut dan tidak mampu dr RT, RW dan Lurah." },
    {   q: "Apa itu SIPUKIS?", 
        a: "SIPUKIS adalah Sistem Informasi yang membantu masyarakat untuk melacak pengajuan KIS APBD sampai di mana." },
    {   q: "Bagaimana caranya jika saya ingin memberikan saran, kritik dan keluhan tentang layanan yang ada Dinas Kesehatan Kota Surakarta?", 
        a: (
            <>
            Saran, kritik dan keluhan bisa melalui : <br />
            – Pengaduan langsung ke Dinas Kesehatan <br />
            – Telepon/WA 0271-644704 <br />
            – Email : dinkes@surakarta.go.id <br />
            – Instagram : dinkessurakarta <br />
            – Pengaduanmasyarakat.surakarta.go.id (ULAS) <br />
            – Kotak Saran <br />
            </>
        ) },
  ];

  // --- STATE ADUAN ---
  const [activeTab, setActiveTab] = useState('alur');
  const [activeYear, setActiveYear] = useState('2023'); 
  const years = ["2023", "2022", "2021"];

  return (
    <section className="pt-32 pb-20 min-h-screen container mx-auto px-4 font-poppins relative z-10">      
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideUpFade {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-tab-content {
            animation: slideUpFade 0.4s ease-out forwards;
        }
        .animate-accordion-content {
            transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
        }
      `}</style>

      {/* Breadcrumb */}
      <div className="mb-8 text-primary font-medium">
        <span>Beranda</span> <span className="mx-2">/</span> <span className="font-bold">Pusat Bantuan</span>
      </div>

      {/* --- SECTION 1: FAQ --- */}
      <div className="max-w-4xl mx-auto mb-20 animate-tab-content" style={{ animationDelay: '0.1s' }}>
        <div className="bg-primary rounded-3xl p-6 md:p-10 shadow-xl text-base">
          <h2 className="text-center text-3xl font-bold mb-8">FAQ</h2>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-base/20 last:border-0 pb-2">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center text-left py-3 focus:outline-none group transition-all duration-300"
                >
                  <span className="font-semibold text-sm md:text-base pr-4">{item.q}</span>
                  <span className={`text-xs p-1 bg-base/20 rounded-full group-hover:bg-base/40 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                    {openFaqIndex === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>
                <div 
                  className={`overflow-hidden animate-accordion-content ${
                    openFaqIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-sm text-base/90 pb-4 pl-1 border-l-2 border-yellow-400 ml-1">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- SECTION 2: ADUAN --- */}
      <div className="max-w-5xl mx-auto mb-20 animate-tab-content" style={{ animationDelay: '0.2s' }}>
        <h2 className="text-center text-3xl font-bold text-primary mb-8">ADUAN</h2>

        {/* TAB BUTTONS */}
        <div className="flex items-end overflow-x-auto no-scrollbar gap-1 -mb-[1px] relative z-10 px-2 md:px-0 md:justify-center">
          {[
            { id: 'alur', label: 'Alur Aduan' },
            { id: 'pengelola', label: 'Pengelola Aduan' },
            { id: 'sk', label: 'SK Pengelola' }, 
            { id: 'penyelesaian', label: 'Penyelesaian Aduan' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex-shrink-0 
                w-[140px] md:w-48
                rounded-t-2xl 
                font-semibold 
                text-xs md:text-base 
                transition-all duration-300
                text-center
                border-t-4 border-x-0
                
                ${activeTab === tab.id 
                  ? 'bg-primary text-base border-primary py-4 z-20 shadow-md' 
                  : 'bg-tertiary text-base/90 border-transparent hover:bg-primary/80 py-3 z-10'}
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB CONTENT CONTAINER */}
        <div className="bg-primary p-3 md:p-5 rounded-b-3xl md:rounded-tr-3xl md:rounded-tl-3xl shadow-lg relative z-0 transition-all duration-300">
          
          <div className="bg-base rounded-2xl overflow-hidden h-[350px] md:h-[500px] flex flex-col items-center justify-start p-2 md:p-4 w-full">
            <div key={activeTab} className="w-full h-full animate-tab-content">
                {activeTab === 'alur' && (
                   <img src={alur} alt="Alur Aduan" className="w-full h-full object-contain" />
                )}
                
                {activeTab === 'pengelola' && (
                   <img src={pengelola} alt="Pengelola Aduan" className="w-full h-full object-contain" />
                )}

                {activeTab === 'sk' && (
                   <iframe 
                      src={skPdfLink}
                      title="SK Pengelola"
                      className="w-full h-full border-0 rounded-md"
                   ></iframe>
                )}

                {activeTab === 'penyelesaian' && (
                   <div className="w-full h-full flex flex-col gap-3">
                      
                      <div className="flex w-full gap-1 border-b border-gray-100 pb-2 mb-2">
                        {years.map((year) => (
                            <button
                                key={year}
                                onClick={() => setActiveYear(year)}
                                className={`
                                    flex-1
                                    py-2 
                                    rounded-lg 
                                    text-xs md:text-sm font-bold 
                                    transition-all duration-300
                                    text-center
                                    ${activeYear === year 
                                        ? 'bg-primary text-base shadow-md scale-105' 
                                        : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}
                                `}
                            >
                                {year}
                            </button>
                        ))}
                      </div>

                      <div key={activeYear} className="flex-grow w-full bg-gray-50 rounded-lg overflow-hidden border border-gray-200 relative animate-tab-content">
                         <iframe 
                            src={penyelesaianLinks[activeYear] || "about:blank"}
                            title={`Penyelesaian Aduan ${activeYear}`}
                            className="w-full h-full border-0"
                         ></iframe>
                         
                         {!penyelesaianLinks[activeYear] && (
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs">
                                Dokumen tahun {activeYear} belum tersedia.
                            </div>
                         )}
                      </div>

                   </div>
                )}
            </div>

          </div>
        </div>
      </div>

      {/* --- SECTION 3: FORM ULAS --- */}
      <div className="max-w-5xl mx-auto animate-tab-content" style={{ animationDelay: '0.3s' }}>
        <div className="bg-gray-50/90 backdrop-blur-sm rounded-3xl shadow-xl p-6 md:p-10 border border-gray-200">
          
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold text-orange-500 mb-1">ulas</h3>
            <p className="text-xs text-orange-400 tracking-widest uppercase mb-2">unit layanan aduan surakarta</p>
            <h4 className="text-xl font-bold text-primary">Dinas Kesehatan</h4>
          </div>

          <div className="flex gap-2 mb-6">
            <button className="px-4 py-1 bg-blue-900 text-base text-xs rounded-md font-bold transition-transform hover:scale-105">Kirim Aspirasi</button>
            <button className="px-4 py-1 bg-blue-400 text-base text-xs rounded-md font-bold hover:bg-blue-500 transition-transform hover:scale-105">Pencarian Aspirasi</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Sifat Aduan <span className="text-red-500">*</span></label>
                <select className="w-full bg-gray-100 border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-primary transition-all"><option>Publik</option><option>Rahasia</option></select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Judul</label>
                <input type="text" placeholder="Judul Aduan" className="w-full bg-gray-100 border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-primary transition-all"/>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Isi <span className="text-red-500">*</span></label>
                <textarea rows="4" placeholder="Isi aduan..." className="w-full bg-gray-100 border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-primary transition-all"></textarea>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                   <label className="block text-xs font-bold text-gray-600 mb-1">Kecamatan <span className="text-red-500">*</span></label>
                   <select className="w-full bg-gray-100 border border-gray-300 rounded-md p-2 text-sm"><option>-- Pilih --</option></select>
                </div>
                <div>
                   <label className="block text-xs font-bold text-gray-600 mb-1">Kelurahan <span className="text-red-500">*</span></label>
                   <select className="w-full bg-gray-100 border border-gray-300 rounded-md p-2 text-sm"><option>-- Pilih --</option></select>
                </div>
              </div>
              <div className="flex gap-2 mt-2">
                <button className="flex items-center gap-2 bg-[#008F86] text-base px-4 py-2 rounded-md text-xs font-bold hover:bg-primary transition-colors"><FaCamera /> Foto</button>
                <button className="flex items-center gap-2 bg-[#008F86] text-base px-4 py-2 rounded-md text-xs font-bold hover:bg-primary transition-colors"><FaMapMarkerAlt /> Lokasi</button>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Nama Pengirim <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Nama Anda" className="w-full bg-gray-100 border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-primary transition-all"/>
              </div>
               <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Email <span className="text-red-500">*</span></label>
                <input type="email" placeholder="Email Anda" className="w-full bg-gray-100 border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-primary transition-all"/>
              </div>
               <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">No HP <span className="text-red-500">*</span></label>
                <input type="tel" placeholder="Nomor HP" className="w-full bg-gray-100 border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-primary transition-all"/>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Jenis Kelamin <span className="text-red-500">*</span></label>
                <select className="w-full bg-gray-100 border border-gray-300 rounded-md p-2 text-sm"><option>Laki-laki</option><option>Perempuan</option></select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Domisili <span className="text-red-500">*</span></label>
                <select className="w-full bg-gray-100 border border-gray-300 rounded-md p-2 text-sm"><option>-- Pilih --</option></select>
              </div>
              <div className="flex justify-end pt-4">
                 <button className="flex items-center gap-2 bg-[#008F86] text-base px-6 py-2 rounded-full font-bold shadow-lg transform hover:scale-105 hover:bg-primary transition-all">
                    Kirim <FaPaperPlane className="text-sm"/>
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default PusatBantuan;