import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/search/${encodeURIComponent(searchTerm)}`);
    } else {
      // 何も入力されていないときの動作をここに書く
      navigate(`/search/all`);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="search-bar">
        <img className="search-icon" src="search.svg" alt="" />
        <input
          className="search-box"
          type="search"
          placeholder="曲を検索"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Searchbar;
