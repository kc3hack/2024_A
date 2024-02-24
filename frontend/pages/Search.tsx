import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchResultPage from "../components/SearchResultPage";

const Search = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path=":searchTerm" element={<SearchResultPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
