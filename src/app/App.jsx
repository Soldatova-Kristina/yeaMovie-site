import { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "@/shared/ui/Layout";

const MainPage = lazy(() => import("@/pages/MainPage"));
const FilmsByCategory = lazy(() => import("@/pages/FilmsByCategory"));
const SearchResultsPage = lazy(() => import("@/pages/SearchResultsPage"));
const MoviePage = lazy(() => import("@/pages/MoviePage"));
const FavoritesPage = lazy(() => import("@/pages/FavoritesPage"));
const PopularPage = lazy(() => import("@/pages/PopularPage"));

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                  <MainPage />
              }
            />
            <Route
              path="/films-by-category"
              element={
                  <FilmsByCategory />
              }
            />
            <Route
              path="/movie/:id"
              element={
                  <MoviePage />
              }
            />
            <Route
              path="/search-results"
              element={
                  <SearchResultsPage />
              }
            />
            <Route
              path="/favorites"
              element={
                  <FavoritesPage />
              }
            />
            <Route
              path="/popular/:category"
              element={
                  <PopularPage />
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;