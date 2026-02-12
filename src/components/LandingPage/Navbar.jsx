import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronRight, FaMoon, FaSun, FaBars, FaTimes, FaCaretRight, FaChevronDown } from 'react-icons/fa';
import logo from '../../assets/img/logo.png'

const Navbar = () => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null); // Level 1
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(null);   // Level 2

  const isActive = (path) => location.pathname === path;

  // --- DATA PUSKESMAS ---
  const puskesmasList = [
    { name: 'Pajang', url: 'https://pkm-pajang.surakarta.go.id' },
    { name: 'Penumping', url: 'https://pkm-penumping.surakarta.go.id' },
    { name: 'Purwosari', url: 'https://pkm-purwosari.surakarta.go.id' },
    { name: 'Jayengan', url: 'https://pkm-jayengan.surakarta.go.id' },
    { name: 'Kratonan', url: 'https://pkm-kratonan.surakarta.go.id' },
    { name: 'Gajahan', url: 'https://pkm-gajahan.surakarta.go.id' },
    { name: 'Sangkrah', url: 'https://pkm-sangkrah.surakarta.go.id' },
    { name: 'Purwodiningratan', url: 'https://pkm-purwodiningratan.surakarta.go.id' },
    { name: 'Ngoresan', url: 'https://pkm-ngoresan.surakarta.go.id' },
    { name: 'Sibela', url: 'https://pkm-sibela.surakarta.go.id' },
    { name: 'Pucangsawit', url: 'https://pkm-pucangsawit.surakarta.go.id' },
    { name: 'Nusukan', url: 'https://pkm-nusukan.surakarta.go.id' },
    { name: 'Manahan', url: 'https://pkm-manahan.surakarta.go.id' },
    { name: 'Gilingan', url: 'https://pkm-gilingan.surakarta.go.id' },
    { name: 'Banyuanyar', url: 'https://pkm-banyuanyar.surakarta.go.id' },
    { name: 'Setabelan', url: 'https://pkm-setabelan.surakarta.go.id' },
    { name: 'Gambirsari', url: 'https://pkm-gambirsari.surakarta.go.id' },
  ];

  // --- STRUKTUR MENU UTAMA ---
  const menuItems = [
    { name: 'Beranda', path: '/', isExternal: false },
    { name: 'Informasi', path: '/informasi', isExternal: false },
    { 
      name: 'Unit Organisasi', 
      path: '#', 
      isExternal: false,
      dropdown: [
        { 
            name: 'Puskesmas', 
            path: '#', 
            subMenu: puskesmasList 
        },
        { 
          name: 'UPT', 
          path: '#', 
          isExternal: false,
          dropdown: [
            { name: 'Instalasi Farmasi', url: 'https://ifk.surakarta.go.id' }, 
            { name: 'Labkesda', url: 'https://labkesda.surakarta.go.id' }, 
          ] 
        },
        { 
          name: 'Rumah Sakit',
          path: '#',
          isExternal: false,
          dropdown: [
             { name: 'RSBK', url: 'https://rsudbungkarno.surakarta.go.id' }, 
             { name: 'RSIFS', url: 'https://rsudibufatmawatisoekarno.surakarta.go.id' },            
          ] 
        },
      ]
    },
    { 
      name: 'Layanan', 
      path: '#', 
      dropdown: [
        { name: 'Jenis Layanan', path: '/layanan/jenis'},
        { name: 'Komitmen Pelayanan', path: '/layanan/komitmen' },
        { name: 'Pusat Bantuan', path: '/layanan/pusat'}
      ]
    },
    { name: 'SKM', path: '/skm' },
    { name: 'Profil PPID', path: '/profil-ppid' },
    { name: 'Profil', path: '/profil' },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <div className="w-full flex flex-col items-center fixed top-4 z-50 px-4">    
      <nav className="bg-primary text-base py-3 px-6 rounded-full shadow-xl flex items-center justify-between w-full max-w-6xl transition-colors duration-300 relative z-50">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
            <div className="h-10 w-10 flex items-center justify-center">
              <img src={logo} alt="Logo" className="h-9 w-9 object-contain" />
            </div>            
            <div className="leading-tight text-base">
                <h1 className="font-bold text-xs md:text-base">DINAS KESEHATAN <br />KOTA SURAKARTA</h1>
            </div>
        </Link>

        {/* --- DESKTOP MENU --- */}
        <ul className="hidden lg:flex items-center gap-6 text-m font-semibold text-base">
            {menuItems.map((item) => (
              <li key={item.name} className="relative group h-full flex items-center cursor-pointer">
                
                {/* LEVEL 1 */}
                <div className={`flex items-center gap-1 py-2 ${isActive(item.path) ? 'text-base font-semibold' : ''}`}>
                    {item.isExternal ? (
                        <a href={item.path} target="_blank" rel="noreferrer">{item.name}</a>
                    ) : (
                        <Link to={item.path}>{item.name}</Link>
                    )}
                    {item.dropdown && <FaChevronDown className="text-[10px] mt-0.5 group-hover:rotate-180 transition-transform" />}
                </div>

                <span className={`absolute bottom-0 left-0 h-[2px] bg-base transition-all duration-300 ease-out ${isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>

                {/* LEVEL 2 */}
                {item.dropdown && (
                    <div className="absolute top-full left-0 pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                        
                        <div className="bg-base rounded-2xl shadow-xl border border-primary text-primary py-0 divide-y divide-gray-100">
                            
                            {item.dropdown.map((subItem, index) => {
                                const hasChildren = subItem.subMenu || subItem.dropdown;
                                const totalItems = item.dropdown.length;

                                return (
                                    <div key={index} className="relative group/sub"> 
                                        {/* Item Level 2 */}
                                        <div className={`
                                            flex justify-between items-center px-5 py-3 
                                            hover:bg-secondary hover:text-primary transition-colors cursor-pointer text-sm font-medium

                                            ${index === 0 ? 'rounded-t-2xl' : ''}                                                                         
                                            ${index === totalItems - 1 ? 'rounded-b-2xl' : ''}
                                        `}>
                                            {/* Logic Link Level 2 */}
                                            {hasChildren ? (
                                                <span>{subItem.name}</span>
                                            ) : subItem.isExternal ? (
                                                <a href={subItem.path} target="_blank" rel="noreferrer" className="w-full">{subItem.name}</a>
                                            ) : (
                                                typeof subItem.path === 'string' ? 
                                                    <Link to={subItem.path} className="w-full">{subItem.name}</Link> 
                                                    : <span className="w-full">{subItem.name}</span>
                                            )}
                                            
                                            {hasChildren && <FaCaretRight className="text-gray-400" />}
                                        </div>

                                        {/* LEVEL 3 */}
                                        {hasChildren && (
                                            <div className="absolute left-full top-0 w-64 pl-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform translate-x-[-10px] group-hover/sub:translate-x-0">
                                                <div className="bg-base rounded-2xl shadow-xl border border-primary text-primary overflow-hidden">
                                                    <div className="max-h-64 overflow-y-auto py-2 custom-scrollbar">
                                                        {(subItem.subMenu || subItem.dropdown).map((child, idx) => (
                                                            <a 
                                                                key={idx}
                                                                href={child.url || child.path} 
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="block px-5 py-2 hover:bg-secondary hover:text-primary transition-colors text-sm"
                                                            >
                                                                {child.name}
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
              </li>
            ))}
        </ul>

        {/* --- ACTION BUTTONS (Toggle Dark Mode & Hamburger) --- */}
        <div className="flex items-center gap-4">
            
            {/* TOGGLE DARK MODE */}
            <div 
              onClick={toggleTheme} 
              className={`
                relative w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300
                ${isDarkMode ? 'bg-yellow-200' : 'bg-slate-700'}
              `}
              title={isDarkMode ? "Aktifkan Mode Terang" : "Aktifkan Mode Gelap"}
            >
                <FaSun className="absolute left-2 text-yellow-600 z-0 text-xs md:text-sm" />                
                <FaMoon className="absolute right-2 text-yellow-200 z-0 text-xs md:text-sm" />
                {/* Slider */}
                <div className={`
                  w-6 h-6 bg-white rounded-full shadow-md z-10 transform transition-transform duration-300 ease-in-out
                  ${isDarkMode ? 'translate-x-8' : 'translate-x-0'}
                `}></div>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-base focus:outline-none">
                {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
        </div>
      </nav>

      {/* --- MOBILE MENU --- */}
      <div className={`lg:hidden absolute top-20 w-full px-4 transition-all duration-300 ease-in-out transform origin-top z-40 ${isMobileMenuOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-0 -translate-y-4 pointer-events-none'}`}>
          <div className="bg-primary text-base rounded-2xl shadow-xl p-4 flex flex-col gap-1 max-w-6xl mx-auto max-h-[80vh] overflow-y-auto">
             {menuItems.map((item) => (
                <div key={item.name}>
                    {/* Level 1 Mobile */}
                    <div 
                        onClick={() => item.dropdown ? setMobileDropdownOpen(mobileDropdownOpen === item.name ? null : item.name) : setIsMobileMenuOpen(false)}
                        className={`p-3 font-semibold cursor-pointer border-b border-base/10 flex justify-between items-center rounded-lg ${isActive(item.path) ? 'bg-base/10' : 'hover:bg-base/5'}`}
                    >
                        {item.dropdown ? <span>{item.name}</span> : <Link to={item.path} className="flex-grow">{item.name}</Link>}
                        {item.dropdown && <FaChevronDown className={`text-xs transition-transform ${mobileDropdownOpen === item.name ? 'rotate-180' : ''}`}/>}
                    </div>

                    {/* Level 2 Mobile */}
                    {item.dropdown && mobileDropdownOpen === item.name && (
                        <div className="pl-4 mt-2 space-y-1">
                            {item.dropdown.map((sub, idx) => {
                                const hasChildren = sub.subMenu || sub.dropdown;
                                return (
                                <div key={idx}>
                                    <div 
                                        onClick={() => hasChildren ? setMobileSubMenuOpen(mobileSubMenuOpen === sub.name ? null : sub.name) : setIsMobileMenuOpen(false)}
                                        className="flex justify-between items-center p-2 text-sm text-base/90 hover:bg-base/10 rounded-md border-l-2 border-base/20 ml-2 cursor-pointer"
                                    >
                                        {hasChildren ? (
                                            <span>{sub.name}</span>
                                        ) : sub.isExternal ? (
                                            <a href={sub.path} target="_blank" rel="noreferrer" className="w-full">{sub.name}</a>
                                        ) : (
                                             typeof sub.path === 'string' ? 
                                             <Link to={sub.path} className="w-full">{sub.name}</Link> 
                                             : <span className="w-full">{sub.name}</span>
                                        )}
                                        {hasChildren && <FaChevronDown className={`text-[10px] ${mobileSubMenuOpen === sub.name ? 'rotate-180' : ''}`}/>}
                                    </div>

                                    {/* Level 3 Mobile */}
                                    {hasChildren && mobileSubMenuOpen === sub.name && (
                                        <div className="pl-4 mt-1 border-l-2 border-base/10 ml-4 max-h-40 overflow-y-auto">
                                            {(sub.subMenu || sub.dropdown).map((child, cIdx) => (
                                                <a key={cIdx} href={child.url || child.path} target="_blank" rel="noopener noreferrer" className="block p-2 text-xs text-base/70 hover:text-base">
                                                    {child.name}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                );
                            })}
                        </div>
                    )}
                </div>
             ))}
          </div>
      </div>
    </div>
  );
};

export default Navbar;