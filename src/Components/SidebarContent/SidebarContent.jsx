import React, { useState } from 'react';
import styles from './sidebarcontent.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { sidebarData } from '../../Store/Slices/sidebarToggleSlice';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SidebarContent = () => {
  const dispatch = useDispatch();
  const [showItem, setShowItem] = useState(null);
  const { sidebarList, showSidebarContent, toggleSidebarContent } = useSelector(sidebarData);

  const showHandler = (index) => {
    setShowItem(showItem === index ? null : index);
  };

  return (
    <ol className={`${styles.SidebarContent} ${showSidebarContent ? styles.show : styles.hide}`}>
      {sidebarList.map((data, index) => (
        <div key={data.name}>
          <li onClick={() => showHandler(index)}>
            {data.name} {showItem === index ? <FaMinus /> : <FaPlus />}
          </li>

          {showItem === index && data.items && (
            <ul className={styles.sublist}>
              {data.items.map((subItem) => (
                <li key={subItem.name}>
                  <Link to={subItem.to} onClick={() => dispatch(toggleSidebarContent(false))}>{subItem.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </ol>
  );
};

export default SidebarContent;
