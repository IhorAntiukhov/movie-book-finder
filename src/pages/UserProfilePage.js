import UserInfo from '../components/UserInfo';
import UserWatchlist from '../components/UserWatchlist';

function UserProfilePage() {
  return (
    <div>
      <UserInfo />
      <UserWatchlist url="/moviesList" type="movie" title="Movies watchlist" />
      <UserWatchlist url="/seriesList" type="serie" title="Series watchlist" />
      <UserWatchlist url="/booksList" type="book" title="Books reading list" />
    </div>
  );
}

export default UserProfilePage;
