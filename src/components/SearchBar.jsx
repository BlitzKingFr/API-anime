import React from 'react'
import { useState } from 'react'

const SearchBar = ({onSearch}) => {
    const[query,setQuery] = useState("");

    const handleSearch = () =>{
        if(query.trim()){
            onSearch(query);
        }
    };
  return (
    <>
        <input 
            type="text" 
            placeholder='Search anime'
            value={query}
            onChange={(e) => setQuery(e.target.value) } 
        />
        <button onClick={handleSearch}>Search</button>
    </>
  )
}

export default SearchBar