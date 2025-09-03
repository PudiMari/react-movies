import { createSlice } from "@reduxjs/toolkit";
export const favsSlice = createSlice({
    name: 'favorite',
    initialState: {
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        movies: [] as any[]
    },
    reducers: {
        addMovie: (state, action) => {
            state.movies = state.movies.concat(action.payload);
        },
        removeMovie: (state, action) => {
            state.movies = state.movies.filter(movie => movie.id !==
                action.payload.id)
        }
    }
});
export const { addMovie, removeMovie } = favsSlice.actions;
export default favsSlice.reducer;