import React from "react";
import Header from "../Component/Header";
import SideBar from "../Component/SideBar";
import ContentSideBar from "../Component/ContentSideBar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Dashboard from "../View/Dashboard";


const DefaultLayout = () => {

    const sideBar = useSelector(state => state.SidebarToggleSlice.sideBar);

    return (
        <>
        <Header />
        <div className="d-flex flex-row">
            {
                sideBar && <SideBar />
            }
        <Outlet />
        </div>
        
    </>
    )
}

export default DefaultLayout;




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