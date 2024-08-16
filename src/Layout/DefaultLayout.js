import React, { useEffect, useRef } from "react";
import Header from "../Component/Header";
import SideBar from "../Component/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
// import Dashboard from "../View/Dashboard/Dashboard";
import ContentSideBar from "../Component/ContentSideBar";
import "../View/Student/Student.css"
import Footer from "../Component/Footer";
import "./DefaultLayout.css"
import { toggleContentSideBar, toggleSideBar } from "../Store/SidebarToggleSlice";
const navItems = [
    {
        name: 'Students Information',
        icon: "icons",
        items: [
            { name: "add", to: "add" },
            { name: "view", to: "view" },
            { name: "update", to: "update" }
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
const DefaultLayout = () => {
    const sideBar = useSelector(state => state.SidebarToggleSlice.sideBar);
    const contentSideBar = useSelector(state => state.SidebarToggleSlice.contentSideBar);
    const contentSidebarItems = useSelector(state => state.SidebarToggleSlice.items);
  
   
    return (
      <div>
        <Header />
        <div className="flex-layout">
          <div className="flex-layout">
            {sideBar && <SideBar />}
            {sideBar && contentSideBar && <ContentSideBar navItems={contentSidebarItems} />}
          </div>
          <div className="layout-outer" >
            <div className="layout-inner hide-scrollbar">
              <Outlet />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  };

export default DefaultLayout;

{/* <div className="d-flex flex-row sidebarOutlet">
                {
                    sideBar && <SideBar />
                }
                {sideBar && contentSideBar && <ContentSideBar navItems={contentSidebarItems} />}
                <div className="layout-outer">
                    <div className="layout-inner hide-scrollbar">
                        <Outlet />
                        <Footer />
                    </div>
                </div>
            </div> */}


// <>
// <Header />
// <div className='d-flex flex-col'>
// {sideBar && (
//     < >
//         <SideBar />
//         {contentSideBar && <ContentSideBar />}
//     </>
// )}
// {/* <Dashboard /> */}
// <Outlet />
// </div>

// </>