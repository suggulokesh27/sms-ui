import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./ContentSidebar.css";
import { FaMinus, FaPlus } from "react-icons/fa";
import {useMediaQuery} from "react-responsive";
import { useDispatch } from "react-redux";
import { toggleContentSideBar, toggleSideBar } from "../Store/SidebarToggleSlice";

const ContentSideBar = ({navItems}) => {

  const [showItem, setShowItem] = useState(null);
  const isTablet = useMediaQuery({maxWidth:950});
  const isMobile = useMediaQuery({minWidth:350})

  const dispatch = useDispatch();

  const showHandler = (index) => {
    setShowItem(index === showItem ? null : index);
  };


  
  const hideContentBar = () => {
    if(isTablet && isMobile){
      dispatch(toggleContentSideBar(false))
      dispatch(toggleSideBar(false))
    }
    if(isTablet){
      dispatch(toggleContentSideBar(false))
    }
  }

  const hideSideBarRef = useRef(null);

  // const handleClickOutside = (event) => {
  //     // console.log("outer side", hideSideBarRef)
  //     if (hideSideBarRef.current && !hideSideBarRef.current.contains(event.target)) {
  //         // console.log("inside", hideSideBarRef.current)
  //     dispatch(toggleContentSideBar(false))
  //     // console.log("inside 2", event.target)
  //   }
  // };


  // useEffect(() => {
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);


  return (
    <div className="sidebar-details"
    role="button"
    // ref={hideSideBarRef}
    >
    <ul className="sidedetails-ul">
      {navItems?.map((item, index) => (
        <div key={index}>
          <li onClick={() => showHandler(index)}>
            {item.name} {showItem === index ? <FaMinus /> : <FaPlus />}
          </li>
          {showItem === index && item.items && (
            <ul>
              {item.items.map((subItem, subIndex) => (
                  <Link key={subIndex} to={subItem.to} onClick={hideContentBar}>
                  {subItem.name}
                  </Link>
              ))}
            </ul>
          )}
        </div>
      ))}
    </ul>
    </div>
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

