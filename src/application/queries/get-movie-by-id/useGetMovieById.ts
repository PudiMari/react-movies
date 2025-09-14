import { useParams } from "react-router-dom";
import { getMovieById } from "../../../infrastructure/movies/service";
import { useQuery } from "@tanstack/react-query";
import { MOVIES_QUERY_KEY } from "../get-movies/useGetMovies";
export function useGetMovieById() {
    const { movieId } = useParams();
    return useQuery({
        queryKey: [MOVIES_QUERY_KEY, movieId],
        queryFn: () => {
            return getMovieById(movieId!).then(({ data }) => data)
        }
    })
}