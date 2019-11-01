import React from 'react';
import './styles/SortBar.css'

const SearchBar = ({ sortItems, requestParams, pagination }) => {

  const handleChange = (event) => {
    requestParams[event.target.id] = event.target.value;
    sortItems(requestParams);
  }

  return (
    <div className="search-bar-container">

    <form >

      <label htmlFor="sort_by">
        sort by : <select 
          onChange={ handleChange } 
          name="sort_by" 
          id="sort_by"
          value={requestParams.sort_by}>
          <option value="">--sort by--</option>
          <option value="created_at">date created</option>
          <option value="title">title</option>
          <option value="author">author</option>
          <option value="topic">topic</option>
          <option value="comment_count">comment_count</option>
          <option value="votes">votes</option>
        </select>
      </label>

      <label htmlFor="order">
        order : <select 
          onChange={ handleChange } 
          name="order" 
          id="order"
          value={requestParams.order}>
          <option value="asc">asc</option>
          <option value="desc">desc</option>
        </select>
      </label>

      <label htmlFor="p">
        page number : <select 
          onChange={ handleChange } 
          id="p" 
          type="number" 
          value={requestParams.p}>
          {pagination.pageList.map(page => {
            return (
              <option key={page} value={page}>{page}</option>
            )
          })}
        </select>
        
      </label>

      <label htmlFor="limit">
        items per page : <select
          onChange={ handleChange } 
          id="limit" 
          type="number"
          value={requestParams.limit}
          >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="40">40</option>


        </select>

      </label>
      
    </form>

  </div>
  );
};

export default SearchBar;