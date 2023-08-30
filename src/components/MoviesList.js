import { useFetchMoviesQuery } from '../store';
import MoviesListItem from './MoviesListItem';
import ReactIcon from './ReactIcon';
import ImageButton from './ImageButton';
import { ImSpinner } from 'react-icons/im';
import { BiSolidUpArrow, BiSolidDownArrow } from 'react-icons/bi';
import Dropdown from './Dropdown';
import { useState } from 'react';
import useSortList from '../hooks/use-sort-list.js';

function MoviesList({ url, title, series }) {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useFetchMoviesQuery({ url, page });
  const { sortParams, sortByDate, setSortOrderByDate } = useSortList();

  let content;
  if (isLoading) {
    content = <ReactIcon src={<ImSpinner className="spinner" />} color="#86a69d" />;
  } else if (error) {
    content = `An error occurred while trying to get ${(series) ? 'series' : 'movies'}.`;
  } else {
    content = data.results.map((movie) => {
      return <MoviesListItem key={movie.id}
        poster={movie.poster_path} title={(series) ? movie.name : movie.title}
        vote={movie.vote_average} releaseDate={(series) ? movie.first_air_date : movie.release_date} />;
    });

    content = sortByDate(content);
  }

  const dropdownOptions = [
    { label: 'Page 1', value: 1 },
    { label: 'Page 2', value: 2 },
    { label: 'Page 3', value: 3 },
  ];

  return (
    <div className="movies">
      <div className="movies__header">
        <h2 className="movies__list-title">{title}</h2>
        <div className="movies__sort" onClick={setSortOrderByDate}>
          <p className="movies__sort-text">Release date</p>
          <div>
            {(sortParams.order === 2 || sortParams.order === 0) && <ImageButton>
              <ReactIcon src={<BiSolidUpArrow className="image-button__img" />} color="#86a69d" />
            </ImageButton>}
            {(sortParams.order === 1 || sortParams.order === 0) && <ImageButton>
              <ReactIcon src={<BiSolidDownArrow className="image-button__img" />} color="#86a69d" />
            </ImageButton>}
          </div>
        </div>
        <Dropdown options={dropdownOptions} value={page} onChange={(value) => setPage(value)} />
      </div>

      <div className={`movies__items ${isLoading && 'movies__items_loading'}`}>
        {content}
      </div>
    </div>
  );
}

export default MoviesList;
