import React from 'react'
import "./Resume.css"
import Data from './Data'
import CardGradutions from './CardGraduations'
import CardExperiences from './CardExperiences'

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Graduações e experiências</h2>

      <div className="resume__container grid">
        <div className="timeline grid">
          {Data.map((val, id) => {
            if(val.category === "education") {
              return (
                <CardGradutions key={id} icon={val.icon} title={val.title} year={val.year} desc={val.desc} />
              )
            }
          })}
        </div>

        <div className="timeline grid">
          {Data.map((val, index) => {
            if(val.category === "experience") {
              return (
                <CardExperiences key={index} icon={val.icon} title={val.title} year={val.year} desc={val.desc} />
              )
            }
          })}
        </div>
      </div>
    </section>
  )
}

export default Resume