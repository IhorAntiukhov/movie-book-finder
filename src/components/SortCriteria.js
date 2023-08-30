import ImageButton from './ImageButton';
import ReactIcon from './ReactIcon';
import { BiSolidUpArrow, BiSolidDownArrow } from 'react-icons/bi';

function SortCriteria({ sortParams, onSort, title, criteria }) {
  console.log(sortParams);

  return (
    <div className="search-list__sort-criteria" onClick={onSort}>
      <p className="movies__sort-text">{title}</p>
      <div>
        {(sortParams.order === 2 || sortParams.order === 0 || sortParams.criteria !== criteria)
          && <ImageButton>
            <ReactIcon src={<BiSolidUpArrow className="image-button__img" />} color="#86a69d" />
          </ImageButton>}
        {(sortParams.order === 1 || sortParams.order === 0 || sortParams.criteria !== criteria)
          && <ImageButton>
            <ReactIcon src={<BiSolidDownArrow className="image-button__img" />} color="#86a69d" />
          </ImageButton>}
      </div>
    </div>
  );
}

export default SortCriteria;
