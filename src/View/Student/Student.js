import React, { Suspense } from "react";
import ContentSideBar from "../../Component/ContentSideBar";
import { useSelector } from "react-redux";
import "../../UI/View/StudentUi/Student.css";
import { Outlet, Route, Routes } from "react-router-dom";
import StudentRegForm from "./StudentRegForm";
import routes from "../../routes";
import Content from "../../Component/Content";

import SampleForm from "./SampleForm";

const navItems = [
  {
    name: 'Students Information',
    icon: "icons",
    items: [
      { name: "add", to: "add" },
      { name: "view", to: "/view" },
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


const Student = () => {

  const contentSideBar = useSelector(state => state.SidebarToggleSlice.contentSideBar);

  return (
    <div className="mainContainer">
      <div className="contentSidebar">
        <ContentSideBar navItems={navItems} />
      </div>
      <div className="mainOutlet">
        {/* <Outlet /> */}
        <SampleForm />
      </div>
    </div>
  )
}

export default React.memo(Student);


// <div className="d-flex flew-row" style={{
    //   width: "100%",
    //   height: "80%"
    // }}>
      
    //      <ContentSideBar navItems={navItems} />
      
    //   <div className="student-container">
    //     <div className="body">
    //      <Outlet />
    //     </div>
    //   </div>
    // </div>