import React, { useState } from 'react'
const MainButton = ({ title, onClick }) => {
    const [isPressed, setIsPressed] = useState(false);

    const handlePressDown = () => setIsPressed(true);
    const handlePressUp = () => setIsPressed(false);

    return (
        <div className="relative p-2 rounded-full bg-gradient-to-b from-neutral-600 to-neutral-800 shadow-[0_4px_10px_rgba(0,0,0,0.8),inset_0_2px_4px_rgba(255,255,255,0.1)]">
            <div className="p-1 rounded-full bg-black/40 shadow-inner">
                <button
                    onMouseDown={handlePressDown}
                    onMouseUp={handlePressUp}
                    onMouseLeave={() => setIsPressed(false)}
                    onTouchStart={handlePressDown}
                    onTouchEnd={handlePressUp}
                    onClick={onClick}
                    className={`
            relative w-36 h-36 rounded-full flex flex-col items-center justify-center transition-all duration-100 select-none outline-none group
            ${isPressed
                            ? 'translate-y-1.2 scale-[0.99] shadow-[0_0_0_rgba(0,0,0,0)]'
                            : 'translate-y-0 scale-100 shadow-[0_12px_24px_rgba(0,0,0,0.6),0_2px_4px_rgba(255,255,255,0.1)]'
                        }
            bg-neutral-800
          `}
                    style={{
                        background: 'radial-gradient(circle at 30% 30%, #444 0%, #222 70%, #111 100%)',
                    }}
                >
                    {/* Texture Overlay */}
                    <div
                        className="absolute inset-0 rounded-full opacity-10 pointer-events-none"
                        style={{ background: 'repeating-radial-gradient(circle, transparent 0, transparent 1px, black 1px, black 2px)' }}
                    />

                    <div className="flex flex-col items-center pointer-events-none">
                        <span className="text-sm uppercase tracking-[0.3em] font-black text-white/90">
                            {title}
                        </span>
                    </div>

                    {/* Bevel Effects */}
                    <div className={`absolute inset-0 rounded-full border-t-2 border-white/10 transition-opacity ${isPressed ? 'opacity-0' : 'opacity-100'}`} />
                    <div className={`absolute inset-0 rounded-full border-b-2 border-black/60 transition-opacity ${isPressed ? 'opacity-100' : 'opacity-0'}`} />
                </button>
            </div>
        </div>
    );
};

export default MainButton;