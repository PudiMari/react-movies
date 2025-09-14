import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Views (Lazy Loaded)
const Home = React.lazy(() => import("../../views/home/home"));
const Movie = React.lazy(() => import("../../views/movie/movie"));
const Favs = React.lazy(() => import("../../views/favs/favs"));

// Components
import { MainNav } from "../mainNav/MainNav";

export function ApplicationRoutes() {
    return (
        <BrowserRouter>
            <MainNav />
            <Suspense fallback={<div>Carregando página...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:movieId" element={<Movie />} />
                    <Route path="/favorites" element={<Favs />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}