import React, { useState, useRef, useEffect } from "react";
import Logo from "../Logo/Logo";
import { videoIcon, audioIcon, closeIcon } from "../../assets/icons";
import "../Video/Video.css";
import Caption from "../Caption/Caption";
import { useNavigate } from "react-router-dom";

const Audio = () => {
  const [showTranscript, setShowTranscript] = useState(false);
  const audioRef = useRef();
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="header">
          <Logo />
          <div className="nav_links">
            <p
              className={showTranscript && "active_link"}
              onClick={() => setShowTranscript((prev) => !prev)}
            >
              Transcript
            </p>
          </div>
        </div>
        <div className="row">
          <div className={showTranscript ? "col-lg-8 col-md-7" : "col-lg-12"}>
            <div ref={audioRef} className="audio_section">
              <audio controls src="http://localhost:8000/audio/1"></audio>
            </div>
          </div>
          {showTranscript && <Caption targetRef={audioRef} />}
        </div>
      </div>
    </>
  );
};

export default Audio;
