import { Button, Card } from "antd";
import { StarOutlined, DeleteOutlined } from "@ant-design/icons";
import type { MovieSummary } from "../../../domain/entities/movie-summary";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    addMovie,
    removeMovie,
} from "../../../infrastructure/store/features/favs";
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
    return (
        <Card title={movie.title}>
            <div className="movie-item">
                <div>
                    <img
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt=""
                    />
                </div>
                <Button type="primary">
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