import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-fire"></i>

            <div>
                <h3 className="about__title">7</h3>
                <span className="about__subtitle">Projetos finalizados</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-cup"></i>

            <div>
                <h3 className="about__title">4986</h3>
                <span className="about__subtitle">Xícaras de café</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-badge"></i>

            <div>
                <h3 className="about__title">3</h3>
                <span className="about__subtitle">Certificados ganhos</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-people"></i>

            <div>
                <h3 className="about__title">58</h3>
                <span className="about__subtitle">Pessoas satisfeitas</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox