import { Col, Row } from "antd";
import { MovieCard } from "../../components/movieCard/movieCard";
import { useGetMovies } from "../../../application/queries/get-movies/useGetMovies";
export default function Home() {
    const { data, isLoading } = useGetMovies();
    return (
        <div className="container">
            <Row gutter={[24, 24]}>
                {isLoading ? <h1>Loading...</h1> : data?.results.map((movie)=> (
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