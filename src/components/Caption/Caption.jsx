import React, { useEffect, useRef, useState } from "react";
import "./Caption.css";
import { animated, useSpring } from "@react-spring/web";

const Caption = ({ targetRef }) => {
  const animateTranscript = useSpring({
    from: { opacity: 0, right: -400 },
    to: { opacity: 1, right: 0 },
    reset: {
      right: -400,
    },
  });

  const [transcript, setTranscript] = useState([]);

  useEffect(() => {
    const url = (targetRef.current.currentSrc || targetRef.current.firstChild.currentSrc) + "/subtitles";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTranscript(data);
      });
  }, []);

  const setTime = (time) => {
    var hms = time.split(":");
    const sec =
      parseInt(hms[0]) * 60 * 60 + parseInt(hms[1] * 60) + parseInt(hms[2]);
    if (!(targetRef.current === null)) {
      targetRef.current.currentTime = sec;
      targetRef.current.play();

      targetRef.current.firstChild.currentTime = sec;
      targetRef.current.firstChild.play();
    }
  };

  const textRef = useRef(null);

  return (
    <animated.div
      style={animateTranscript}
      className="col-lg-4 col-md-5 transcript"
    >
      <div className="trancript_heading_section">
        <h3>Transcript</h3>
      </div>
      <div ref={textRef} className="trascript_text">
        {transcript.map((p) => (
          <>
            <div
              className="text_section"
              key={p.time}
              onClick={() => {
                setTime(p.time);
              }}
            >
              <p className="timestamp">{p.time}</p>
              <p>{p.text},</p>
            </div>
          </>
        ))}
      </div>
    </animated.div>
  );
};

export default Caption;
