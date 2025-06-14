import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavList.css";

const menuItems = [
  {
    title: "Electronics",
    items: ["Mobiles", "Laptops", "Cameras", "Tablets"],
  },
  {
    title: "TVs & Appliances",
    items: ["Smart TVs", "Refrigerators", "Washing Machines", "Microwaves"],
  },
  {
    title: "Men",
    items: ["T-Shirts", "Shirts", "Jeans", "Shoes"],
  },
  {
    title: "Women",
    items: ["Tops", "Dresses", "Jewelry", "Handbags"],
  },
  {
    title: "Baby & Kids",
    items: ["Clothing", "Toys", "School Supplies", "Footwear"],
  },
  {
    title: "Home & Furniture",
    items: ["Beds", "Sofas", "Dining", "Curtains"],
  },
  {
    title: "Sports, Books & More",
    items: ["Books", "Fitness Equipment", "Stationery", "Music"],
  },
  {
    title: "Flights",
    items: [],
  },
  {
    title: "Offer Zone",
    items: [],
  },
];

const NavList = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <nav className="navbar">
      {menuItems.map((menu, index) => {
        const path = menu.title.toLowerCase().replace(/ & | /g, "-");
        return (
          <div
            key={index}
            className="nav-item"
            onMouseEnter={() => setActiveMenu(index)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link to={`/${path}`}>
              <img
                src={`/images/icons/${path}.png`}
                alt={menu.title}
                className="nav-icon"
              />
              <div className="nav-title">{menu.title}</div>
            </Link>

            {menu.items.length > 0 && activeMenu === index && (
              <div className="dropdown">
                {menu.items.map((item, idx) => (
                  <Link
                    key={idx}
                    to={`/${path}/${item.toLowerCase().replace(/ /g, "-")}`}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default NavList;
