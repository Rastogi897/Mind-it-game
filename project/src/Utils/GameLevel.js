const GAME_LEVELS = [
    { id: 1, info: "Click once", subInfo: "Just a warm up", targetClicks: 1, hideLevel: false, timeLimit: 4000 },
    { id: 2, info: "Click the number of times you clicked on the prev level", subInfo: "Memory test", targetClicks: 1, hideLevel: false, timeLimit: 4000 },
    { id: 3, info: "Click the number of the level you are on", subInfo: "Pay attention", targetClicks: 3, hideLevel: true, timeLimit: 5000 },
    { id: 4, info: "Click twice as many times as level 2", subInfo: "Math time", targetClicks: 2, hideLevel: false, timeLimit: 4000 },
    { id: 5, info: "Click 5 times fast!", subInfo: "Speed round", targetClicks: 5, hideLevel: false, timeLimit: 2500 },
];

export default GAME_LEVELS;