// src/app/App.jsx
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "@/shared/ui/Layout";

function PageLoader() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent"></div>
        <p className="text-gray-400">Загрузка страницы...</p>
      </div>
    </div>
  );
}

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
                <Suspense fallback={<PageLoader />}>
                  <MainPage />
                </Suspense>
              }
            />
            <Route
              path="/films-by-category"
              element={
                <Suspense fallback={<PageLoader />}>
                  <FilmsByCategory />
                </Suspense>
              }
            />
            <Route
              path="/movie/:id"
              element={
                <Suspense fallback={<PageLoader />}>
                  <MoviePage />
                </Suspense>
              }
            />
            <Route
              path="/search-results"
              element={
                <Suspense fallback={<PageLoader />}>
                  <SearchResultsPage />
                </Suspense>
              }
            />
            <Route
              path="/favorites"
              element={
                <Suspense fallback={<PageLoader />}>
                  <FavoritesPage />
                </Suspense>
              }
            />
            <Route
              path="/popular/:category"
              element={
                <Suspense fallback={<PageLoader />}>
                  <PopularPage />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;