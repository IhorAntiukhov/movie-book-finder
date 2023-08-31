import { useSelector } from 'react-redux';
import { useFetchMovieDetailsQuery } from '../store';
import ReactIcon from './ReactIcon';
import { ImSpinner } from 'react-icons/im';

function MovieInfo() {
  const id = useSelector((state) => state.navigationReducer.openedMovieBookId.id);
  const { data, error, isLoading } = useFetchMovieDetailsQuery(id);

  let content;
  if (isLoading) {
    content = <ReactIcon src={<ImSpinner className="spinner" />} color="#86a69d" />
  } else if (error) {
    content = 'An error occurred while trying to get movie details.';
  } else {
    const genres = data.genres.map((genre) => genre.name);
    const spokenLanguages = data.spoken_languages.map((language) => language.english_name);
    const productionCompanies = data.production_companies.map((company) => company.name);

    content = (
      <>
        <div className="movie-info__img-button">
          <img className="movie-info__img"
            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt={data.title} />
          <button className="button">+ Add to watchlist</button>
        </div>
        <div className="movie-info__text">
          <h1 className="movie-info__title">{data.title}</h1>
          <div className="movie-info__table">
            <p className="movie-info__detail-name">Average vote</p>
            <p className="movie-info__detail-value">{data.vote_average}</p>
            <p className="movie-info__detail-name">Vote count</p>
            <p className="movie-info__detail-value">{data.vote_count}</p>
            <p className="movie-info__detail-name">Release date</p>
            <p className="movie-info__detail-value">{data.release_date}</p>
            <p className="movie-info__detail-name">Genres</p>
            <p className="movie-info__detail-value">{genres.join(', ')}</p>
            <p className="movie-info__detail-name">Spoken languages</p>
            <p className="movie-info__detail-value">{spokenLanguages.join(', ')}</p>
            <p className="movie-info__detail-name">Production companies</p>
            <p className="movie-info__detail-value">{productionCompanies.join(', ')}</p>
            <p className="movie-info__detail-name">Homepage</p>
            <a className="movie-info__detail-value" href={data.homepage} target="_blank" rel="noreferrer">
              {data.homepage}
            </a>
            <p className="movie-info__detail-name">Overview</p>
            <p className="movie-info__detail-value movie-info__detail-value_overview">{data.overview}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className={`movie-info ${isLoading && 'movie-info_loading'}`}>
      {content}
    </div>
  );
}

export default MovieInfo;
