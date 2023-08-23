import { useSelector } from 'react-redux';

function Route({ path, children }) {
  const currentPath = useSelector((state) => {
    console.log(state);
    return state.mainReducer.currentPath;
  });

  if (path === currentPath) {
    return children;
  }

  return;
}

export default Route;
