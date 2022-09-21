import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Entrar em contato</h2>

        <form action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Me diga seu nome...'/>
            </div>
            <div className="contact__form-div">
              <input type="email" className="contact__form-input" placeholder='Digite seu email...'/>
            </div>
          </div>

          <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Qual o motivo do contato?'/>
            </div>
          <div className="contact__form-div contact__form-area">
              <textarea name='' id='' cols='30' rows='10' className='contact__form-input' placeholder='Escreva sua mensagem...'/>
            </div>

            <button className='btn btn-contact'>Enviar mensagem</button>
        </form>
    </section>
  )
}

export default Contact