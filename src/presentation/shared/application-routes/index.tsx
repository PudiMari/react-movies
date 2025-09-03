import { Routes, Route, BrowserRouter } from "react-router";
import { Home } from "../../views/home/home";
import { Movie } from "../../views/movie/movie";
import {Favs} from "../../views/favs/favs.tsx";
export function ApplicationRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:movieId" element={<Movie />} />
                <Route path="/favorites" element={<Favs />} />
            </Routes>
        </BrowserRouter>
    );
}