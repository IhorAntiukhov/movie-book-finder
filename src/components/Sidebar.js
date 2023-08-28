import { useDispatch } from 'react-redux';
import { setCurrentPath } from '../store';
import NavigationButton from './NavigationButton';
import {
  BiSolidSearchAlt2,
  BiSolidMoviePlay,
  BiSolidCameraMovie,
  BiSolidUserCircle
} from 'react-icons/bi'
import ImageButton from './ImageButton';
import SearchMenu from './SearchMenu';

function Sidebar() {
  const dispatch = useDispatch();

  const navigateToPage = (path) => {
    window.history.pushState({}, '', path);
    dispatch(setCurrentPath(path));
  }

  return (
    <div className="sidebar">
      <ImageButton
        onClick={() => { }} title="Search">
        <BiSolidSearchAlt2 className="image-button__img" />
      </ImageButton>

      <div>
        <NavigationButton
          onClick={() => { navigateToPage('/') }} title="Movies" path="/">
          <BiSolidCameraMovie className="image-button__img" />
        </NavigationButton>

        <NavigationButton
          onClick={() => { navigateToPage('/series') }} title="Series" path="/series">
          <BiSolidMoviePlay className="image-button__img" />
        </NavigationButton>
      </div>

      <NavigationButton
        onClick={() => { navigateToPage('/userProfile') }} title="User profile" path="/userProfile">
        <BiSolidUserCircle className="image-button__img" />
      </NavigationButton>
    </div>
  );
}

export default Sidebar;
