import React from "react";
import "./Footer.css";
import { FaFacebookSquare, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GiThunderball } from "react-icons/gi";

function Footer() {
  return (
    <div className="footerrr" style={{width:'100%'}}>
      <footer className="footer">
        <div className="footer__divv">
          <div className="icon__divv">
            <div className="divv">
              {" "} 
              <FaGithub />
            </div>
            <div className="divv">
              {" "}
              <FaLinkedin />
            </div> 
             <div className="divv">
              {" "}
              <FaInstagram />{" "}
            </div> 
            <div className="divv">
              {" "}
              <FaFacebookSquare />
            </div>
            <div className="divv">
              <FaTwitter />
            </div>
            <div className="divv">
              {" "}
              <GiThunderball />
            </div>
          </div>
          <div className="h__divv">
            <p>Designed&Built by</p>
            <p>Yusif Osmanli</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
