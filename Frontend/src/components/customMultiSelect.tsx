import React, { useState, useEffect } from 'react';
import { downArrow } from '../utils/imagePath';

interface Option {
  label: string;
  value: string;
}

interface CustomMultiSelectProps {
  options: Option[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
}

const CustomMultiSelect: React.FC<CustomMultiSelectProps> = ({
  options,
  selectedValues,
  onChange,
  placeholder = 'Type',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionValue: string) => {
    const newSelected = [...selectedValues];
    const index = newSelected.indexOf(optionValue);

    if (index !== -1) {
      newSelected.splice(index, 1);
    } else {
      newSelected.push(optionValue);
    }

    onChange(newSelected);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Element;
      if (isOpen && !target.closest('.custom-multiselect-container')) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="custom-multiselect-container">
      <div
        className={`custom-multiselect-header ${selectedValues.length > 0 ? 'selected' : ''}`}
        onClick={toggleDropdown}
      >
        <div className="custom-multiselect-label">
          <span>
            {selectedValues.length > 0
              ? `${placeholder} (${selectedValues.length})`
              : placeholder}
          </span>
        </div>
        <div className="custom-multiselect-trigger">
          <img src={downArrow} alt="V" />
        </div>
      </div>

      {isOpen && (
        <div className="custom-dropdown-panel">
          <ul className="custom-multiselect-items">
            {options.map((option) => (
              <li
                key={option.value}
                className="custom-multiselect-item"
                onClick={() => handleOptionClick(option.value)}
              >
                <div
                  className={`custom-checkbox ${
                    selectedValues.includes(option.value) ? 'selected' : ''
                  }`}
                >
                  {selectedValues.includes(option.value) && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="#fff"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  )}
                </div>
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomMultiSelect;
