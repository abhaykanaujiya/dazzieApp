import React from 'react';
import "./searchBar.css";
import SearchIcon from "../../assets/icons/SEARCH.svg"
const SearchBar = () => {
  return (
    <div className='searchBarContainer' style={{ position: 'fixed', width: '88.8%', padding: '15px', background: 'red' }}>
      
      <div className='searchBox'>
       <img className='searchIcon' src={SearchIcon} alt='img' />
        <input className='searchInput' type='text'  placeholder='Search here...' />

      </div>
    </div>
  )
}

export default SearchBar