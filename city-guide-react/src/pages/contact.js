import React from 'react'

import '../assets/css/contact.scss'


function Contact() {
  return (
    <main className="main__contact">
      <div className="container">
        <div className="main__contact-block">
          <p className="main__contact__txt-contact">
            Вы попали на страницу контактов! Мы стремимся обеспечить вам
            максимально комфортное и беспроблемное использование наших услуг.
            Если у вас возникли вопросы, проблемы или вам нужна помощь,
            пожалуйста, воспользуйтесь кнопкой "Связаться с нами"
          </p>
          <button id="open-modal-btn" className="main__contact__btn">
            Связаться с нами
          </button>
        </div>
        <div className="modal" id="my-modal">
          <div className="modal__box">
            <button className="modal__close-btn" id="close-my-modal-btn">
              <img
                className="modal__img"
                src="./assets/img/close.png"
                alt="close"
              ></img>
            </button>
            <h1>Заявка</h1>
            <form id="complaint-form">
              <div className="modal__group">
                <p for="name">Ваше имя:</p>
                <input type="text" id="name" name="name" required></input>
              </div>
              <div className="modal__group">
                <p for="email">Ваш email:</p>
                <input type="email" id="email" name="email" required></input>
              </div>
              <div className="modal__group">
                <p for="subject">Тема обращения:</p>
                <input type="text" id="subject" name="subject" required></input>
              </div>
              <div className="modal__group">
                <p for="message">Описание проблемы:</p>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button className="modal__button" type="submit">
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact
