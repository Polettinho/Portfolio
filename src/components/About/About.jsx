import React from "react";
import "./About.css";
import Image from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";
import Curriculo from "../../assets/curriculo.pdf";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">Sobre mim</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Olá, me chamo Eduardo Poletto, sou um desenvolvedor front-end.
              Estou criando experiência fazendo alguns estudos e cópias de
              WebApps, e esse aqui é o meu portfólio digital.
            </p>
            <a href={Curriculo} className="btn" download="Curriculo Poletto">
              Baixar currículo
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills_data">
              <div className="skills__titles">
                <h4 className="skills__name">Front-end</h4>
                <h4 className="skills__number">+2 anos</h4>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage frontend"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills__titles">
                <h4 className="skills__name">Back-end</h4>
                <h4 className="skills__number">+1 ano</h4>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage backend"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills__titles">
                <h4 className="skills__name">Design UI/UX</h4>
                <h4 className="skills__number">+3 anos</h4>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage design"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
