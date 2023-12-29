import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assests/image1.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mayuresh Lohani</h1>
        <h5 className="text-light">Pre-Final Year Undergraduate | IIT Kharagpur | Metallurgical and Materials Engineering </h5>
        <CTA />
      </div>
    </header>
  )
}

export default Header