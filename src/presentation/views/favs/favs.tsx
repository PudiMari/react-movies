import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { useDispatch, useSelector } from "react-redux";
import { DeleteOutlined } from '@ant-design/icons';
import { removeMovie } from "../../../infrastructure/store/features/favs";
import type { ReactElement, ReactNode, ReactPortal } from "react";

export function Favs() {
    const dispatch = useDispatch();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const favorites = useSelector((state) => state.favs.movies);
    return (
        <div className="container">
            <Row gutter={[24, 24]}>
                {favorites.map((movie: {
                    //eslint-disable-next-line @typescript-eslint/no-explicit-any
                    poster_path: any; title: string | number | bigint | boolean | ReactElement | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
                    <Col span={6}>
                        <Card
                            hoverable
                            cover={
                                <img
                                    alt="example"
                                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                />
                            }
                            actions={[
                                <DeleteOutlined onClick={() =>
                                    dispatch(removeMovie(movie))} />,
                            ]}
                        >
                            <Meta title={movie.title} />
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}