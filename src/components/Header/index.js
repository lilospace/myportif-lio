import React from "react";
import "./style.scss";
import logo from "../../assets/lilo-logo.png";

// import { Container } from './styles';

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
