import React from "react";
import "./style.scss";
import group30 from "../../assets/group30.svg";
import avatar from "../../assets/lilo-avatar.jpeg";

// import { Container } from './styles';

const AboutMe = () => {
  return (
    <section className="me">
      <figure className="avatar">
        <img src={avatar} alt="avatar" />
      </figure>
      <div className="text">
        <h1> Desenvolvedor Júnior JavaScript</h1>
        <p>
          Codificar e recortar layouts simples e intuitivos. Eu amo o que eu
          faço!
        </p>
      </div>
      <div className="assetsPc">
        <img className="img-top" src={group30} alt="img1" />
      </div>
    </section>
  );
};

export default AboutMe;
