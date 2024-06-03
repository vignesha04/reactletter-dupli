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
      <div className="flap"></div>
      <div className="body"></div>
      <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
        Dear MICKY❤️👑,<br />
        Just Be Happy, Healthy, and Love yourself. I'm Always happy to see you doing well and i pray for the Best of You..<br /> 
        Really Missed youuuu :( <3 <br />
        HAPPY BIRTHDAY MICKY ❤️👑<br /> Eid Milad Saeed meri jaan❤️👑, Taqabal Allah Oyatak 🤲🏻 👸<br />
              -Your ❤️💝
      </div>
      <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
    </div>
  );
return (
      <footer className="page-footer">
                <div className="container">
                  <div className="row">
                    <div className="col l6 s12">
                      <p className="grey-text text-lighten-4"> ReactJs Application deployment by using Kubernetes.</p>
                      <p className="grey-text text-lighten-4"> Workflow of the Application deployment:</p>
                      <p className="grey-text text-lighten-4"> Git → Jenkins → SonarQube → Docker → Kubernetes</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                      <h5 className="white-text">Links</h5>
                      <ul>
                        <li><a className="grey-text text-lighten-3" href="#!">click here</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="footer-copyright">
                  <div className="container">
                  © 2024 Copyright Text
                  <a className="grey-text text-lighten-4 right" href="#!">Thank You</a>
                  </div>
                </div>
              </footer>
    );
};

export default LoveLetter;
