import React from 'react';
import { FaFacebookF, FaYoutube, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6"; 

const Footer = () => {
  return (
    <footer className="relative w-full mt-10 pb-4">      
      <div className="absolute inset-0 z-0 flex flex-col items-center drop-shadow-[0_-10px_20px_rgba(0,0,0,0.15)]">
        
        <svg 
            className="w-full h-auto min-h-[300px] md:min-h-[00px] object-cover" 
            viewBox="0 0 1441 616" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMin slice"
        >
            <path 
                d="M881.416 0C895.337 9.41625e-05 908.474 6.44289 916.997 17.4502L1048.57 187.377L1441 270.397V615.6H0V273.378L371.482 194.672L508.701 17.4502C517.224 6.44293 530.361 0.000145957 544.282 0H881.416Z" 
                className="fill-primary" 
                fill="#007F73"
            />
        </svg>

        <div className="w-full flex-grow bg-primary -mt-1"></div>
      </div>


      {/* === AKSARA JAWA === */}
      <div className="absolute top-0 w-full text-center z-10 pt-[7vw] md:pt-[5vw]">
            <h3 className="text-xl md:text-3xl font-serif text-base mb-1 drop-shadow-md">
                ꦲꦸꦫꦶꦥ꧀ꦆꦏꦸꦲꦸꦫꦸꦥ꧀
            </h3>
            <p className="text-sm mt-7 md:text-base text-base/90 tracking-widest">Urip Iku Urup</p>
      </div>


      {/* === KONTEN UTAMA === */}
      <div className="relative z-20 container mx-auto px-6 pt-[50vw] md:pt-[22vw] text-base">
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

                {/* KOLOM 1: PETA */}
                <div className="flex flex-col gap-4">
                    <div className="w-full h-48 rounded-xl overflow-hidden shadow-2xl border-2 border-base/20 bg-base">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.0467782383994!2d110.8260665735765!3d-7.569879392444233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a16604603050f%3A0x82a7e81c7efa73ce!2sDinas%20Kesehatan%20Kota%20Surakarta!5e0!3m2!1sid!2sid!4v1770198019455!5m2!1sid!2sid" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            title="Map Dinkes"
                        ></iframe>
                    </div>
                    <p className="text-sm opacity-90 leading-relaxed max-w-xs">
                        Jl. Jend. Sudirman No.2, Kp. Baru, Kec. Ps. Kliwon, Kota Surakarta, Jawa Tengah 57133
                    </p>
                </div>

                {/* KONTAK */}
                <div className="flex flex-col gap-5 lg:pl-10 justify-center h-full pt-4 md:pt-0">
                    <a href='https://www.facebook.com/dinkessurakarta' target='_blank' className="flex items-center gap-3 group cursor-pointer">
                        <div className="bg-base/10 p-2 rounded-full group-hover:bg-base group-hover:text-primary transition-colors">
                             <FaFacebookF />
                        </div>
                        <span className="text-sm font-medium">Dinas Kesehatan Kota Surakarta</span>
                    </a>
                    <a href='https://www.youtube.com/@dinkessurakarta' target='_blank' className="flex items-center gap-3 group cursor-pointer">
                        <div className="bg-base/10 p-2 rounded-full group-hover:bg-base group-hover:text-primary transition-colors">
                             <FaYoutube />
                        </div>
                        <span className="text-sm font-medium">Dinas Kesehatan Kota Surakarta</span>
                    </a>
                    <a href='https://x.com/dinkessurakarta' target='_blank' className="flex items-center gap-3 group cursor-pointer">
                        <div className="bg-base/10 p-2 rounded-full group-hover:bg-base group-hover:text-primary transition-colors">
                             <FaXTwitter />
                        </div>
                        <span className="text-sm font-medium">@dinkessurakarta</span>
                    </a>
                    <a href='https://www.instagram.com/dinkessurakarta' target='blank' className="flex items-center gap-3 group cursor-pointer">
                        <div className="bg-base/10 p-2 rounded-full group-hover:bg-base group-hover:text-primary transition-colors">
                             <FaInstagram />
                        </div>
                        <span className="text-sm font-medium">@dinkessurakarta</span>
                    </a>
                    <a href='tel:0271642020' className="flex items-center gap-3 group cursor-pointer mt-2">
                         <div className="bg-base/10 p-2 rounded-full group-hover:bg-base group-hover:text-primary transition-colors">
                             <FaPhoneAlt />
                        </div>
                        <span className="text-sm font-medium">0271-642020</span>
                    </a>
                </div>

                {/* JAM LAYANAN */}
                <div className="flex justify-start lg:justify-end items-center h-full">
                    <div className="bg-secondary text-text p-6 rounded-2xl shadow-2xl w-full max-w-sm relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] -mr-4 -mt-4 transition-all group-hover:bg-primary/10"></div>
                        
                        <h4 className="text-lg font-bold text-center mb-6 text-primary border-b border-primary/20 pb-2">
                            Jam Layanan
                        </h4>
                        
                        <div className="space-y-3 text-sm font-semibold text-text">
                            <div className="flex justify-between items-center">
                                <span>Senin - Kamis</span>
                                <span className="bg-primary/10 px-3 py-1 rounded-lg text-primary">07.30 - 16.30</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Jumat</span>
                                <span className="bg-primary/10 px-3 py-1 rounded-lg text-primary">07.30 - 14.30</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* COPYRIGHT */}
            <div className="border-t border-base/20 mt-5 pt-3 text-center text-xs md:text-sm opacity-60 font-light">
                © 2026 Dinas Kesehatan Kota Surakarta. All rights reserved.
            </div>
      </div>
    </footer>
  );
};

export default Footer;