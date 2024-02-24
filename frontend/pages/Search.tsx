import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchResultPage from "../components/SearchResultPage";
import React from "react";

const Search = () => {
  return (
    <main>
      <Header />
      <Routes>
        <Route path=":searchTerm" element={<SearchResultPage />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default Search;
