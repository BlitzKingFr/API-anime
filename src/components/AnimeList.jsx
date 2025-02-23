import AnimeCard from './AnimeCard';

const AnimeList = ({ animes, loading }) => {
  return (
    <div className='anime-result'>
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