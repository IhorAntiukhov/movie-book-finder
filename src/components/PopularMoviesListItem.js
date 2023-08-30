import ReactIcon from './ReactIcon';
import { BiSolidStar } from 'react-icons/bi';

function PopularMoviesListItem({ poster, title, description, vote }) {
  return (
    <div className="movie">
      <img className="movie__img" src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={title} />
      <div className="movie__text">
        <div className="movie__title-vote">
          <p className="movie__title">{title}</p>
          <div className="vote">
            <ReactIcon src={<BiSolidStar className="vote__img" />} color="#d4d420" />
            <p className="vote__text">{vote}</p>
          </div>
        </div>
        <p className="movie__description">{description}</p>
      </div>
    </div>
  );
}

export default PopularMoviesListItem;
