import { NavLink } from 'react-router-dom'

import Logo from '../assets/img/logo.webp'

function Header() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <nav className="header__menu">
            <NavLink to="/">
              <img className="header__logo" src={Logo} alt="logo"></img>
            </NavLink>
            <li>
              <NavLink className="header__text" to="/">
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink className="header__text" to="/contacts">
                Контакты
              </NavLink>
            </li>
            <li>
              <NavLink className="header__text" to="/attractions">
                Достопримечательности
              </NavLink>
            </li>
            <div className="burger" id="burger">
              <span className="burger__span"></span>
            </div>
            <div className="burger__menu" id="menu">
              <ul>
                <li>
                  <NavLink to="./index.html">Главная</NavLink>
                </li>
                <li>
                  <NavLink to="./contact.html">Контакты</NavLink>
                </li>
                <li>
                  <NavLink to="./attractions.html">
                    Достопримечательности
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header