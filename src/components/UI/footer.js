import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillApple
} from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import "./footer-style.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div className="footer-content">
          <h3
            style={{
              fontFamily: "Aldine",
              fontSize: "2em"
            }}
          >
           Book Your show 
          </h3>
          <p>List your show,event,activity or a great experience ?</p>
          <div className="sub">
            <div>
              <b>Company</b>
              <p>About</p>
              <p>Blog</p>
            </div>
            <div>
              <b>For Pune Events</b>
              <p>Comedy shows   </p>
              <p>Workshops</p>
            </div>
            <div>
              <b>For Mumbai Events</b>
              <p>Music shows</p>
              <p>Screening</p>
            </div>
            <div>
              <b>For You </b>
              <p>Privacy</p>
              <p>Security</p>
              <p>Terms</p>
            </div>
            <div>
              <b>Social links</b>
              <div>
                <AiFillFacebook />
                <AiFillTwitterCircle />
                <AiFillInstagram />
              </div>
              <div>
                <AiFillApple />
                <FaGooglePlay />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
