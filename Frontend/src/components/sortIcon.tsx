import React from 'react';
import {
  sortAsceIcon,
  sortDescIcon,
  sortIcon,
  upIcon,
} from '../utils/imagePath';

interface SortIconProps {
  sortOrder?: number; // Sorting order: 1 (descending), -1 (ascending), or undefined (unsorted)
}

const SortIcon: React.FC<SortIconProps> = ({ sortOrder }) => {
  if (sortOrder === 1) {
    return <img src={sortAsceIcon} alt="ascending" className="sort-icon"></img>;
  } else if (sortOrder === -1) {
    return (
      <img src={sortDescIcon} alt="descending" className="sort-icon"></img>
    );
  } else {
    return <img src={sortIcon} alt="sort" className="sort-icon"></img>;
  }
};

export default SortIcon;
