import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchComponent from "../components/Search";

const Search = () => {
  return (
    <main>
      <Header />
      <h1>ここは検索結果のページです。</h1>
      <SearchComponent />
      <Footer />
    </main>
  );
};

export default Search;
