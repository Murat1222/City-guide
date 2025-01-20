import React from 'react'

function AttractionCard({
  id,
  category,
  title,
  description,
  adress,
  adressHref,
  shortTitle,
  image,
}) {
  return (
    <div className="attractions__block" data-cat={category} id={id}>
      <img className="attractions__block-img" src={image} alt={shortTitle} />
      <div className="attractions__block-text">
        <h2 className="attractions__block-title">{title}</h2>
        <p className="attractions__block-description">{description}</p>
        <a
          className="attractions__link"
          href={adressHref}
          target="_blank"
          rel="noreferrer"
        >
          {adress}
        </a>
      </div>
    </div>
  )
}

export default AttractionCard