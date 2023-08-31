import { useSelector } from 'react-redux';
import { useFetchBookByIdQuery } from '../store';
import ReactIcon from './ReactIcon';
import { ImSpinner } from 'react-icons/im';

function BookInfo() {
  const id = useSelector((state) => state.navigationReducer.openedMovieBookId.id);
  const { data, error, isLoading } = useFetchBookByIdQuery(id);

  console.log(data);

  let content;
  if (isLoading) {
    content = <ReactIcon src={<ImSpinner className="spinner" />} color="#86a69d" />
  } else if (error) {
    content = 'An error occurred while trying to get book details.';
  } else {
    content = (
      <>
        <div className="movie-info__img-button">
          <img className="movie-info__img"
            src={data.volumeInfo.imageLinks.extraLarge} alt={data.volumeInfo.title} />
          <button className="button">+ Add to reading list</button>
        </div>
        <div className="movie-info__text">
          <h1 className="movie-info__title">{data.volumeInfo.title}</h1>
          <h2 className="movie-info__subtitle">{data.volumeInfo.subtitle}</h2>
          <div className="movie-info__table">
            <p className="movie-info__detail-name">Authors</p>
            <p className="movie-info__detail-value">{data.volumeInfo.authors.join(', ')}</p>
            <p className="movie-info__detail-name">Categories</p>
            <p className="movie-info__detail-value">
              {data.volumeInfo.categories || 'Not provided'}
            </p>
            <p className="movie-info__detail-name">Page count</p>
            <p className="movie-info__detail-value">{data.volumeInfo.pageCount}</p>
            <p className="movie-info__detail-name">Retail price</p>
            <p className="movie-info__detail-value">
              {`${data.saleInfo.retailPrice.amount} ${data.saleInfo.retailPrice.currencyCode}`}
            </p>
            <p className="movie-info__detail-name">Average vote</p>
            <p className="movie-info__detail-value">
              {data.volumeInfo.averageRating || 'Not provided'}
            </p>
            <p className="movie-info__detail-name">Maturity rating</p>
            <p className="movie-info__detail-value">{data.volumeInfo.maturityRating}</p>
            <p className="movie-info__detail-name">Published date</p>
            <p className="movie-info__detail-value">{data.volumeInfo.publishedDate}</p>
            <p className="movie-info__detail-name">Link</p>
            <a className="movie-info__detail-value"
              href={data.volumeInfo.canonicalVolumeLink} target="_blank" rel="noreferrer">
              {data.volumeInfo.canonicalVolumeLink}
            </a>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={`movie-info ${isLoading && 'movie-info_loading'}`}>
        {content}
      </div>
      {(!error && !isLoading) &&
        <div className="book-description">
          <h2 className="book-description__title">Description</h2>
          <p className="book-description__text"
            dangerouslySetInnerHTML={{ __html: data.volumeInfo.description }}></p>
        </div>}
    </>
  );
}

export default BookInfo;
