import useNavigateToMoviePage from '../hooks/use-navigate-to-movie-page';
import ReactIcon from './ReactIcon';
import { BiSolidStar } from 'react-icons/bi';

function BooksListItem({ id, cover, authors, title, subtitle, description, vote, releaseDate }) {
  return (
    <div className="book">
      <div className="book__img-authors">
        <img className="book__img" src={cover} alt={title}
          onClick={useNavigateToMoviePage('book', id)} />
        <p className="book__authors">{authors}</p>
      </div>
      <div className="book__text">
        <div className="book__name">
          <p className="book__title">{title}</p>
          <p className="book__subtitle">{subtitle}</p>
        </div>

        <p className="book__description">{description}</p>

        <div className="book__date-vote">
          <div className="vote">
            <ReactIcon src={<BiSolidStar className="vote__img" />} color="#d4d420" />
            <p className="vote__text">{vote}</p>
          </div>
          <p className="book__date">{releaseDate}</p>
        </div>
      </div>
    </div>
  );
}

export default BooksListItem;
