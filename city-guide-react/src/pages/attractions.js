import React, { useState } from 'react'
import { useAttractionsQuery } from '../components/useAttractionsQuery'
import AttractionCard from '../components/AttractionCard'
import { getLoadingIndicator } from '../components/Utils'

import { Link } from 'react-router-dom'

import '../assets/css/attractions.scss'

function Attractions() {
  const [currentPage] = useState(1)
  const [blocksPerPage] = useState(10)

  const { data, isLoading, isError, error } = useAttractionsQuery(
    currentPage,
    blocksPerPage
  )

  if (isLoading) return getLoadingIndicator()
  if (isError) return <div>{error.message}</div>

  const categories = [
    { name: 'Все', filter: 'all' },
    { name: 'Музеи', filter: 'museum' },
    { name: 'Парки', filter: 'park' },
    { name: 'Мечети', filter: 'mosque' },
    { name: 'Остальное', filter: 'other' },
  ]

  return (
    <div>
      <div className="categories">
        <div className="categories__header">
          <p className="categories__title">Категории</p>
        </div>
        <div className="categories__list">
          {categories.map((category, index) => (
            <Link
              key={index}
              className={`categories__link ${category.filter === 'all' ? 'categories__link--active' : ''}`}
              href="#"
              data-filter={category.filter}
            >
              {category.name}
            </Link>
          ))}
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
      <main className="attractions">
        <div className="container">
          <div className="attractions__text-block">
            <p className="attractions__text">Достопримечательности</p>
            <div className="attractions__blocks">
              {data.map((attraction) => (
                <AttractionCard key={attraction.id} {...attraction} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Attractions