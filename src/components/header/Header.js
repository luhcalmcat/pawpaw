import logo from '../../foto/Logo.jpg'
import './Header.css'
import HeaderItem from '../header-item/HeaderItem'

function Header() {
    return (
      <div className="header">
        <img src={logo}></img>
        <div className='header-item-container'>
          <HeaderItem headerItemText={'Home'}/>
          <HeaderItem headerItemText={'Fluff List'}/>
          <HeaderItem headerItemText={'Contact Us'}/>
        </div>
      </div>
    )
}

export default Header;