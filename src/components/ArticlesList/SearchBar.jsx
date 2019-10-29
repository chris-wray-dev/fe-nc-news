import React from 'react';
import '../styles/SearchBar.css'

const SearchBar = ({ sortItems, sortParams }) => {

  const handleChange = (event) => {
    sortParams[event.target.id] = event.target.value;
    sortItems(sortParams);
  }

  return (
    <div className="search-bar-container">

    <form onChange={ handleChange } >

      <label htmlFor="sort_by">
        sort by : 
        <select name="sort_by" id="sort_by">
          <option value="">--sort by--</option>
          <option value="created_at">date created</option>
          <option value="title">title</option>
          <option value="author">author</option>
          <option value="topic">topic</option>
          <option value="comment_count">comment_count</option>
        </select>
      </label>

      <label htmlFor="order">
        order : 
        <select name="order" id="order">
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