import { Col, Row } from "antd";
import { useGetMovieById } from "../../../application/queries/get-movie-by-id/useGetMovieById";
export default function Movie() {
    const { data, isLoading } = useGetMovieById();
    return (
        <section className="movie-detail">
            <div className="container">
                {isLoading && <h1>Loading...</h1>}
                <Row>
                    <Col span={24}>
                        <h1>{data?.title}</h1>
                        {data?.poster_path && (
                            <img
                                src={`https://image.tmdb.org/t/p/w400${data.poster_path}`}
                                alt=""
                            />
                        )}
                        <p>{data?.overview}</p>
                    </Col>
                </Row>
            </div>
        </section>
    );
}