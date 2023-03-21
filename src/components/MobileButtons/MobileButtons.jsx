import React from "react";
import Button from "../Button/Button";
import { videoIcon, audioIcon } from "../../assets/icons";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";

const MobileButtons = ({ showTranscript }) => {
  const navigate = useNavigate();

  const animateButtons = useSpring({
    opacity: showTranscript ? 1 : 1,
    reset: true,
  });
  return (
    <animated.div style={animateButtons} className="container">
      <div className="row">
        <div className="col-lg-12 mob_buttons">
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
    </animated.div>
  );
};

export default MobileButtons;
