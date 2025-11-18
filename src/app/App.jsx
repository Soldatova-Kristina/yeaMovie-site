import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Layout from '@/shared/ui/Layout'
import MainPage from '@/pages/MainPage'
import FilmsByCategory from '@/pages/FilmsByCategory'
// import Popular from '@/pages/Popular'
import SearchResultsPage from '@/pages/SearchResultsPage'
import MoviePage from '@/pages/MoviePage'

function App() {
  return (
    <>
    <Router>
        <Routes>
           <Route element={<Layout/>}>
              <Route path="/" element={<MainPage/>}/>
              <Route path="/films-by-category" element={<FilmsByCategory/>}/>
              {/* <Route path="/popular/:category" element={<Popular/>}/> */}
              <Route path="/movie/:id" element={<MoviePage/>}/>
              <Route path="/search-results" element={<SearchResultsPage/>}/> 
           </Route >
        </Routes>
    </Router>
    </>
  )
}
   


export default App
