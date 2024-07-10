import React from "react";
import { Link } from "react-router-dom";
import "../UI/Component/Sidebar.css";
import { PiStudentBold } from "react-icons/pi"
import { GiPapers } from "react-icons/gi";
import { ImBooks } from "react-icons/im";
import { FcCollaboration } from "react-icons/fc";
import { MdInsertDriveFile } from "react-icons/md";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleContentSideBar } from "../Store/SidebarToggleSlice";
import SidebarToggleSlice from "../Store/SidebarToggleSlice";

const navItems = [{
    name: 'Student',
    icon: PiStudentBold,
    to: "/student"
},
{
    name: 'Exam',
    icon: GiPapers,
    to: "/exam"
},
{
    name: 'Academics',
    icon: ImBooks,
    to: "/academics"
}, {
    name: "Hr",
    icon: FcCollaboration,
    to: "/hr"
},
{
    name: 'Collaborate',
    icon: MdInsertDriveFile,
    to: "/collaborate"
}, {
    name: 'Add-Ons',
    icon: MdOutlineAddToPhotos,
    to: "/addOns"
},]

const SideBar = () => {

    const contentBarShow = useSelector(state => state.SidebarToggleSlice.contentSideBar);
    const dispatch = useDispatch();

    const contentSideBarShow = () => {
            dispatch(toggleContentSideBar(!contentBarShow))
    }

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
                                    <Link to={item.to} onClick={contentSideBarShow}>
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