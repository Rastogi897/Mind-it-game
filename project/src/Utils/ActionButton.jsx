import React from 'react'

const ActionButton = ({ icon: Icon, label, onClick, primary = false, className = "" }) => {
    return (
        <button
            onClick={onClick}
            className={`
      flex items-center justify-center gap-3 px-6 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all active:scale-95
      ${primary
                    ? 'bg-neutral-200 text-neutral-900 hover:bg-white shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                    : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white border border-neutral-700'}
      ${className}
    `}
        >
            {Icon && <Icon size={16} />}
            {label}
        </button>
    )
}

export default ActionButton