import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../UI/Component/ContentSidebar.css";
import { FaMinus, FaPlus } from "react-icons/fa";

const ContentSideBar = ({navItems}) => {
  
  const [showItem, setShowItem] = useState(null);

  const showHandler = (index) => {
    setShowItem(index === showItem ? null : index);
  };

  return (
    <ul className="sidedetails-ul" style={{ paddingLeft: "0px" }}>
      {navItems?.map((item, index) => (
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





// const NavLink = ({ item }) => {
//   const { name, to } = item;
//   return (
//     <li>
//       <Link to={to}>
//         {name}
//       </Link>
//     </li>
//   );
// };

// const NavItemFun = ({ items }) => {
//   return (
//     <ul>
//       {items.map((item, index) => (
//         <li key={index}>
//           {item.name}
//           {item.items && <NavItemFun items={item.items} />}
//         </li>
//       ))}
//     </ul>
//   );
// };

