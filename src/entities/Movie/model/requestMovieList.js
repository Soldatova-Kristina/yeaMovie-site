import { apiClient } from "@/shared/api/apiClient";

export function requestMovieList ({
    endpoint = "/movie/search",
    params = {
        query: query,              
        page: page,
        limit: limit
    },
    errorMessage,
}) {
    return apiClient
    .get(endpoint, { params })
    .then(res => res.data.docs || [])
    .catch(err => {
      console.error(`Не удалось найти (${errorMessage}):`, err);
      throw err;
    });
}