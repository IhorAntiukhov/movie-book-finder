import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const booksApi = createApi({
  reducerPath: 'books',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.googleapis.com/books'
  }),
  endpoints(builder) {
    return {
      fetchJavaScriptBooks: builder.query({
        query() {
          return {
            url: '/v1/volumes?q=JavaScript&key=AIzaSyC1k97c4_4Le_APQIoqUyOPusVTtKewk50&langRestrict=en',
            method: 'GET'
          }
        }
      }),
    }
  }
});

export { booksApi };
export const { useFetchJavaScriptBooksQuery } = booksApi; 
