import React from "react";
// import ContentSideBar from "../../Component/ContentSideBar";
// import { useSelector } from "react-redux";
import "./Student.css";
import { Outlet } from "react-router-dom";



// const navItems = [
//   {
//     name: 'Students Information',
//     icon: "icons",
//     items: [
//       { name: "add", to: "add" },
//       { name: "view", to: "view" },
//       { name: "update", to: "update" }
//     ]
//   },
//   {
//     name: 'Record',
//     icon: "icons",
//     to: "/record"
//   },
//   {
//     name: 'Attendance',
//     icon: "icons",
//     to: "/attendance"
//   }
// ];  


const Student = () => {

  // const contentSideBar = useSelector(state => state.SidebarToggleSlice.contentSideBar);

  return (
    <div className="d-flex flew-row" style={{
      width: "100%",
      height: "100%"
    }}>      
      <Outlet />
    </div>
  )
}

export default React.memo(Student);
