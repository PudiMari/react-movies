import { getMovies } from "../../../infrastructure/movies/service";
import { useQuery } from "@tanstack/react-query";
export const MOVIES_QUERY_KEY = "movies";
export function useGetMovies() {

    return useQuery({
        queryKey: [MOVIES_QUERY_KEY],
        queryFn: () => getMovies().then(({ data }) => data),
    })
}