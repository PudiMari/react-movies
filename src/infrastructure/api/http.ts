import axios from 'axios';

export const httpClient = axios.create({
    baseURL: "https://api.themoviedb.org/3",

    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDE2YWY1ZDRmYWVlNjRlMjVhYjAwMWQ4N2FhYjVjMyIsIm5iZiI6MTU2MzcyMTY1OC40ODgsInN1' +
            'YiI6IjVkMzQ3ZmJhNmEzMDBiMTMzM2ExZjE5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LWXEfS8_Tue3-xST1s0xQ7LpfbM0IQnfzP2pjeoR_HU'
    }
});