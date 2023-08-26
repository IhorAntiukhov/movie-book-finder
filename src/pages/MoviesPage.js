import MoviesList from '../components/MoviesList';
import PopularMoviesList from '../components/PopularMoviesList';

function MoviesPage() {
  return (
    <div>
      <PopularMoviesList />
      <MoviesList url="/3/movie/top_rated" title="Top rated" />
      <MoviesList url="/3/movie/upcoming" title="Upcoming" />
      <MoviesList url="/3/movie/now_playing" title="Now playing" />
    </div>
  );
}

export default MoviesPage;
