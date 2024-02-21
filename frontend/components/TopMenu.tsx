import "../styles/TopMenu.css";

const Click = () => {
  alert("Hello World");
};

const TopMenu = () => {
  return (
    <div className="top-menu">
      <div className="title">
        <h1>Atmosfeel</h1>
      </div>
      <div className="top-menu-items">
        <div className="hidden-search-bar">
          <img
            className="search-icon"
            src="search.svg"
            alt=""
            onClick={Click}
          />
        </div>
        <form>
          <div className="search-bar">
            <img className="search-icon" src="search.svg" alt="" />
            <input
              className="search-box"
              type="search"
              placeholder="曲を検索"
            />
          </div>
        </form>
        <div>
          <img className="setting-icon" src="/gear-fill.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
