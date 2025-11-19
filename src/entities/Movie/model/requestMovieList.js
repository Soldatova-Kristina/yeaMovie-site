import { apiClient } from "@/shared/api/apiClient";

export function requestMovieList ({
    endpoint = "/movie",
    params = {},
    errorMessage,
}) {
    return apiClient
        .get(endpoint, { params })
        .then(response => response.data.docs)
        .catch(error => {
            console.error(`Не удалось найти ${errorMessage}`, error);
            throw error;
        });
}