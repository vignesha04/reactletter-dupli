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
      <footer className="page-footer">
                <div className="container">
                  <div className="row">
                    <div className="col 30 s50">
                      <h5 className="white-text">Sample project by PERSEVERANCE 1st Batch</h5>
                    </div>
                  </div>
                </div>
              </footer>
    <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}>
      <div className="flap"></div>
      <div className="body"></div>
      <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
        Dear MICKY❤️👑,<br />
        Just Be Happy, Healthy, and Love yourself. I'm Always happy to see you doing well and i pray for the Best of You..<br /> 
        Really Missed youuuu :( <br />
        HAPPY BIRTHDAY MICKY ❤️👑<br /> Eid Milad Saeed meri jaan❤️👑, Taqabal Allah Oyatak🤲🏻 👸<br />
        -Your ❤️💝
      </div>
      <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
    </div>
  );
  
};

export default LoveLetter;
