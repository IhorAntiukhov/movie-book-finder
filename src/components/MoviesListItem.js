import { BiSolidStar } from 'react-icons/bi';
import ReactIcon from './ReactIcon';
import useNavigateToMoviePage from '../hooks/use-navigate-to-movie-page';

function MoviesListItem({ id, type, poster, title, vote, releaseDate }) {
  return (
    <div className="movies__item" onClick={useNavigateToMoviePage(type, id)}>
      <img className="movies__img" src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={title} />
      <p className="movies__title">{title}</p>
      <div className="movies__date-vote">
        <div className="vote">
          <ReactIcon src={<BiSolidStar className="vote__img" />} color="#d4d420" />
          <p className="vote__text">{vote}</p>
        </div>
        <p className="movies__date">{releaseDate}</p>
      </div>
    </div>
  )
}

export default MoviesListItem;
