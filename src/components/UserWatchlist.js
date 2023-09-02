import { useFetchUserListQuery } from '../store';
import MoviesListItem from './MoviesListItem';
import ReactIcon from './ReactIcon';
import { ImSpinner } from 'react-icons/im';

function UserWatchlist({ url, type, title }) {
  const { data, error, isLoading } = useFetchUserListQuery(url);

  let content;
  if (isLoading) {
    content = <ReactIcon src={<ImSpinner className="spinner" />} color="#86a69d" />;
  } else if (error) {
    content = <p className="no-results">
      {`An error occurred while trying to get ${type}s ${title.charAt(0).toLowerCase()}${title.splice(1)}.`}
    </p>;
  } else {
    content = data.map((item) => {
      console.log(type, item.id);
      return <MoviesListItem key={item.movieId} id={item.movieId} type={type} poster={item.poster}
        title={item.title} vote={Number((item.vote).toFixed(1))} releaseDate={item.releaseDate}
        dbId={item.id} removeButton />
    });
  }

  return (
    <div className="user-list">
      <h2 className="user-list__title">{title}</h2>
      <div className="user-list__items">
        {content}
        {(!isLoading && !error && content.length === 0) &&
          <p className="no-results">{`There are no ${type}s in your watchlist.`}</p>}
      </div>
    </div>
  );
}

export default UserWatchlist;
