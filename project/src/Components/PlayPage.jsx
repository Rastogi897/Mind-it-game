import React from 'react'
import MainButton from '../Utils/MainButton';

const PlayPage = ({ level, handleGameClick, currentLevelIdx }) => {
    return (
        <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center p-6 font-sans relative overflow-hidden">
            <style>
                {`
            @keyframes progress-shrink {
              from { width: 100%; }
              to { width: 0%; }
            }
          `}
            </style>

            <div className="flex flex-col items-center text-center mb-16 h-28 justify-end">
                {!level.hideLevel && (
                    <div className="text-neutral-500 font-bold uppercase tracking-[0.3em] text-xs mb-3">
                        Level {level.id}
                    </div>
                )}
                <h2 className="text-2xl md:text-3xl font-black italic text-neutral-200 tracking-tight max-w-md">
                    {level.info}
                </h2>
                {level.subInfo && (
                    <p className="text-neutral-500 text-xs uppercase tracking-widest mt-4 font-bold">
                        {level.subInfo}
                    </p>
                )}
            </div>

            <div className="my-8">
                <MainButton title="CLICK" onClick={handleGameClick} />
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-neutral-900">
                <div
                    key={currentLevelIdx}
                    className="h-full bg-neutral-400"
                    style={{ animation: `progress-shrink ${level.timeLimit}ms linear forwards` }}
                />
            </div>
        </div>
    );
}

export default PlayPage