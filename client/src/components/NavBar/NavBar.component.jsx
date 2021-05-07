import './Navbar.scss'
import logo from '../../assets/logo.svg'

const Navbar = ()=>{
    return(
        <div className="navbar">
            <div className="wrapper">
                <nav className="navbar__container">
                    <div className="navbar__logo">
                        <a href='/'><img src={logo} alt='Chat'/></a>
                    </div>
                    <div className="navbar__list">
                        <ul>
                            <li className='navbar__list-item'><a href="/">Join New Room</a></li>
                            <li className='navbar__list-item'><a href="/">Leave</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar