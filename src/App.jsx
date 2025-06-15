import React, { useState, useRef } from "react";
import confetti from "canvas-confetti";
import "./App.css";

export default function App() {
  const [showGift, setShowGift] = useState(false);
  const audioRef = useRef(null); // Referenz zum Audio-Element

  const handleClick = () => {
    setShowGift(true);

    // Konfetti starten
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#bb0000', '#ffffff', '#00bb00', '#0000bb', '#ffcc00'],
    });

    // Audio abspielen
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="app">
      <div className="card">
        <h1>🎉 Happy Birthday, Teal Swan! 🎉</h1>
        <p>
          Wishing you a wonderful day full of joy, love, and cake! 🍰
        </p>
        <img src="/teals birthday.webp" alt="Birthday cake" className="cake" />
        <button onClick={handleClick}>Click me 🎁</button>
        {showGift && (
          <p className="surprise">🎈 Surprise! You're getting lots of love! ❤️</p>
        )}
        {/* Audio-Element versteckt */}
        <audio ref={audioRef} src="/happy-birthday.mp3" />
      </div>
    </div>
  );
}
