import { Button, Card } from "antd";
import { StarOutlined, DeleteOutlined } from "@ant-design/icons";
import type { MovieSummary } from "../../../domain/entities/movie-summary";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    addMovie,
    removeMovie,
} from "../../../infrastructure/store/features/favs";
import { useQueryClient } from "@tanstack/react-query";
import { MOVIES_QUERY_KEY } from "../../../application/queries/get-movies/useGetMovies";
import { getMovieById } from "../../../infrastructure/movies/service";
interface MovieComponentProps {
    movie: MovieSummary;
}
export function MovieCard({ movie }: MovieComponentProps) {
    const dispatch = useDispatch();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const favorites = useSelector((state) => state.favs.movies);
    function isMovieAdded(movie: MovieSummary) {
        return favorites.find((m: { id: number; }) => m.id === movie.id);
    }
    const queryClient = useQueryClient();
    const prefetch = () => {
        queryClient.prefetchQuery({
            queryKey: [MOVIES_QUERY_KEY, movie.id],
            queryFn: () => getMovieById(`${movie.id}`).then(({ data }) =>
                data),
        });
    };
    return (
        <Card title={movie.title}>
            <div className="movie-item">
                <div>
                    <img
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt=""
                    />
                </div>
                <Button onMouseEnter={prefetch} type="primary">
                    <Link to={`/movie/${movie.id}`}>Ver detalhes</Link>
                </Button>
                {isMovieAdded(movie) ? (
                    <Button onClick={() => dispatch(removeMovie(movie))}>
                        <DeleteOutlined /> Remover dos Favoritos
                    </Button>
                ) : (
                    <Button onClick={() => dispatch(addMovie(movie))}>
                        <StarOutlined /> Favoritar
                    </Button>
                )}
            </div>
        </Card>
    );
}