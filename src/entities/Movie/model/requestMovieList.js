import { apiClient } from "@/shared/api/apiClient";

export function requestMovieList ({
    endpoint,
    params = { },
    errorMessage,
    signal,
}) {
    return apiClient
    .get(endpoint, { params, signal })
    .then(res => res.data.docs || [])
    .catch(err => {
      if (err.name === "AbortError" || err.name === "CanceledError") {
      return;
      }
  console.error(`Не удалось найти (${errorMessage}): ${err.message}`);
  throw err;
});
}
