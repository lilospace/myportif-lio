import React from "react";
import "./style.scss";

import designer from "../../assets/designer.svg";
import code from "../../assets/code.svg";
import arquiteture from "../../assets/arquiteture.svg";
// import { Container } from './styles';

function MyStacks() {
  return (
    <div className="stacks">
      <div className="text">
        <h1> Tecnologias utilizadas</h1>
        <p>
          Opa! E ai, beleza? Meu nome é Murillo Augusto e empre fui apaixonado
          por computação, desde os 14 anos trabalho na área de hardware, em 2020
          eu me formei pelo Senai/Cimatec como técnico em desenvolvimento de
          sistemas. No mesmo ano eu ganhei uma bolsa na{" "}
          <a style={{ color: "#fff" }} href="https://kenzie.com.br/">
            Kenzie Academy
          </a>
          , uma instituição focada no crescimento do aluno, consolidei minha
          stack em javascript, com o React e foi amor a primeira vista! Estou
          indo para o terceiro trimestre aprender Python e espero evoluir mais
          ainda minha carreira!
        </p>
      </div>
      <div className="groupTools">
        <div className="border">
          <div className="tools">
            <img src={designer} alt="designer" />
            <h2>FrontEnd</h2>
            <div className="subtitle">
              Codificando do zero, com designers intuitivos e limpos, com muita
              criatividade.
            </div>
            <div className="ul-fw">
              <ul>
                <h4>Stacks</h4>
                <li>ReactJS</li>
                <li>Html</li>
                <li>Css</li>
                <li>Styled Components</li>
                <li>Sass</li>
                <li>Redux</li>
                <li>Providers</li>
                <li>Hooks</li>
              </ul>
            </div>
            <div className="ul-fc">
              <ul>
                <h4>Ferramentas</h4>
                <li>VsCode</li>
                <li>Terminal Linux</li>
                <li>Ubuntu 20.04</li>
                <li>GitHub</li>
                <li>Gitlab</li>
                <li>BootStrap</li>
                <li>Material Ui</li>
                <li>Coolors.co</li>
                <li>Docker</li>
              </ul>
            </div>
          </div>
          <div className="tools">
            <img src={code} alt="code" />
            <h2>BackEnd</h2>
            <div className="subtitle">
              Soluções em código, uma das partes mais desafiadores para mim do
              projeto, para deixar tudo funcionando corretamente!
            </div>
            <div className="ul-fw">
              <ul>
                <h4>Stacks</h4>
                <li>Nodejs</li>
                <li>Mysql</li>
                <li>KnexJs</li>
                <li>API Rest</li>
              </ul>
            </div>
            <div className="ul-fc">
              <ul>
                <h4>Tools</h4>
                <li>VsCode</li>
                <li>Insomnia</li>
                <li>Workbench</li>
                <li>SqlFront</li>
                <li>Terminal Linux</li>
                <li>Cpanel</li>
                <li>Opencart</li>
                <li>Ubuntu 20.04</li>
              </ul>
            </div>
          </div>
          <div className="tools">
            <img src={arquiteture} alt="arquiteture" />
            <h2>Arquitetura de Software</h2>
            <div className="subtitle">
              Uma boa aplicação vem de uma boa arquitetura, organização e
              entregas estipuladas. Métodos ágeis e com eficiência.
            </div>
            <div className="ul-fw">
              <ul>
                <h4>Materiais</h4>
                <li>Versionamento de código</li>
                <li>Sprints</li>
                <li>Scrum</li>
                <li>Métodos Ágeis</li>
                <li>Documentação</li>
              </ul>
            </div>
            <div className="ul-fc">
              <ul>
                <h4>Slack</h4>
                <li>Github</li>
                <li>GitLab</li>
                <li>Pacote Office</li>
                <li>Notion</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyStacks;
