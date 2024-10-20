import React from 'react';
import styles from './layout.module.css';  // Importing CSS module

import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Sidebar from '../Components/Sidebar/Sidebar';
import SidebarContent from '../Components/SidebarContent/SidebarContent';
import { useSelector } from 'react-redux';
import { sidebarData } from '../Store/Slices/sidebarToggleSlice';

const Layout = () => {
  const { showSidebarContent, showSidebar } = useSelector(sidebarData);

  return (
    <div>
      <Header />
      <div className={styles.sidebarWraper}>
        <aside className={styles.sidebar}>
          {showSidebar && <Sidebar />}
          {showSidebarContent && showSidebar && <SidebarContent />}
        </aside>
        <main className={styles.mainContent}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
