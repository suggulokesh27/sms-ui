import React, { Suspense } from "react";
import ContentSideBar from "../../Component/ContentSideBar";
import { useSelector } from "react-redux";
import "../../UI/View/StudentUi/Student.css";
import { Outlet, Route, Routes } from "react-router-dom";
import StudentRegForm from "./StudentRegForm";
import routes from "../../routes";
import Content from "../../Component/Content";

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
    <div className="d-flex flew-row" style={{
      width: "100%",
      height: "100%"
    }}>
      
         <ContentSideBar navItems={navItems} />
      
      <div className="student-container">
        <div className="body">
         <Outlet />
        </div>
      </div>
    </div>
  )
}

export default React.memo(Student);
