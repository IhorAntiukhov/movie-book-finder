import { useState } from 'react';

function useSortList() {
  const [sortOrder, setSortOrder] = useState(0);

  const sort = (content) => {
    const sortedContent = [...content];

    if (sortOrder === 1) {
      sortedContent.sort((a, b) => {
        const date1 = new Date(a.props.releaseDate).getTime();
        const date2 = new Date(b.props.releaseDate).getTime();

        return date2 - date1;
      });
    } else if (sortOrder === 2) {
      sortedContent.sort((a, b) => {
        const date1 = new Date(a.props.releaseDate).getTime();
        const date2 = new Date(b.props.releaseDate).getTime();

        return date1 - date2;
      });
    }

    return sortedContent;
  }

  return { sortOrder, setSortOrder, sort };
}

export default useSortList;
