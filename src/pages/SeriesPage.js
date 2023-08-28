import PopularSeriesList from '../components/PopularSeriesList';
import MoviesList from '../components/MoviesList';

function SeriesPage() {
  return (
    <div>
      <PopularSeriesList />
      <MoviesList url="/3/tv/top_rated" title="Top rated" series />
      <MoviesList url="/3/tv/on_the_air" title="On the air" series />
    </div>
  );
}

export default SeriesPage;
