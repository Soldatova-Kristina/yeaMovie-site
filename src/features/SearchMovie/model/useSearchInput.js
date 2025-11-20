import { useState } from "react";
import {useNavigate} from "react-router-dom";

export function useSearchInput() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    function submit (e) {
    if (e.key === "Enter") {
        if (!query.trim()) return;
        navigate(`/search-results?query=${encodeURIComponent(query)}`)
    }
    }

    function manualSubmit () {
        if(!query.trim()) return;
        navigate(`/search-results?query=${encodeURIComponent(query)}`)
    }

    return {
        query,
        setQuery,
        submit,
        manualSubmit
    }
}
