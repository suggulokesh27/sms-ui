import React from "react";
import ContentSideBar from "../../Component/ContentSideBar";
import { useSelector } from "react-redux";
import SidebarToggleSlice from "../../Store/SidebarToggleSlice";
import "../../View/Student/Student.css";
import { Outlet } from "react-router-dom";


// const navItems = [
//     {
//       name: 'Report Card',
//       icon: "icons",
//       items: [
//         { name: "view", to: "view" },
//         { name: "Generate", to: "generate" }
//       ]
//     },
//     {
//       name: 'Result Analysis',
//       icon: "icons",
//       to: "analysis"
//     },
//     {
//       name: 'Admit Card',
//       icon: "icons",
//       to: "admitCard"
//     }
//   ];
  

const Exam = () => {

    // const contentSideBar = useSelector(state => state.SidebarToggleSlice.contentSideBar);

    return(
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
    )
}


export default Exam;