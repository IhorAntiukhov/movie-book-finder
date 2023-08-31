import { useDispatch } from 'react-redux';
import { setOpenedMovieBookId } from '../store';

function useNavigateToMoviePage(type, id) {
  const dispatch = useDispatch();

  const navigate = () => {
    window.history.pushState({}, '', '/details');
    dispatch(setOpenedMovieBookId({ type, id }));
  }

  return navigate;
}

export default useNavigateToMoviePage;
