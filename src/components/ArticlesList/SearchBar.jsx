import React from 'react';
import '../styles/SearchBar.css'

const SearchBar = () => {
  return (
    <div className="search-bar-container">

    <form>

      <label htmlFor="sort_by">
        sort by : 
        <select name="sort_by" id="sort_by">
          <option value="">--sort by--</option>
          <option value="created_at">created_at</option>
        </select>
      </label>

      <label htmlFor="order">
        order : 
        <select name="order" is="order">
          <option value="asc">asc</option>
          <option value="desc">desc</option>
        </select>
      </label>

      <label htmlFor="p">
        page number :
        <input id="p" type="number" />
      </label>

      <label htmlFor="limit">
        items per page :
        <input id="limit" type="number"/>
      </label>
      
    </form>

  </div>
  );
};

export default SearchBar;