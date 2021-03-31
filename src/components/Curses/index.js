import React from "react";
import "./style.scss";

import bootcamp from "../../assets/bootcamp.png";
import senai from "../../assets/senai.png";
import udemy from "../../assets/udemy.png";
import semana from "../../assets/semanaomnistack.jpg";
// import { Container } from './styles';

const Curses = () => {
  return (
    <section className="curses">
      <div className="conteinerCurses">
        <h1> Cursos e formações</h1>
        <ul>
          <li>
            <div className="moldura">
              <img src={bootcamp} alt="bootcamp" style={{ width: "120px" }} />
            </div>
          </li>
          <li>
            <div className="moldura">
              <img src={senai} alt="senai" />
            </div>
          </li>
          <li>
            <div className="moldura">
              <img src={udemy} alt="udemy" />
            </div>
          </li>
          <li>
            <div className="moldura">
              <img src={semana} alt="semana" />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Curses;
