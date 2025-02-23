/* eslint-disable react/prop-types */
import { useState } from 'react'

const SearchBar = ({onSearch}) => {
    const[query,setQuery] = useState("");

    const handleSearch = () =>{
        if(query.trim()){
            onSearch(query);
        }
    };
  return (
    <div className='search-input'>
        <input 
            type="text" 
            placeholder='Search anime'
            value={query}
            onChange={(e) => setQuery(e.target.value) } 
        />
        <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchBar