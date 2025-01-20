import Logo from '../assets/img/logo.webp'

import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__section footer__section--about">
            <img className="footer__logo" src={Logo} alt=""></img>
          </div>
          <div className="footer__section">
            <h3 className="footer__title">Ссылки</h3>
            <ul className="footer__list">
              <li className="footer__list-item">
                <Link to="/" className="footer__link">
                  Главная
                </Link>
              </li>
              <li className="footer__list-item">
                <Link to="/contacts" className="footer__link">
                  Контакты
                </Link>
              </li>
              <li className="footer__list-item">
                <Link to="/attractions" className="footer__link">
                  Достопримечательности
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__section">
            <h3 className="footer__title">Контакты</h3>
            <p className="footer__text">Адрес: г. Казань, ул. Сююмбике 2-4</p>
            <p className="footer__text">Телефон: +7 (999) 989-18-90</p>
            <p className="footer__text">Email: KazanTravel@gmail.com</p>
          </div>
          <div className="footer__section">
            <h3 className="footer__title">Наша команда</h3>
            <p className="footer__text">Иванов Сергей</p>
            <p className="footer__text">Лютоев Михаил</p>
            <p className="footer__text">Изиланов Никита</p>
            <p className="footer__text">Ахметханов Мурат</p>
            <p className="footer__text">Нигматуллин Инсаф</p>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copyright">© 2024 Все права защищены.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer