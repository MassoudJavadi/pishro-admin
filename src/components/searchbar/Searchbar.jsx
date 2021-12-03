import React, { useState } from 'react';

import './searchbar.css'

const Searchbar= () => {
    const [searchValue, setSearchValue] = useState("");
    
    const handleSearchInputChanges = (e) => {
      setSearchValue(e.target.value);
    }
  
    const callSearchFunction = (e) => {
      e.preventDefault();
      setSearchValue("")
    }
  
    return (
        <form className='searchbar'>
          <input className="searchButton2" onClick={callSearchFunction} type="submit" value="جستجو" />
          <input
            className='searchbox2'
            value={searchValue}
            onChange={handleSearchInputChanges}
            type="text"
            placeholder="...عبارت مورد نظر "
          />

        </form>
      );
  }

export default Searchbar;