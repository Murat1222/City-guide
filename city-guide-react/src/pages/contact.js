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
      </div>
    </main>
  )
}

export default Contact
