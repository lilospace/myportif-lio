import React from "react";
import "./style.scss";
import expers from "../../assets/expers.png";
import lb2 from "../../assets/lb2.png";
import boratickets from "../../assets/boratickets.jpg";
import clarabella from "../../assets/clarabella.png";
import itapebi from "../../assets/iatapebi.png";
// import { Container } from './styles';

const Projects = () => {
  return (
    <section className="projects">
      <h1>Últimos Projetos na empresa Nvgo </h1>
      <p>
        {" "}
        Gostaria de conversar sobre algum projeto pessoal ou empresarial? Envie
        uma mensagem pelo{" "}
        <a href="https://wa.me/557183398031" target="blank">
          Whatsapp Business.
        </a>
      </p>
      <div className="box-projects">
        <div className="box">
          <a href="https://sejaexper.com/" target="blank">
            <figure>
              <img src={expers} alt="expers" />
              <figcaption style={{ color: "#fe840e" }}>
                Garanta sua experiência como consumidor nos restaurantes!
              </figcaption>
            </figure>
          </a>
        </div>
        <div className="box">
          <a href="https://vendas.boratickets.com.br/" target="blank">
            <figure>
              <img src={boratickets} alt="boratickets" img-responsive />
              <figcaption style={{ color: "#ed4224" }}>
                Um dos campeões de bilhetaria em festivais e shows em Salvador!
              </figcaption>
            </figure>
          </a>
        </div>
        <div className="box">
          <a href="https://www.lb2.com.br/" target="blank">
            <figure>
              <img src={lb2} alt="lb2" />
              <figcaption style={{ color: "#010204" }}>
                <p>Empresa voltada para tecnologia à pronta disposição</p>
              </figcaption>
            </figure>
          </a>
        </div>
        <div className="box">
          <a href="https://clarabellashop.com/" target="blank">
            <figure>
              <img src={clarabella} alt="clarabella" />
              <figcaption style={{ color: "#d5708f" }}>
                Moda luxo do fitness ao casual! Sinta-se bem, sinta-se
                clarabella
              </figcaption>
            </figure>
          </a>
        </div>
        <div className="box">
          <a href="https://www.itapebiacontece.com/" target="blank">
            <figure>
              <img src={itapebi} alt="itapebi" />
              <figcaption style={{ color: "#009345" }}>
                Toda notícia da cidade atualizada em um clique
              </figcaption>
            </figure>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
