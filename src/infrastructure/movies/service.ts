import type { MovieDetail } from "../../domain/entities/movie-detail";
import type { MovieSummaryResult } from "../../domain/entities/movie-summary";
import { httpClient } from "../api/http";
export function getMovies() {
    return httpClient.get<MovieSummaryResult>("movie/popular");
}
export function getMovieById(id: string) {
    return httpClient.get<MovieDetail>(`movie/${id}`);
}