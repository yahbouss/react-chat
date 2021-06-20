import './Navbar.scss'
import logo from '../../assets/logo.svg'
import React from 'react'


const Navbar = (props)=>{

    const navbuttons = ()=>{
        if (props.noNav!=='false'){
            return(
                <div className="navbar__list">
                    <ul>
                        <li className='navbar__list-item'><a href="/">Join New Room</a></li>
                        <li className='navbar__list-item'><a href="/">Leave</a></li>
                    </ul>
                </div>
            )
        }
    }

    return(
        <div className="navbar">
            <div className="wrapper">
                <nav className="navbar__container">
                    <div className="navbar__logo">
                        <a href='/'><img src={logo} alt='Chat'/></a>
                    </div>
                    {navbuttons}
                </nav>
            </div>
        </div>
    )
}

export default Navbar