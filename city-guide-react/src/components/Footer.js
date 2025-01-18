import Logo from '../assets/img/logo.webp'

import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <footer class="footer">
        <div class="footer__container">
          <div class="footer__section footer__section--about">
            <img class="footer__logo" src={Logo} alt=""></img>
          </div>
          <div class="footer__section">
            <h3 class="footer__title">Ссылки</h3>
            <ul class="footer__list">
              <li class="footer__list-item">
                <Link to="/" class="footer__link">
                  Главная
                </Link>
              </li>
              <li class="footer__list-item">
                <Link to="/contacts" class="footer__link">
                  Контакты
                </Link>
              </li>
              <li class="footer__list-item">
                <Link to="/attractions" class="footer__link">
                  Достопримечательности
                </Link>
              </li>
            </ul>
          </div>
          <div class="footer__section">
            <h3 class="footer__title">Контакты</h3>
            <p class="footer__text">Адрес: г. Казань, ул. Сююмбике 2-4</p>
            <p class="footer__text">Телефон: +7 (999) 989-18-90</p>
            <p class="footer__text">Email: KazanTravel@gmail.com</p>
          </div>
          <div class="footer__section">
            <h3 class="footer__title">Наша команда</h3>
            <p class="footer__text">Иванов Сергей</p>
            <p class="footer__text">Лютоев Михаил</p>
            <p class="footer__text">Изиланов Никита</p>
            <p class="footer__text">Ахметханов Мурат</p>
            <p class="footer__text">Нигматуллин Инсаф</p>
          </div>
        </div>
        <div class="footer__bottom">
          <p class="footer__copyright">© 2024 Все права защищены.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer