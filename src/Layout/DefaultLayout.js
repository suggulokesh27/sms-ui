import React from "react";
import Header from "../Component/Header";
import SideBar from "../Component/SideBar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
// import Dashboard from "../View/Dashboard/Dashboard";
import ContentSideBar from "../Component/ContentSideBar";
import "../View/Student/Student.css"

// const navItems = [
//     {
//         name: 'Students Information',
//         icon: "icons",
//         items: [
//             { name: "add", to: "add" },
//             { name: "view", to: "view" },
//             { name: "update", to: "update" }
//         ]
//     },
//     {
//         name: 'Record',
//         icon: "icons",
//         to: "/record"
//     },
//     {
//         name: 'Attendance',
//         icon: "icons",
//         to: "/attendance"
//     }
// ];

const DefaultLayout = () => {

    const sideBar = useSelector(state => state.SidebarToggleSlice.sideBar);
    const contentSideBar = useSelector(state => state.SidebarToggleSlice.contentSideBar);
    const contentSidebarItems = useSelector(state => state.SidebarToggleSlice.items);

    return (
        <>
            <Header />
            <div className="d-flex flex-row sidebarOutlet">
                {
                    sideBar && <SideBar />
                }
                {sideBar && contentSideBar && <ContentSideBar navItems={contentSidebarItems} />}
                <div className="d-flex flew-row" style={{
                    width: "100%",
                    height: "100%"
                }}>
                    <div className="student-container">
                        <div className="body">
                            <Outlet />
                        </div>
                    </div>
                </div>
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