import React, { useState } from 'react';
import { fetchAnimeByName } from '../services/jikanAPI';
import SearchBar from '../components/SearchBar';
import AnimeList from '../components/AnimeList';
import { WifiLoaderComponent } from '../WifiLoaderComponent';

const Home = () => {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    const result = await fetchAnimeByName(query);
    setAnimeList(result);
    setLoading(false);
  };

  return (
    <div className='search'>
      <SearchBar onSearch={handleSearch} />
      {loading && <WifiLoaderComponent />}
      <AnimeList animes={animeList} loading={loading} />
    </div>
  );
};

export default Home;