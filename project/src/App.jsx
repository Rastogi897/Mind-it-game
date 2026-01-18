import { useState } from 'react'

function App() {
  const currLevel = 4;

  const [arr, setArr] = useState(Array(16).fill(0))
  const [CPUSequence, setCPUSequence] = useState([]);
  const [userSequence, setUserSequence] = useState([]);
  const [glowTile, setGlowTile] = useState(null);
  const [userGlowTile, setUserGlowTile] = useState(null);
  const [isCPUPlaying, setIsCPUPlaying] = useState(true);
  const [isUserPlaying, setIsUserPlaying] = useState(false);

  const setCSS = (index) => {
    const base = "rounded-md border border-slate-700 shadow-xl flex items-center justify-center select-none";

    if (isCPUPlaying) {
      if (index === glowTile) {
        return `${base} bg-sky-600 text-white opacity-100 cursor-not-allowed`;
      }
      return `${base} bg-slate-800 opacity-80 cursor-not-allowed`;
    }

    if (isUserPlaying) {
      if (userSequence.includes(index)) {
        return `${base} bg-sky-600 text-white opacity-100 scale-100 ring-1 ring-sky-400/25 cursor-pointer`;
      }
      return `${base} bg-slate-800 hover:scale-101 hover:brightness-110 cursor-pointer`;
    }

    return `${base} bg-slate-800 opacity-80 cursor-default`;
  }

  const generateRandomFnc = (str) => {
    let n;
    do {
      n = Math.floor(Math.random() * 16);
    } while (str.includes(n))
    return n;
  }

  const sleep = (ms) => new Promise(res => setTimeout(res, ms));

  const startGeneratingSeq = async (n) => {
    let localSequence = [];

    setCPUSequence([]);
    setUserSequence([]);
    setIsCPUPlaying(true);
    setIsUserPlaying(false);

    for (let i = 0; i < n; i++) {
      const generatedNum = generateRandomFnc(localSequence);
      localSequence.push(generatedNum);

      setGlowTile(generatedNum);
      setCPUSequence(prev => [...prev, generatedNum]);

      await sleep(400);
      setGlowTile(null);

      await sleep(400);
    }

    setIsCPUPlaying(false);
    setIsUserPlaying(true);
  };

  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <div className='pt-8 pb-20 text-5xl font-bold'>Mind it!</div>
        <div className='pb-8 text-xl absolute top-16'><span className='text-6xl'>🦧</span> I remembered 9 tiles. Can you beat me?</div>
        <div className='grid grid-cols-4 grid-rows-4 w-[360px] gap-[10px]'>
          {
            arr.map((value, index) => {
              return <div
                key={index}
                className={`${setCSS(index)} w-[80px] h-[80px]`}
                onClick={() => {
                  if (isCPUPlaying) return;
                  setUserSequence(prev => [...prev, index])
                }}
              ></div>
            })
          }
        </div>

        <button
          className='py-1 px-6 bg-sky-600 rounded-full mt-8 shadow-sky-600'
          onClick={() => startGeneratingSeq(currLevel)}>Start</button>

        {CPUSequence.length == currLevel &&
          userSequence.length == CPUSequence.length &&
          JSON.stringify(userSequence) === JSON.stringify(CPUSequence) ?
          <div>Correct</div> : <div></div>
        }

        {CPUSequence.length == currLevel &&
          userSequence.length == CPUSequence.length &&
          JSON.stringify(userSequence) !== JSON.stringify(CPUSequence) ?
          <div>Incorrect</div> : <div></div>
        }
      </div>
    </>
  )
}

export default App