import { useFetchMoviesQuery } from '../store';
import MoviesListItem from './MoviesListItem';
import ReactIcon from './ReactIcon';
import ImageButton from './ImageButton';
import { ImSpinner } from 'react-icons/im';
import { BiSolidUpArrow, BiSolidDownArrow } from 'react-icons/bi';
import Dropdown from './Dropdown';
import { useState } from 'react';

function MoviesList({ url, title }) {
  const [sort, setSort] = useState(0);
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useFetchMoviesQuery({ url, page });

  let content;
  if (isLoading) {
    content = <ReactIcon src={<ImSpinner className="spinner" />} color="#86a69d" />;
  } else if (error) {
    content = 'An error occurred while trying to get movies.';
  } else {
    content = data.results.map((movie) => {
      return <MoviesListItem key={movie.id}
        poster={movie.poster_path} title={movie.title}
        vote={movie.vote_average} releaseDate={movie.release_date} />;
    });

    if (sort === 1) {
      content.sort((a, b) => {
        const date1 = new Date(a.props.releaseDate).getTime();
        const date2 = new Date(b.props.releaseDate).getTime();

        return date2 - date1;
      });
    } else if (sort === 2) {
      content.sort((a, b) => {
        const date1 = new Date(a.props.releaseDate).getTime();
        const date2 = new Date(b.props.releaseDate).getTime();

        return date1 - date2;
      });
    }
  }

  const dropdownOptions = [
    {
      label: 'Page 1',
      value: 1
    },
    {
      label: 'Page 2',
      value: 2
    },
    {
      label: 'Page 3',
      value: 3
    },
  ];

  const handleClick = () => {
    setSort((sort === 2) ? 0 : sort + 1);
  }

  return (
    <div className="movies">
      <div className="movies__header">
        <h2 className="movies__list-title">{title}</h2>
        <div className="movies__sort" onClick={handleClick}>
          <p className="movies__sort-text">Release date</p>
          <div>
            {(sort === 2 || sort === 0) && <ImageButton>
              <ReactIcon src={<BiSolidUpArrow className="image-button__img" />} color="#86a69d" />
            </ImageButton>}
            {(sort === 1 || sort === 0) && <ImageButton>
              <ReactIcon src={<BiSolidDownArrow className="image-button__img" />} color="#86a69d" />
            </ImageButton>}
          </div>
        </div>
        <Dropdown options={dropdownOptions} value={page} onChange={(value) => setPage(value)} />
      </div>

      <div className="movies__items">
        {content}
      </div>
    </div>
  );
}

export default MoviesList;
