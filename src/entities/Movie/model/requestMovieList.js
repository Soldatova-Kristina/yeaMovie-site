import { apiClient } from "@/shared/api/apiClient";

export function requestMovieList ({
    endpoint,
    params = { },
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
