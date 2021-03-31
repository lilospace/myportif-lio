import React from "react";
import "./style.scss";

import Header from "../../components/Header";
import AboutMe from "../../components/AboutMe";
import MyStacks from "../../components/MyStacks";
import Projects from "../../components/Projects";
import Curses from "../../components/Curses";
import Footer from "../../components/Footer";
// import { Container } from './styles';

const Home = () => {
  return (
    <div className="App" class="fadeIn">
      <Header />
      <AboutMe />
      <MyStacks />
      <Projects />
      <Curses />
      <Footer />
    </div>
  );
};

export default Home;
