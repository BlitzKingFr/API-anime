import React from 'react'

const AnimeCard = ({anime}) => {
  return (
    <div>
        <img src={anime.images.jpg.image_url} alt={anime.title} />
        <h2>{anime.title}</h2>
    </div>
  )
}

export default AnimeCard