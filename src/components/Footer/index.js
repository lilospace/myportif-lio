import React from "react";
import "./style.scss";
import logoInvert from "../../assets/logo-lilo-invertt.png";

// import { Container } from './styles';

const Footer = () => {
  return (
    <footer>
      <h1> Siga-me nas redes sociais!</h1>
      <ul>
        <a href="https://github.com/liloak47" target="blank">
          <li>
            <img src="https://img.icons8.com/nolan/64/github.png" alt="git" />
          </li>
        </a>
        <a href="https://www.instagram.com/hiamlilo/" target="blank">
          <li>
            <img
              src="https://img.icons8.com/nolan/64/instagram-new.png"
              alt="insta"
            />
          </li>
        </a>
        <a
          href="https://www.linkedin.com/in/murillo-augusto-729992193/"
          target="blank"
        >
          <li>
            <img
              src="https://img.icons8.com/nolan/64/linkedin.png"
              alt="linkedin"
            />
          </li>
        </a>
        <a href="https://wa.me/557183398031" target="blank">
          <li>
            <img src="https://img.icons8.com/nolan/64/whatsapp.png" alt="wpp" />
          </li>
        </a>
      </ul>
      <div className="logo">
        <img src={logoInvert} alt="logoInvert" />
      </div>
    </footer>
  );
};

export default Footer;
