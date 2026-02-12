import React, { useState, useEffect, useRef } from 'react';
import { 
  FaUniversalAccess, FaTimes, FaFont, FaAdjust, 
  FaLink, FaMousePointer, FaEyeSlash, FaUndo 
} from 'react-icons/fa';

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const [position, setPosition] = useState({ x: 20, y: 100 });

  const brandColor = "bg-primary"; 
  const brandColorHover = "hover:bg-[#006056]";

  // State Fitur
  const [settings, setSettings] = useState({
    textSize: 0,      // 0: Normal, 1: Besar, 2: X-Large
    contrast: false,  // High Contrast
    grayscale: false, // Hitam Putih
    highlightLinks: false,
    bigCursor: false,
    hideImages: false
  });

  // --- LOGIKA DRAG ---
  const [isDragging, setIsDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    setHasMoved(false);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    dragOffset.current = { x: clientX - position.x, y: clientY - position.y };
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    setHasMoved(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    setPosition({ x: clientX - dragOffset.current.x, y: clientY - dragOffset.current.y });
  };

  const handlePointerUp = () => { setIsDragging(false); };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handlePointerMove);
      window.addEventListener('mouseup', handlePointerUp);
      window.addEventListener('touchmove', handlePointerMove);
      window.addEventListener('touchend', handlePointerUp);
    } else {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handlePointerUp);
    }
    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handlePointerUp);
    };
  }, [isDragging]);

  const toggleMenu = () => { if (!hasMoved) setIsOpen(!isOpen); };

  // --- EFEK KE WEBSITE (DOM) ---
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    // 1. Text Zoom
    const zoomLevels = [100, 110, 125];
    html.style.fontSize = `${zoomLevels[settings.textSize]}%`;

    // 2. Filter CSS (Grayscale / Contrast)
    let filterString = '';
    if (settings.grayscale) filterString += 'grayscale(100%) ';
    if (settings.contrast) filterString += 'contrast(150%) ';
    html.style.filter = filterString;

    // 3. High Contrast Class (Invert Color)
    if (settings.contrast) body.classList.add('acc-contrast');
    else body.classList.remove('acc-contrast');

    // 4. Highlight Links
    if (settings.highlightLinks) body.classList.add('acc-links');
    else body.classList.remove('acc-links');

    // 5. Big Cursor
    if (settings.bigCursor) body.classList.add('acc-cursor');
    else body.classList.remove('acc-cursor');

    // 6. Hide Images
    if (settings.hideImages) body.classList.add('acc-hide-images');
    else body.classList.remove('acc-hide-images');

  }, [settings]);

  const resetAll = () => {
    setSettings({
      textSize: 0, contrast: false, grayscale: false, 
      highlightLinks: false, bigCursor: false, hideImages: false
    });
  };

  const GridBtn = ({ icon, label, isActive, onClick }) => (
    <button 
      onClick={onClick}
      className={`
        flex flex-col items-center justify-center p-3 rounded-xl border transition-all duration-200
        ${isActive 
          ? `bg-[#007F73] text-white border-[#007F73] shadow-inner` 
          : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-200 border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 hover:shadow-md'
        }
      `}
    >
      <div className="text-xl mb-1">{icon}</div>
      <span className="text-[10px] font-bold leading-tight text-center">{label}</span>
      {isActive && <div className="w-1.5 h-1.5 bg-white rounded-full mt-1 animate-pulse"></div>}
    </button>
  );

  return (
    <>
      <style>{`
        /* CSS Manual untuk fitur aksesibilitas */
        .acc-contrast { background-color: black !important; color: yellow !important; }
        .acc-contrast * { background-color: black !important; color: yellow !important; border-color: yellow !important; }
        .acc-links a { text-decoration: underline !important; color: #ffff00 !important; background: black !important; }
        .acc-hide-images img, .acc-hide-images video { opacity: 0 !important; visibility: hidden !important; }
        .acc-cursor, .acc-cursor * { cursor: url('data:image/svg+xml;utf8,<svg width="32" height="32" viewBox="0 0 24 24" fill="black" stroke="white" stroke-width="2" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 3.2L18.3 6.9L13.3 10.8L18.3 14.8L16.9 20.3L15.4 20.7L10.4 16.6L7 21.3V3.2H5.5Z"/></svg>'), auto !important; }
      `}</style>

      <div 
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        className="fixed z-[9999] touch-none font-sans"
      >
        {/* TOMBOL UTAMA BULAT*/}
        <button
          onMouseDown={handlePointerDown}
          onTouchStart={handlePointerDown}
          onClick={toggleMenu}
          className={`
            rounded-full bg-base dark:bg-gray-800 shadow-xl flex items-center justify-center text-primary dark:text-teal-400 text-6xl 
            transition-transform hover:scale-105 hover:text-base active:scale-95 cursor-move ${brandColorHover} dark:hover:bg-gray-700
          `}
          title="Menu Aksesibilitas (Geser Saya!)"
        >
          {isOpen ? <FaTimes /> : <FaUniversalAccess />}
        </button>

        {/* MENU PANEL */}
        {isOpen && (
          <div className="absolute top-14 left-0 w-[300px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden animate-fade-in-up">
            
            <div className={`p-4 ${brandColor} dark:bg-gray-900 text-white flex justify-between items-center`}>
              <h3 className="font-bold text-sm flex items-center gap-2">
                <FaUniversalAccess /> Aksesibilitas
              </h3>
              <button onClick={resetAll} className="text-[10px] bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full flex items-center gap-1 transition">
                <FaUndo /> Reset
              </button>
            </div>

            {/* Grid Menu */}
            <div className="p-4 grid grid-cols-2 gap-3 bg-gray-50/50 dark:bg-gray-800">
              
              <GridBtn 
                icon={<FaFont />} 
                label={`Ukuran Teks (${settings.textSize === 0 ? 'Normal' : '+Besar'})`} 
                isActive={settings.textSize > 0}
                onClick={() => setSettings({...settings, textSize: (settings.textSize + 1) % 3})}
              />

              <GridBtn 
                icon={<FaAdjust />} 
                label="Kontras Tinggi" 
                isActive={settings.contrast}
                onClick={() => setSettings({...settings, contrast: !settings.contrast})}
              />

              <GridBtn 
                icon={<FaAdjust className="rotate-180" />} 
                label="Hitam Putih" 
                isActive={settings.grayscale}
                onClick={() => setSettings({...settings, grayscale: !settings.grayscale})}
              />

              <GridBtn 
                icon={<FaLink />} 
                label="Sorot Link" 
                isActive={settings.highlightLinks}
                onClick={() => setSettings({...settings, highlightLinks: !settings.highlightLinks})}
              />

              <GridBtn 
                icon={<FaMousePointer />} 
                label="Kursor Besar" 
                isActive={settings.bigCursor}
                onClick={() => setSettings({...settings, bigCursor: !settings.bigCursor})}
              />

              <GridBtn 
                icon={<FaEyeSlash />} 
                label="Sembunyi Gambar" 
                isActive={settings.hideImages}
                onClick={() => setSettings({...settings, hideImages: !settings.hideImages})}
              />

            </div>

            {/* Footer */}
            <div className="bg-gray-100 dark:bg-gray-900 text-center py-2 border-t border-gray-200 dark:border-gray-700">
              <p className="text-[10px] text-gray-500 dark:text-gray-400">Accessibility by Dinkes Surakarta</p>
            </div>

          </div>
        )}
      </div>
    </>
  );
};

export default AccessibilityWidget;