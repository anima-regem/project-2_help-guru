import React, { useState, useRef, useEffect } from "react";
import Logo from "../Logo/Logo";
import { videoIcon, audioIcon, closeIcon } from "../../assets/icons";
import Button from "../Button/Button";
import "../Video/Video.css";

import Caption from "../Caption/Caption";
import MobileButtons from "../MobileButtons/MobileButtons";

const Video = () => {
  const [showTranscript, setShowTranscript] = useState(false);
  const [showAudio, setShowAudio] = useState(false);
  const videoRef = useRef();
  const audioRef = useRef();

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
            <p onClick={() => setShowAudio((prev) => !prev)}>
              Play {!showAudio ? "Audio" : "Video"}
            </p>
          </div>
        </div>
        <div className="row">
          <div className={showTranscript ? "col-lg-8 col-md-7" : "col-lg-12"}>
            {showAudio ? (
              <>
                <div ref={audioRef} className="audio_section">
                  <audio controls>
                    <source src="./audio/audio.mp3" type="audio/mpeg" />
                  </audio>
                </div>
              </>
            ) : (
              <video ref={videoRef} className="video_player" loop controls>
                <source src="./video/video.mp4" type="video/webm" />
              </video>
            )}

            <div className="video_buttons">
              <Button
                name="Play Video"
                icon={videoIcon}
                buttonColor="#31c787"
                textColor="#fff"
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
          {showTranscript && <Caption videoRef={videoRef} />}
          <MobileButtons showTranscript={showTranscript} />
        </div>
      </div>
    </>
  );
};

export default Video;
