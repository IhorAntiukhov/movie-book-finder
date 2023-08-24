import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPath } from './store'
import Sidebar from './components/Sidebar';
import Route from './components/Route';
import MoviesPage from './pages/MoviesPage';
import SeriesPage from './pages/SeriesPage';
import BooksPage from './pages/BooksPage';
import UserProfilePage from './pages/UserProfilePage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handler = () => {
      dispatch(setCurrentPath(window.location.pathname));
    };
    window.addEventListener('popstate', handler);

    return () => {
      window.removeEventListener('popstate', handler);
    }
  }, [dispatch]);

  return (
    <div className="content">
      <Sidebar />
      <div className="main">
        <Route path="/">
          <MoviesPage />
        </Route>
        <Route path="/series">
          <SeriesPage />
        </Route>
        <Route path="/books">
          <BooksPage />
        </Route>
        <Route path="/userProfile">
          <UserProfilePage />
        </Route>
      </div>
    </div>
  );
}

export default App;
