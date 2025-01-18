import React from 'react'

import '../assets/css/attractions.scss'



function Attractions() {
  return (
    <div>
      <div className="categories">
        <div className="categories__header">
          <p className="categories__title">Категории</p>
        </div>
        <div className="categories__list">
          <a
            className="categories__link categories__link--active"
            href="#"
            data-filter="all"
          >
            Все
          </a>
          <a className="categories__link" href="#" data-filter="museum">
            Музеи
          </a>
          <a className="categories__link" href="#" data-filter="park">
            Парки
          </a>
          <a className="categories__link" href="#" data-filter="mosque">
            Мечети
          </a>
          <a className="categories__link" href="#" data-filter="other">
            Остальное
          </a>
        </div>
      </div>
      <div className="sorting">
        <h2 className="sorting__title">Сортировка</h2>
        <div className="sorting__buttons">
          <button className="sorting__button sorting__button--alph">
            По алфавиту
          </button>
          <button className="sorting__button sorting__button--reset">
            Сбросить
          </button>
        </div>
      </div>
      <main className="main__attractions">
        <div className="container">
          <div className="main__attractions__text-block">
            <p className="main__attractions__text">Достопримечательности</p>
            <div className="main__blocks" id="main__blocks"></div>
            <div className="main__pagination"></div>
            <div className="attraction-cards-container"></div>
            <div className="attraction-details"></div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Attractions