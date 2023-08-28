import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const seriesApi = createApi({
  reducerPath: 'series',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org'
  }),
  endpoints(builder) {
    return {
      fetchPopularSeries: builder.query({
        query() {
          return {
            url: '/3/trending/tv/day?language=en-US',
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGUzZDUxOGJiZTU1MGI0MjIwNGQ1OGZhZjRhM2JiNiIsInN1YiI6IjY0ZTZmZmY1ZTg5NGE2MDEwMTIwNjQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M_3BoaZ8tH59sxOFKuFanWCdbg-ocHcxKZPujfwHX-U'
            }
          }
        }
      }),
    }
  }
});

export { seriesApi };
export const { useFetchPopularSeriesQuery } = seriesApi; 
