import ReactIcon from '../components/ReactIcon';
import PopularMoviesListItem from '../components/PopularMoviesListItem';
import { ImSpinner } from 'react-icons/im';

function usePopularMoviesList(data, error, isLoading, isSeries) {
  let content;
  if (isLoading) {
    content = <ReactIcon src={<ImSpinner className="spinner" />} color="#86a69d" />
  } else if (error) {
    content = `An error occurred while trying to get ${(isSeries) ? 'series' : 'movies'}.`;
  } else {
    content = data.results.map((movie) => {
      return <PopularMoviesListItem key={movie.id} id={movie.id} type={(isSeries) ? 'serie' : 'movie'}
        poster={movie.poster_path} title={(isSeries) ? movie.name : movie.title}
        description={movie.overview} vote={Number((movie.vote_average).toFixed(1))}
        releaseDate={(isSeries) ? movie.first_air_date : movie.release_date} />;
    });
  }

  return content;
}

export default usePopularMoviesList;
