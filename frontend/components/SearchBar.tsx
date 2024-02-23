import React from "react";

const Searchbar = () => {
  return (
    <form action="/search/">
      <div className="search-bar">
        <img className="search-icon" src="search.svg" alt="" />
        <input
          className="search-box"
          type="search"
          name="search"
          placeholder="曲を検索"
        />
      </div>
    </form>
  );
};

export default Searchbar;
