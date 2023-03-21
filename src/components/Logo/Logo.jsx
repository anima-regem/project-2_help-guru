import React from "react";
import './Logo.css'
import { useNavigate } from "react-router-dom";

const Logo = () => {

  const navigate = useNavigate()
  return (
    <div onClick={() => navigate('/')} className="logo_wrapper">
      <h1>
        Help<span>Guru</span>
      </h1>
    </div>
  );
};

export default Logo;
