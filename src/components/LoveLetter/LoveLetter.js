import React, { useState, useRef } from 'react';
import './LoveLetter.css';
import audioFile from './kushi.mp3';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const audioRef = useRef(null);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
      // Ensuring audio play is directly a result of this user interaction
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => console.log("Playback succeeded"))
          .catch(e => console.error("Playback failed:", e));
      }
    }, 800);
  };

  const handleCloseLetter = () => {
    setIsFullSize(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsOpen(false);
    }, 800);
  };
  return (
    <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}>
      <h> Rotate your screen 🔄 Tap here 👇, Use 🎧 </h>
      <div className="flap"></div>
      <div className="body"></div>
      <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
        Dear MICKY❤️, ......The day is UR's, <br />
        Just Be Happy, Healthy and Love yourself😊...i always happy to see you doing well and i pray best of you.<br /> 
        Really missed you, HAPPY BIRTHDAY MICKY👑🎂🫰🏻 <br /> 
        Eid Milad Saeed meri jaan❤️👑 Taqabal Allah Oyatak 🤲🏻 👸<br /> Always take care raa ..
        06/06/2024 Your's ❤️
      </div>
      <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
    </div>
  );
};

export default LoveLetter;
