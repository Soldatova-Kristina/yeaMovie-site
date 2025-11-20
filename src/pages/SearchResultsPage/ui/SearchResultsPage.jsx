import { useSearchParams } from "react-router-dom";
import {useState, useEffect} from "react";
import {getMoviesByQuery} from "@/entities/Movie/model/getMoviesByQuery";


export default function SearchResultsPage() {
    const [params] = useSearchParams();
    const query = params.get("query") || "";

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function load() {
            if(!query.trim()) return;
            const data = await getMoviesByQuery(query);
            setMovies(data);
        }
        load();
    }, [query]);

    return (
        <>
        <h1>Результаты поиска</h1> 
        
        <MovieGrid movies={movies}/>
        </>
    );
}
