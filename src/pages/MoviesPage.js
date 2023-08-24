import { useFetchPopularMoviesQuery } from '../store';

function MoviesPage() {
  const { data, error, isLoading } = useFetchPopularMoviesQuery();

  console.log(data);

  return (
    <div>
      Movies
    </div>
  );
}

export default MoviesPage;
