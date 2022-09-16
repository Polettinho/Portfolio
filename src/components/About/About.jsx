import React from 'react'
import "./About.css"
import Image from '../../assets/avatar-2.svg'
import AboutBox from './AboutBox'

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">Sobre mim</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Olá, me chamo Eduardo Poletto, sou um desenvolvedor júnior. Estou criando experiência fazendo alguns estudos e cópias de WebApps, e esse aqui é o meu portfólio digital.
            </p>
            <a href="" className="btn">Baixar CV</a>
          </div>

          <div className="about__skills grid">
            <div className="skills_data">
              <div className="skills__titles">
                <h3 className="skills__name">Front-end</h3>
                <span className="skills__number">55%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage frontend"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills__titles">
                <h3 className="skills__name">Back-end</h3>
                <span className="skills__number">15%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage backend"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills__titles">
                <h3 className="skills__name">Design UI/UX</h3>
                <span className="skills__number">30%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage design"></span>
              </div>
            </div>
            <span>→ Baseado em uma avaliação pessoal ←</span>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  )
}

export default About