import React, { useState } from 'react';

const NumberGuessingGame = () => {
  // গেমের মোড/ডিফিকাল্টি সেটিংস
  const modes = {
    easy: { max: 50, attempts: 10, label: 'সহজ (১-৫০)' },
    medium: { max: 100, attempts: 7, label: 'মাঝারি (১-১০০)' },
    hard: { max: 200, attempts: 5, label: 'কঠিন (১-২০০)' },
  };

  const [difficulty, setDifficulty] = useState('medium');
  const [targetNumber, setTargetNumber] = useState(() =>
    Math.floor(Math.random() * modes.medium.max) + 1
  );
  const [guess, setGuess] = useState('');
  const [attemptsLeft, setAttemptsLeft] = useState(modes.medium.attempts);
  const [attemptsUsed, setAttemptsUsed] = useState(0);
  const [message, setMessage] = useState({ text: 'একটি সংখ্যা অনুমান করুন!', type: 'info' });
  const [gameState, setGameState] = useState('playing'); // playing, won, lost
  const [guessHistory, setGuessHistory] = useState([]);
  const [highScore, setHighScore] = useState(() => {
    return Number(localStorage.getItem('guess_high_score')) || null;
  });

  // নতুন গেম শুরু করার ফানশন
  const startNewGame = (mode = difficulty) => {
    const config = modes[mode];
    const newTarget = Math.floor(Math.random() * config.max) + 1;
    setTargetNumber(newTarget);
    setAttemptsLeft(config.attempts);
    setAttemptsUsed(0);
    setGuess('');
    setMessage({ text: 'একটি সংখ্যা অনুমান করুন!', type: 'info' });
    setGameState('playing');
    setGuessHistory([]);
  };

  // সাবমিট হ্যান্ডলার
  const handleGuess = (e) => {
    e.preventDefault();
    const numGuess = parseInt(guess, 10);

    if (isNaN(numGuess)) {
      setMessage({ text: 'দয়া করে একটি সঠিক নম্বর লিখুন!', type: 'error' });
      return;
    }

    const currentMax = modes[difficulty].max;
    if (numGuess < 1 || numGuess > currentMax) {
      setMessage({ text: `১ থেকে ${currentMax}-এর মধ্যে সংখ্যা দিন!`, type: 'error' });
      return;
    }

    const newAttemptsLeft = attemptsLeft - 1;
    const newAttemptsUsed = attemptsUsed + 1;
    setAttemptsLeft(newAttemptsLeft);
    setAttemptsUsed(newAttemptsUsed);

    const status = numGuess < targetNumber ? 'ছোট' : numGuess > targetNumber ? 'বড়' : 'সঠিক';

    setGuessHistory([{ num: numGuess, status }, ...guessHistory]);

    // জয়/পরাজয় চেক
    if (numGuess === targetNumber) {
      setGameState('won');
      setMessage({ text: `🎉 দারুণ! আপনি ${newAttemptsUsed} বার চেষ্টায় সঠিক সংখ্যা অনুমান করেছেন!`, type: 'success' });
      
      if (!highScore || newAttemptsUsed < highScore) {
        setHighScore(newAttemptsUsed);
        localStorage.setItem('guess_high_score', newAttemptsUsed.toString());
      }
    } else if (newAttemptsLeft === 0) {
      setGameState('lost');
      setMessage({ text: `❌ গেম ওভার! সঠিক সংখ্যাটি ছিল ${targetNumber}`, type: 'danger' });
    } else {
      if (numGuess < targetNumber) {
        setMessage({ text: '📉 অনেক কম হয়ে গেছে! একটু বড় সংখ্যা চেষ্টা করুন।', type: 'warning' });
      } else {
        setMessage({ text: '📈 অনেক বেশি হয়ে গেছে! একটু ছোট সংখ্যা চেষ্টা করুন।', type: 'warning' });
      }
    }

    setGuess('');
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-800 rounded-2xl p-6 shadow-2xl border border-slate-700">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-emerald-400 mb-1">Number Guessing Game</h1>
          <p className="text-sm text-slate-400">সঠিক সংখ্যাটি অনুমান করার চেষ্টা করুন!</p>
        </div>

        {/* Difficulty Selectors */}
        <div className="flex gap-2 mb-6">
          {Object.keys(modes).map((key) => (
            <button
              key={key}
              onClick={() => {
                setDifficulty(key);
                startNewGame(key);
              }}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                difficulty === key
                  ? 'bg-emerald-500 text-slate-950 font-bold'
                  : 'bg-slate-700 hover:bg-slate-600 text-slate-300'
              }`}
            >
              {modes[key].label}
            </button>
          ))}
        </div>

        {/* Game Info Cards */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-700/50 text-center">
            <span className="text-xs text-slate-400 font-medium">অবশিষ্ট চেষ্টা</span>
            <p className="text-2xl font-bold text-amber-400">{attemptsLeft}</p>
          </div>
          <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-700/50 text-center">
            <span className="text-xs text-slate-400 font-medium">সেরা স্কোর (কম চেষ্টা)</span>
            <p className="text-2xl font-bold text-emerald-400">{highScore ? `${highScore} বার` : '-'}</p>
          </div>
        </div>

        {/* Status Message */}
        {message.text && (
          <div
            className={`p-3 rounded-xl text-center text-sm font-semibold mb-6 border ${
              message.type === 'success'
                ? 'bg-emerald-950/50 border-emerald-500 text-emerald-300'
                : message.type === 'danger'
                ? 'bg-rose-950/50 border-rose-500 text-rose-300'
                : message.type === 'warning'
                ? 'bg-amber-950/50 border-amber-500 text-amber-300'
                : message.type === 'error'
                ? 'bg-red-950/50 border-red-500 text-red-300'
                : 'bg-slate-700/50 border-slate-600 text-slate-300'
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Input Form or Reset Button */}
        {gameState === 'playing' ? (
          <form onSubmit={handleGuess} className="flex gap-2 mb-6">
            <input
              type="number"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              min="1"
              max={modes[difficulty].max}
              placeholder="সংখ্যা লিখুন"
              className="min-w-0 flex-1 rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-slate-100 outline-none focus:border-emerald-500"
              aria-label="আপনার অনুমান"
            />
            <button
              type="submit"
              className="rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              অনুমান
            </button>
          </form>
        ) : (
          <button
            type="button"
            onClick={() => startNewGame()}
            className="mb-6 w-full rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            নতুন গেম
          </button>
        )}

        <div className="text-center text-sm text-slate-400">
          <p>চেষ্টা: {attemptsUsed}</p>
          {guessHistory.length > 0 && (
            <p className="mt-2">
              আগের অনুমান: {guessHistory.map(({ num, status }) => `${num} (${status})`).join(', ')}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NumberGuessingGame;