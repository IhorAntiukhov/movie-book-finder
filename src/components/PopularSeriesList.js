import usePopularMoviesList from '../hooks/use-popular-movies-list';
import { useFetchPopularSeriesQuery } from '../store';

function PopularSeriesList() {
  const { data, error, isLoading } = useFetchPopularSeriesQuery();

  const content = usePopularMoviesList(data, error, isLoading, true);

  return (
    <div className="top-movies">
      <h2 className="top-movies__list-title">Trending series</h2>

      <div className={`top-movies__items ${isLoading && 'top-movies__items_loading'}`}>
        {content}
      </div>
    </div>
  );
}

export default PopularSeriesList;
