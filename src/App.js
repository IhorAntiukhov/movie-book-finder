import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPath } from './store';
import Route from './components/Route';
import MoviesPage from './pages/MoviesPage';
import SeriesPage from './pages/SeriesPage';

function App() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => {
        window.history.pushState({}, '', '/series');
        dispatch(setCurrentPath('/series'));
      }}>Go to series</button>
      <Route path="/">
        <MoviesPage />
      </Route>
      <Route path="/series">
        <SeriesPage />
      </Route>
    </div>
  );
}

export default App;
