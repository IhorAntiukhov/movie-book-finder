import { ImSpinner } from 'react-icons/im';
import { useFetchPopularSeriesQuery } from '../store';
import ReactIcon from './ReactIcon';
import PopularMoviesListItem from './PopularMoviesListItem';

function PopularSeriesList() {
  const { data, error, isLoading } = useFetchPopularSeriesQuery();

  let content;
  if (isLoading) {
    content = <ReactIcon src={<ImSpinner className="spinner" />} color="#86a69d" />
  } else if (error) {
    content = 'An error occurred while trying to get series.';
  } else {
    content = data.results.map((serie) => {
      return <PopularMoviesListItem key={serie.id}
        poster={serie.poster_path} title={serie.name}
        description={serie.overview} vote={Number((serie.vote_average).toFixed(1))} />;
    });
  }

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
