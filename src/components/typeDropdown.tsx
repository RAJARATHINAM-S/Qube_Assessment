import React, { useState, useRef, useEffect } from 'react';

const TypeDropdown = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    album: false,
    ep: false,
    single: false,
  });
  const dropdownRef = useRef(null);

  // Handle outside click to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (type) => {
    const updatedFilters = {
      ...filters,
      [type]: !filters[type],
    };
    setFilters(updatedFilters);

    // Pass the updated filters to parent component
    if (onFilterChange) {
      onFilterChange(updatedFilters);
    }
  };

  // Count active filters
  const activeFilterCount = Object.values(filters).filter(
    (value) => value
  ).length;

  return (
    <div className="type-dropdown" ref={dropdownRef}>
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        <span>
          Type {activeFilterCount > 0 ? `• ${activeFilterCount}` : ''}
        </span>
        {/* <img src={downIcon}/> */}
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <div className="filter-group">
            <label className="filter-item">
              <input
                type="checkbox"
                checked={filters.album}
                onChange={() => handleCheckboxChange('album')}
              />
              <span>Album</span>
            </label>
            <label className="filter-item">
              <input
                type="checkbox"
                checked={filters.ep}
                onChange={() => handleCheckboxChange('ep')}
              />
              <span>EP</span>
            </label>
            <label className="filter-item">
              <input
                type="checkbox"
                checked={filters.single}
                onChange={() => handleCheckboxChange('single')}
              />
              <span>Single</span>
            </label>
          </div>

          <div className="filter-actions">
            <div className="filter-text">
              Type • {activeFilterCount}{' '}
              {activeFilterCount === 1 ? 'Filter' : 'Filters'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TypeDropdown;
