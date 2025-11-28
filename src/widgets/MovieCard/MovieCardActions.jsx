import { Button } from "@/shared/ui/Button";
import { MovieFavoriteButton } from "./MovieFavoriteButton";
import { useNavigate } from "react-router-dom";

export function MovieCardActions({ id }) {
  const navigate = useNavigate();

  return (
    <div className="flex gap-4 mt-auto">
      <Button variant="primary" size="md" onClick={() => navigate(`/movie/${id}`)}>
        Смотреть
      </Button>

      <MovieFavoriteButton movieId={id} />
    </div>
  );
}