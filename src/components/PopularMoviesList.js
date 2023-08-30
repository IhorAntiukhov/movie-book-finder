import usePopularMoviesList from '../hooks/use-popular-movies-list';
import { useFetchPopularMoviesQuery } from '../store';

function PopularMoviesList() {
  const { data, error, isLoading } = useFetchPopularMoviesQuery();

  const content = usePopularMoviesList(data, error, isLoading);

  return (
    <div className="top-movies">
      <h2 className="top-movies__list-title">Trending movies</h2>

      <div className={`top-movies__items ${isLoading && 'top-movies__items_loading'}`}>
        {content}
      </div>
    </div>
  );
}

export default PopularMoviesList;
