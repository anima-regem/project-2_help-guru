import React, { useState, useRef, useEffect } from "react";
import Logo from "../Logo/Logo";
import { videoIcon, audioIcon, closeIcon } from "../../assets/icons";
import Button from "../Button/Button";
import "../Video/Video.css";
import Caption from "../Caption/Caption";
import MobileButtons from "../MobileButtons/MobileButtons";
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
              <audio controls>
                <source src="./audio/audio.mp3" type="audio/mpeg" />
              </audio>
            </div>

            <div className="video_buttons">
              <Button
                name="Play Video"
                icon={videoIcon}
                buttonColor="#31c787"
                textColor="#fff"
                onClick={() => navigate("/video")}
              />
              <Button
                name="Play Audio"
                icon={audioIcon}
                buttonColor="#fff"
                textColor="#3A3A3A"
                onClick={() => navigate("/audio")}
              />
            </div>
          </div>
          {showTranscript && <Caption videoRef={audioRef} />}
          <MobileButtons showTranscript={showTranscript} />
        </div>
      </div>
    </>
  );
};

export default Audio;
