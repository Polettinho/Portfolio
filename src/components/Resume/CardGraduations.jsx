import React from 'react'

const CardGradutions = (props) => {
  return (
    <div className="timeline__item">
        <i className={props.icon}></i>
        <span className="timeline__date">{props.year}</span>
        <h4 className="timeline__title">{props.title}</h4>
        <p className="timeline__text">{props.desc}</p>
    </div>
  )
}

export default CardGradutions