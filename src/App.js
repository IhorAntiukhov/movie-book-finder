import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPath } from './store'
import Sidebar from './components/Sidebar';
import Route from './components/Route';
import MoviesPage from './pages/MoviesPage';
import SeriesPage from './pages/SeriesPage';
import UserProfilePage from './pages/UserProfilePage';

function App() {
  const dispatch = useDispatch();

  const currentPath = useSelector((state) => state.mainReducer.currentPath);

  useEffect(() => {
    if (window.location.pathname !== currentPath) {
      dispatch(setCurrentPath(window.location.pathname));
    }
  }, []);

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
        <Route path="/userProfile">
          <UserProfilePage />
        </Route>
      </div>
    </div>
  );
}

export default App;
