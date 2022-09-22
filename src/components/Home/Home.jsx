import React from 'react'
import "./Home.css"
import Me from "../../assets/avatar-1.svg"
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'

const Home = () => {

  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Eduardo Poletto</h1>
        <span className="home__education">Desenvolvedor JavaScript</span>
        <HeaderSocials />
        <a href="#contact" className="btn">Fale comigo</a>
        <ScrollDown />
      </div>
    </section>
  )
}

export default Home