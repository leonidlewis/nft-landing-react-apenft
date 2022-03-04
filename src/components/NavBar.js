import React, { useState } from "react";
import "./NavBar.css";
import TwitterImage from "../assets/images/twitter.svg";
import DiscordImage from "../assets/images/discord.svg";
import FaceImage from "../assets/images/face.svg";
import WalletImage from "../assets/images/wallet.png";

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <a href="https://twitter.com/">
              <img src={TwitterImage} alt="twitter"></img>
            </a>
            <a href="https://discord.com/">
              <img src={DiscordImage} alt="discord"></img>
            </a>
          </div>
          <div className="space">
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="#products" className="nav-links">Mint</a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-links">ApeWorld</a>
            </li>
            <li className="nav-item mobile-item">
              <img src={FaceImage} alt="face" className="face-image" />
            </li>
            <li className="nav-item">
              <a href="#customers" className="nav-links">Gallery</a>
            </li>
          </ul>

          <div className="space">
          </div>

          <div className="flex buttonContainer">
            <select className="select-collection desktop-select">
              <option value="alpha">Alpha Collection</option>
              <option value="fusion">Fusion Collection</option>
            </select>
            <select className="select-collection mobile-select">
              <option value="alpha">Alpha</option>
              <option value="fusion">Fusion</option>
            </select>
            <button className="connect-wallet desktop-button">Connect Wallet</button>
            <button className="connect-wallet mobile-button">
              <img src={WalletImage} alt="metamask" width="40" />
            </button>
          </div>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
