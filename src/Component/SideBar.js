import React from "react";
import { Link } from "react-router-dom";
import "../UI/Component/Sidebar.css";
import { PiStudentBold } from "react-icons/pi"
import { GiPapers } from "react-icons/gi";
import { ImBooks } from "react-icons/im";
import { FcCollaboration } from "react-icons/fc";
import { MdInsertDriveFile } from "react-icons/md";
import { MdOutlineAddToPhotos } from "react-icons/md";

const navItems = [{
    name: 'Student',
    icon: PiStudentBold,
    to: "/student"
},
{
    name: 'Exam',
    icon: GiPapers,
    to: "/teacher"
},
{
    name: 'Academics',
    icon: ImBooks,
    to: "/parent"
}, {
    name: "Hr",
    icon: FcCollaboration,
    to: "/ect"
},
{
    name: 'Collaborate',
    icon: MdInsertDriveFile,
    to: "/parent"
}, {
    name: 'Add-Ons',
    icon: MdOutlineAddToPhotos,
    to: "/parent"
},]

const SideBar = () => {
    return (
        <div className="sidebar-container">
            <div className="sidebar">
                <ul className="sidebar-icons"
                    style={{
                        paddingLeft: "0px"
                    }}>
                    {
                        navItems.map((item, index) => {
                            return (
                                <React.Fragment>
                                <li key={index}>
                                    <Link to={item.to}>
                                        <item.icon />
                                    </Link>
                                </li>
                                <p>{item.name}</p>
                                </React.Fragment>
                                
                            )

                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default SideBar;