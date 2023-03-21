import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import "./Home.css";
import { videoIcon, audioIcon } from "../../assets/icons";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="container home_wrapper">
      <Logo />
      <div className="row home_content">
        <div className="col-lg-6 col-md-6 col-12 heading_section">
          <h1 className="heading">
            “Know your <span>Limits</span> , but <span>Never Stop</span>
            trying to break them”
          </h1>
          <p>Kyle Maynard.</p>
          <div className="home_buttons">
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

        <div className="col-lg-6 col-md-6 col-12">
          <div className="image">
            <img src="./images/banner.png" alt="" />
          </div>
        </div>
        <div className="col-md-12">
          <div className="home_buttons_2">
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
      </div>
    </div>
  );
};

export default Home;
