/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const AnimeCard = ({anime}) => {
  return (
    <div className="anime-card">
      <Link to={`anime/${anime.mal_id}`}>
          <img src={anime.images.jpg.image_url} alt={anime.title} />
          <h2>{anime.title}</h2>
      </Link>
    </div>
    
  )
}

export default AnimeCard