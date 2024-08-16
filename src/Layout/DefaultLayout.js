import React from "react";
import Header from "../Component/Header";
import SideBar from "../Component/SideBar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import ContentSideBar from "../Component/ContentSideBar";
import "../View/Student/Student.css"
const DefaultLayout = () => {

    const sideBar = useSelector(state => state.SidebarToggleSlice.sideBar);
    const contentSideBar = useSelector(state => state.SidebarToggleSlice.contentSideBar);
    const contentSidebarItems = useSelector(state => state.SidebarToggleSlice.items);

    return (
       <div className="layout">
            <Header />
            <div className="sidebarOutlet">
            { sideBar && <SideBar /> }
                {sideBar && contentSideBar && <ContentSideBar navItems={contentSidebarItems} />}
                <div className="mainContainer flex-column">
                    <div className="outlet">
                        <Outlet />
                    </div>
                </div> 
            </div>
       </div>
    )
}

export default DefaultLayout;







 