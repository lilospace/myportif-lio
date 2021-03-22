import React from "react";
import "./styles.scss";
import group30 from "./assets/group30.svg";
import expers from "./assets/expers.png";
import lb2 from "./assets/lb2.png";
import boratickets from "./assets/boratickets.jpg";
import clarabella from "./assets/clarabella.png";
import itapebi from "./assets/iatapebi.png";
import designer from "./assets/designer.svg";
import code from "./assets/code.svg";
import arquiteture from "./assets/arquiteture.svg";
import bootcamp from "./assets/bootcamp.png";
import senai from "./assets/senai.png";
import udemy from "./assets/udemy.png";
import semana from "./assets/semanaomnistack.jpg";
import nexthelp from "./assets/logo.png";
import logo from "./assets/lilo-logo.png";
import logoInvert from "./assets/logo-lilo-invertt.png";
import avatar from "./assets/lilo-avatar.jpeg";

function App() {
  return (
    <div className="App" class="fadeIn">
      <header>
        <ul>
          <li>
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </li>
        </ul>
      </header>
      <section className="me">
        <figure className="avatar">
          <img src={avatar} alt="" />
        </figure>
        <div className="text">
          <h1> Desenvolvedor Júnior JavaScript</h1>
          <p>
            Codificar e recortar layouts simples e intuitivos. Eu amo o que eu
            faço!
          </p>
        </div>
        <div className="assetsPc">
          <img className="img-top" src={group30} alt="" />
        </div>
      </section>

      <div className="stacks">
        <div className="text">
          <h1> Tecnologias utilizadas</h1>
          <p>
            Opa! E ai, beleza? Meu nome é Murillo Augusto e empre fui apaixonado
            por computação, desde os 14 anos trabalho na área de hardware, em
            2020 eu me formei pelo Senai/Cimatec como técnico em desenvolvimento
            de sistemas. No mesmo ano eu ganhei uma bolsa na{" "}
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
              <img src={designer} alt="" />
              <h2>FrontEnd</h2>
              <div className="subtitle">
                Codificando do zero, com designers intuitivos e limpos, com
                muita criatividade.
              </div>
              <div className="ul-fw">
                <ul>
                  <h4>Stacks</h4>
                  <li>ReactJS</li>
                  <li>Html</li>
                  <li>Css</li>
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
              <img src={code} alt="" />
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
              <img src={arquiteture} alt="" />
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
      <section className="projects">
        <h1>Últimos Projetos na empresa Nvgo </h1>
        <p>
          {" "}
          Gostaria de conversar sobre algum projeto pessoal ou empresarial?
          Envie uma mensagem pelo{" "}
          <a href="https://wa.me/557183398031" target="blank">
            Whatsapp Business.
          </a>
        </p>
        <div className="box-projects">
          <div className="box">
            <a href="https://sejaexper.com/" target="blank">
              <figure>
                <img src={expers} alt="" />
                <figcaption style={{ color: "#fe840e" }}>
                  Garanta sua experiência como consumidor nos restaurantes!
                </figcaption>
              </figure>
            </a>
          </div>
          <div className="box">
            <a href="https://vendas.boratickets.com.br/" target="blank">
              <figure>
                <img src={boratickets} alt="" img-responsive />
                <figcaption style={{ color: "#ed4224" }}>
                  Um dos campeões de bilhetaria em festivais e shows em
                  Salvador!
                </figcaption>
              </figure>
            </a>
          </div>
          <div className="box">
            <a href="https://www.lb2.com.br/" target="blank">
              <figure>
                <img src={lb2} alt="" />
                <figcaption style={{ color: "#010204" }}>
                  <p>Empresa voltada para tecnologia à pronta disposição</p>
                </figcaption>
              </figure>
            </a>
          </div>
          <a href=""></a>
          <div className="box">
            <a href="https://clarabellashop.com/" target="blank">
              <figure>
                <img src={clarabella} alt="" />
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
                <img src={itapebi} alt="" />
                <figcaption style={{ color: "#009345" }}>
                  Toda notícia da cidade atualizada em um clique
                </figcaption>
              </figure>
            </a>
          </div>
        </div>
      </section>
      <section className="curses">
        <div className="conteinerCurses">
          <h1> Cursos e formações</h1>
          <ul>
            <li>
              <div className="moldura">
                <img src={bootcamp} alt="" style={{ width: "120px" }} />
              </div>
            </li>
            <li>
              <div className="moldura">
                <img src={senai} alt="" />
              </div>
            </li>
            <li>
              <div className="moldura">
                <img src={udemy} alt="" />
              </div>
            </li>
            <li>
              <div className="moldura">
                <img src={semana} alt="" />
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="startup">
        <div className="startupContainer">
          <h1>Startups Project</h1>
          <p>
            {" "}
            Sempre gostei de empreender. Umas das ideias que deu muito certo e
            qual precisei estender um pouco mais, foi a Next Help, uma
            plataforma Web e mobile aonde ajudará pessoas de risco durante a
            pandemia provocada pelo{" "}
            <a
              className="covid"
              href="https://news.google.com/covid19/map?hl=pt-BR&gl=BR&ceid=BR:pt-419"
              target="blank"
            >
              Covid-19.
            </a>
          </p>
          <div className="box">
            <img src={nexthelp} alt="" />
            <div className="state">
              <img src="https://img.icons8.com/nolan/64/service.png" />
              <p>em desenvolvimento</p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <h1> Siga-me nas redes sociais!</h1>
        <ul>
          <a href="https://github.com/liloak47" target="blank">
            <li>
              <img src="https://img.icons8.com/nolan/64/github.png" />
            </li>
          </a>
          <a href="https://www.instagram.com/hiamlilo/" target="blank">
            <li>
              <img src="https://img.icons8.com/nolan/64/instagram-new.png" />
            </li>
          </a>
          <a
            href="https://www.linkedin.com/in/murillo-augusto-729992193/"
            target="blank"
          >
            <li>
              <img src="https://img.icons8.com/nolan/64/linkedin.png" />
            </li>
          </a>
          <a href="https://wa.me/557183398031" target="blank">
            <li>
              <img src="https://img.icons8.com/nolan/64/whatsapp.png" />
            </li>
          </a>
        </ul>
        <div className="logo">
          <img src={logoInvert} alt="" />
        </div>
      </footer>
    </div>
  );
}

export default App;
