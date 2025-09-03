import { useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../../infrastructure/movies/service";
import type { MovieDetail } from "../../../domain/entities/movie-detail";
import { Col, Row } from "antd";
export function Movie() {
    const [movie, setMovie] = useState<MovieDetail>({} as MovieDetail);
    const { movieId } = useParams();
    const getMovie = async () => {
        if (!movieId) {
            return;
        }
        const { data } = await getMovieById(movieId);
        setMovie(data);
    };
    getMovie();
    return (
        <section className="movie-detail">
            <div className="container">
                <Row>
                    <Col span={24}>
                        <h1>{movie.title}</h1>
                        {movie.poster_path && (
                            <img
                                src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                                alt=""
                            />
                        )}
                        <p>{movie.overview}</p>
                    </Col>
                </Row>
            </div>
        </section>
    );
}