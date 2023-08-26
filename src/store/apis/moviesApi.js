import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const moviesApi = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org'
  }),
  endpoints(builder) {
    return {
      fetchPopularMovies: builder.query({
        query() {
          return {
            url: '/3/movie/popular?language=en-US&page=1',
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGUzZDUxOGJiZTU1MGI0MjIwNGQ1OGZhZjRhM2JiNiIsInN1YiI6IjY0ZTZmZmY1ZTg5NGE2MDEwMTIwNjQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M_3BoaZ8tH59sxOFKuFanWCdbg-ocHcxKZPujfwHX-U'
            }
          }
        }
      }),
      fetchMovies: builder.query({
        query({ url, page }) {
          return {
            url: `${url}?language=en-US&page=${page}`,
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGUzZDUxOGJiZTU1MGI0MjIwNGQ1OGZhZjRhM2JiNiIsInN1YiI6IjY0ZTZmZmY1ZTg5NGE2MDEwMTIwNjQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M_3BoaZ8tH59sxOFKuFanWCdbg-ocHcxKZPujfwHX-U'
            }
          }
        }
      })
    }
  }
});

export { moviesApi };
export const { useFetchPopularMoviesQuery, useFetchMoviesQuery } = moviesApi 
