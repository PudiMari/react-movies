import { useEffect, useState } from "react";
import { getMovies } from "../../../infrastructure/movies/service";
import { MovieCard } from "../../components/movieCard/movieCard";
import type { MovieSummary } from "../../../domain/entities/movie-summary";
import { Row, Col } from "antd";
export function Home() {
    const [movies, setMovies] = useState<MovieSummary[]>([]);
    const fetch = async () => {
        const {
            data: { results },
        } = await getMovies();
        setMovies(results);
    };
    useEffect(() => {
        fetch();
    }, []);
    return (
        <div className="container">
            <Row gutter={[24, 24]}>
                {movies.map((movie) => (
                    <Col span={4}>
                        <div key={movie.id} className="col-3">
                            <MovieCard movie={movie} />
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
}