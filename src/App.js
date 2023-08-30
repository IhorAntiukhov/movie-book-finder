import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPath } from './store'
import Sidebar from './components/Sidebar';
import Route from './components/Route';
import MoviesPage from './pages/MoviesPage';
import SeriesPage from './pages/SeriesPage';
import UserProfilePage from './pages/UserProfilePage';
import MovieDetailsPage from './pages/MovieDetailsPage';

function App() {
  const dispatch = useDispatch();

  const { currentPath, isSearchMenuOpen } = useSelector((state) => (
    {
      currentPath: state.mainReducer.currentPath,
      isSearchMenuOpen: state.mainReducer.isSearchMenuOpen
    }
  ));

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
      <div className={`shade-area ${(isSearchMenuOpen === 1) ? 'shade-area_hide' :
        (isSearchMenuOpen === 2) ? 'shade-area_show' : ''}`}></div>
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
        <Route path="/movieDetails">
          <MovieDetailsPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
