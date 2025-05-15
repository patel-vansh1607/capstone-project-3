import React from 'react';
import '../styles/NavList.css';

const menuData = {
  departments: {
    left: [
      'Pharmacy, Health & Wellness',
      'Clothing, Shoes, & Accessories',
      'Baby & Kids',
      'Beauty',
      'Home, Garden & Tools',
      'Tech & Electronics',
      'Gaming & Entertainment',
      'Toys & Outdoor Play',
      'Paper & Cleaning',
      'Grocery',
    ],
    right: [
      'All Clothing, Shoes, & Accessories',
      'New Arrivals',
      "Editors' Picks",
      'Women',
      "Women's Plus",
      'Men',
      'Young Adult',
      'Tween',
      'Kids',
    ],
  },
  services: {
    left: ['Walmart+', 'Money Services', 'Health Services', 'Auto Care Center'],
    right: ['Pharmacy', 'Vision Center', 'Photo Center', 'Tech Services'],
  },
};

const DropdownMenu = ({ type }) => {
  const { left, right } = menuData[type];

  return (
    <div className="dropdown-menu">
      <div className="dropdown-column left">
        {left.map((item, index) => (
          <div key={index} className="dropdown-item">
            {item}
          </div>
        ))}
      </div>
      <div className="dropdown-column right">
        {right.map((item, index) => (
          <div key={index} className="dropdown-item subitem">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
