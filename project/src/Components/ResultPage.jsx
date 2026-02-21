import React from 'react'
import GAME_LEVELS from '../Utils/GameLevel'
import ActionButton from '../Utils/ActionButton'
import { Share2, RotateCcw, Home as HomeIcon } from 'lucide-react';

const ResultPage = ({ gameState, currentLevelIdx, startGame, setGameState }) => {
    return (
        <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center p-6 font-sans">
            <div className="flex flex-col items-center text-center mb-16">
                <h1 className={`text-6xl font-black tracking-tighter mb-4 italic ${gameState === 'won' ? 'text-green-500/80' : 'text-red-500/80'}`}>
                    {gameState === 'won' ? 'SURVIVED' : 'FAILED'}
                </h1>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-500">
                    {gameState === 'won'
                        ? 'You beat all the levels'
                        : `You lost your mind on Level ${GAME_LEVELS[currentLevelIdx].id}`}
                </p>
            </div>

            <div className="flex flex-col gap-4 w-full max-w-70">
                <ActionButton icon={RotateCcw} label="Restart Game" primary onClick={startGame} />
                <ActionButton icon={HomeIcon} label="Home Page" onClick={() => setGameState('home')} />
                <ActionButton icon={Share2} label="Share with friends" onClick={() => alert('Shared!')} />
            </div>
        </div>
    )
}

export default ResultPage