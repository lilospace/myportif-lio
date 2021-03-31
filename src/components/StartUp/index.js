import React from "react";
import "./style.scss";
import nexthelp from "../../assets/logo.png";

// import { Container } from './styles';

const StartUp = () => {
  return (
    <section className="startup">
      <div className="startupContainer">
        <h1>Startups Project</h1>
        <p>
          {" "}
          Sempre gostei de empreender. Umas das ideias que deu muito certo e
          qual precisei estender um pouco mais, foi a Next Help, uma plataforma
          Web e mobile aonde ajudará pessoas de risco durante a pandemia
          provocada pelo{" "}
          <a
            className="covid"
            href="https://news.google.com/covid19/map?hl=pt-BR&gl=BR&ceid=BR:pt-419"
            target="blank"
          >
            Covid-19.
          </a>
        </p>
        <div className="box">
          <img src={nexthelp} alt="nexthelp" />
          <div className="state">
            <img
              src="https://img.icons8.com/nolan/64/service.png"
              alt="img-icon-next-help"
            />
            <p>em desenvolvimento</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartUp;
