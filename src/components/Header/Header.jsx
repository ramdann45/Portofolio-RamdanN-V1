import React from 'react'
import Navbar from './Fiture/Navbar'
import Core from './Fiture/Core'
import 'aos/dist/aos.css';

const Header = (props) => {
  return (
    <div className='header-web' data-aos="fade-down">
        <Navbar fn={props.fn} val={props.val} />
        <Core />
    </div>
  )
}

export default Header