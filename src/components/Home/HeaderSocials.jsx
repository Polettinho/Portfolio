import React from 'react'
import './Home.css'

const HeaderSocials = () => {
  return (
    <div className="home__socials">
        <a href="https://www.linkedin.com/in/eduardo-poletto/" className="home__social-link" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
        </a>

        <a href="https://wa.me/55065999493735" className="home__social-link" target="_blank">
            <i class="fa-brands fa-whatsapp"></i>
        </a>

        <a href="https://www.instagram.com/polettinh0/" className="home__social-link" target="_blank">
            <i class="fa-brands fa-instagram"></i>
        </a>

        <a href="https://www.facebook.com/polettinh0/" className="home__social-link" target="_blank">
            <i class="fa-brands fa-facebook"></i>
        </a>
    </div>
  )
}

export default HeaderSocials