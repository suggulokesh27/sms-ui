import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../UI/Component/ContentSidebar.css";
import { FaMinus, FaPlus } from "react-icons/fa";

const navItems = [
  {
    name: 'Forms',
    icon: "icons",
    to: "/record",
    items: [
      { name: "add", to: "/add" },
      { name: "delete", to: "/delete" },
      { name: "update", to: "/update" }
    ]
  },
  {
    name: 'Record',
    icon: "icons",
    to: "/record"
  },
  {
    name: 'Attendance',
    icon: "icons",
    to: "/attendance"
  }
];

const NavLink = ({ item }) => {
  const { name, to } = item;
  return (
    <li>
      <Link to={to}>
        {name}
      </Link>
    </li>
  );
};

const NavItemFun = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item.name}
          {item.items && <NavItemFun items={item.items} />}
        </li>
      ))}
    </ul>
  );
};

const ContentSideBar = () => {
  const [showItem, setShowItem] = useState(null);

  const showHandler = (index) => {
    setShowItem(index === showItem ? null : index);
  };

  return (
    <ul className="sidedetails-ul" style={{ paddingLeft: "0px" }}>
      {navItems.map((item, index) => (
        <div key={index}>
          <li onClick={() => showHandler(index)}>
            {item.name} {showItem === index ? <FaMinus /> : <FaPlus />}
          </li>
          {showItem === index && item.items && (
            <ul>
              {item.items.map((subItem, subIndex) => (
                  <Link key={subIndex} to={subItem.to}>
                  {subItem.name}
                  </Link>
              ))}
            </ul>
          )}
        </div>
      ))}
    </ul>
  );
};

export default ContentSideBar;
