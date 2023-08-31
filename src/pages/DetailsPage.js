import MovieInfo from '../components/MovieInfo';
import MovieCast from '../components/MovieCast';
import { useSelector } from 'react-redux';
import SerieInfo from '../components/SerieInfo';
import SerieCast from '../components/SerieCast';
import BookInfo from '../components/BookInfo';

function DetailsPage() {
  const type = useSelector((state) => state.navigationReducer.openedMovieBookId.type)

  console.log(type);
  let content;
  switch (type) {
    case 'movie':
      content = <>
        <MovieInfo />
        <MovieCast />
      </>;
      break;
    case 'serie':
      content = <>
        <SerieInfo />
        <SerieCast />
      </>;
      break;
    case 'book':
      content = <BookInfo />;
      break;
    default:
  }

  return (
    <div>
      {content}
    </div>
  );
}

export default DetailsPage;
