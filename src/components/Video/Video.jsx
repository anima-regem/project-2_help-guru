import React, { useState, useRef, useEffect } from "react";
import Logo from "../Logo/Logo";
import { videoIcon, audioIcon, closeIcon } from "../../assets/icons";
import "../Video/Video.css";

import Caption from "../Caption/Caption";
import { useNavigate } from "react-router-dom";

const Video = () => {
  const [showTranscript, setShowTranscript] = useState(false);
  const [showAudio, setShowAudio] = useState(false);
  const videoRef = useRef();
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
                    <source src="http://localhost:8000/video/1/audio" type="audio/mp3" />
                  </audio>
                </div>
              </>
            ) : (
              <video ref={videoRef} id="my-video" controls>
                <source src="http://localhost:8000/video/1" type="video/mp4" />
              </video>
            )}
          </div>
          {showTranscript && <Caption targetRef={videoRef} />}
        </div>
      </div>
    </>
  );
};

export default Video;
