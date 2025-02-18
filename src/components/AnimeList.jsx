import React from 'react';
import AnimeCard from './AnimeCard';

const AnimeList = ({ animes, loading }) => {
  return (
    <div>
      {loading ? null : (
        animes.length > 0 ? (
          animes.map((anime) => <AnimeCard key={anime.mal_id} anime={anime} />)
        ) : (
          <p>No result found</p>
        )
      )}
    </div>
  );
};

export default AnimeList;