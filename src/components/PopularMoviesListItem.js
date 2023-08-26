import ReactIcon from './ReactIcon';
import { BiSolidStar } from 'react-icons/bi';

function PopularMoviesListItem({ poster, title, description, vote }) {
  return (
    <div className="top-movies__item">
      <img className="top-movies__img" src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={title} />
      <div className="top-movies__text">
        <div className="top-movies__title-vote">
          <p className="top-movies__title">{title}</p>
          <div className="vote">
            <ReactIcon src={<BiSolidStar className="vote__img" />} color="#d4d420" />
            <p className="vote__text">{vote}</p>
          </div>
        </div>
        <p className="top-movies__description">{description}</p>
      </div>
    </div>
  );
}

export default PopularMoviesListItem;
