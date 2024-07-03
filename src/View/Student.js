import React from "react";
import ContentSideBar from "../Component/ContentSideBar";
import { useSelector } from "react-redux";



const navItems = [
    {
      name: 'Forms',
      icon: "icons",
      to: "/record",
      items: [
        { name: "add", to: "/add" },
        { name: "delete", to: "/delete" },
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

    return(
        <div className="d-flex flew-row">
            {
                contentSideBar && <ContentSideBar navItems = {navItems} />
            }
            Student
        </div>
    )
}

export default React.memo(Student);
