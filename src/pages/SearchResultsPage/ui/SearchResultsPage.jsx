import { useSearchParams } from "react-router-dom";
import {useState, useEffect} from "react";
import {getMoviesByQuery} from "@/entities/Movie/model/getMoviesByQuery";


export default function SearchResultsPage() {
    const [params] = useSearchParams();
    const query = params.get("query") || "";

    const [results, setResults] = useState([]);

    useEffect(() => {
        // TODO: fetch search results for query
    }, [query]);

    return (
        <>
        <div>Результаты поиска</div> 
        <ul>
            {results.map((result) => (
                <li key={result.id}>{result.name}</li>
            ))}
        </ul>
        </>
    );
}
