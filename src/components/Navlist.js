import React, { useState } from "react";
import "../styles/NavList.css";

const menuItems = [
  {
    title: "Electronics",
    items: ["Mobiles", "Laptops", "Cameras", "Accessories"],
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

const Navlist = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <nav className="navbar">
      {menuItems.map((menu, index) => (
        <div
          key={index}
          className="nav-item"
          onMouseEnter={() => setActiveMenu(index)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <a href={`/${menu.title.toLowerCase().replace(/ & | /g, "-")}`}>{menu.title}</a>
          {menu.items.length > 0 && activeMenu === index && (
            <div className="dropdown">
              {menu.items.map((item, idx) => (
                <a
                  key={idx}
                  href={`/${menu.title.toLowerCase().replace(/ & | /g, "-")}/${item.toLowerCase().replace(/ /g, "-")}`}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navlist;
