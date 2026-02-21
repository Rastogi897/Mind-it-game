import React, { useState, useEffect } from 'react'
import MainButton from '../Utils/MainButton'
import { Power, Share2, Info, Users, Trophy } from 'lucide-react';
import PlayPage from './PlayPage';
import GAME_LEVELS from '../Utils/GameLevel';
import ResultPage from './ResultPage';


const Home = () => {
    const [gameState, setGameState] = useState('home'); // 'home', 'playing', 'failed', 'won'
    const [currentLevelIdx, setCurrentLevelIdx] = useState(0);
    const [clickCount, setClickCount] = useState(0);
    const [highestScore, setHighestScore] = useState(19);

    // Level Timer Effect
    useEffect(() => {
        if (gameState === 'playing') {
            const level = GAME_LEVELS[currentLevelIdx];
            const timer = setTimeout(() => {
                // If timer runs out, game is over!
                setGameState('failed');
                if (currentLevelIdx > highestScore) setHighestScore(currentLevelIdx);
            }, level.timeLimit);

            return () => clearTimeout(timer); // Cleanup on unmount or level advance
        }
    }, [gameState, currentLevelIdx, highestScore]);

    const startGame = () => {
        setCurrentLevelIdx(0);
        setClickCount(0);
        setGameState('playing');
    };

    const handleGameClick = () => {
        const level = GAME_LEVELS[currentLevelIdx];
        const newCount = clickCount + 1;

        if (newCount === level.targetClicks) {
            // Reached target clicks, instantly advance
            if (currentLevelIdx + 1 >= GAME_LEVELS.length) {
                setGameState('won');
                if (currentLevelIdx + 1 > highestScore) setHighestScore(currentLevelIdx + 1);
            } else {
                setCurrentLevelIdx(prev => prev + 1);
                setClickCount(0); // Reset clicks for the new level
            }
        } else {
            setClickCount(newCount);
        }
    };

    if (gameState === 'playing') {
        const level = GAME_LEVELS[currentLevelIdx];
        return (
            <PlayPage
                level={level}
                handleGameClick={handleGameClick}
                currentLevelIdx={currentLevelIdx}
            />)
    }

    if (gameState === 'failed' || gameState === 'won') {
        return (
            <ResultPage
                gameState={gameState}
                currentLevelIdx={currentLevelIdx}
                startGame={startGame}
                setGameState={setGameState}
            />
        );
    }

    return (
        <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center p-6 font-sans">

            <div className="flex flex-col items-center text-center mb-6">
                <h1 className="text-6xl font-black tracking-tight text-neutral-200 mb-2 header-text">
                    MIND IT
                </h1>
                <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-neutral-500">
                    Remain sane to cross all levels
                </p>
            </div>

            <div className="flex mt-2 mb-12 items-center gap-4 w-full max-w-[280px] bg-neutral-900/60 backdrop-blur-sm pl-6 pr-2 py-2 rounded-full border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-3 flex-grow">
                    <span className="text-3xl font-black italic tracking-tighter text-neutral-400">
                        19
                    </span>
                    <div className="h-4 w-[1px] bg-neutral-800" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-500 whitespace-nowrap">
                        Highest Score
                    </span>
                </div>

                <button
                    className="p-3 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-all border border-neutral-700/50 active:scale-90 shadow-xl group"
                    aria-label="Share level"
                >
                    <Share2 size={14} className="text-neutral-300 group-hover:text-white transition-colors" />
                </button>
            </div>

            <div className="mt-16 mb-12">
                <MainButton title="Start" onClick={startGame} />
            </div>

            <div className="flex gap-8 mt-4">
                <button className="text-neutral-600 hover:text-neutral-400 transition-colors">
                    <Info size={20} />
                </button>
                <button className="text-neutral-600 hover:text-neutral-400 transition-colors">
                    <Share2 size={20} />
                </button>
            </div>
        </div>
    );
}

export default Home