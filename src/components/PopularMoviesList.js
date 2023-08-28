import { useFetchPopularMoviesQuery } from '../store';
import PopularMoviesListItem from './PopularMoviesListItem';
import ReactIcon from './ReactIcon';
import { ImSpinner } from 'react-icons/im';

function PopularMoviesList() {
  const { data, error, isLoading } = useFetchPopularMoviesQuery();

  let content;
  if (isLoading) {
    content = <ReactIcon src={<ImSpinner className="spinner" />} color="#86a69d" />
  } else if (error) {
    content = 'An error occurred while trying to get movies.';
  } else {
    content = data.results.map((movie) => {
      return <PopularMoviesListItem key={movie.id}
        poster={movie.poster_path} title={movie.title}
        description={movie.overview} vote={movie.vote_average} />;
    });
  }

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
