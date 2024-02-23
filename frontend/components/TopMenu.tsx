import "../styles/TopMenu.css";

const TestClick = () => {
  alert("検索アイコンを押すと検索バーを表示するようにする");
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
            onClick={TestClick}
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
