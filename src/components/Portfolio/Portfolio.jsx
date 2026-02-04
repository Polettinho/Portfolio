import React, { useState } from 'react'
import "./Portfolio.css"
import Menu from './Menu'

const Portfolio = () => {

  const [items, setItems] = useState(Menu);

  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    })

    setItems(updatedItems);
  }

  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">Projetos recentes</h2>

      <div className="work__filters">
        <span className="work__item">Todos</span>
        <span className="work__item" onClick={() => filterItem("React")}>React</span>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const{ id, image, title, category} = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumnnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href="" className="">
                <i className="icon-link work__button"></i>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio