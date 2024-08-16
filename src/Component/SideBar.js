import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Sidebar.css";
import { PiStudentBold } from "react-icons/pi"
import { GiPapers } from "react-icons/gi";
import { ImBooks } from "react-icons/im";
import { FcCollaboration } from "react-icons/fc";
import { MdInsertDriveFile } from "react-icons/md";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setContentSideItems, toggleContentSideBar } from "../Store/SidebarToggleSlice";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
// import SidebarToggleSlice from "../Store/SidebarToggleSlice";
import contentSidebarItemsDummy from "../View/contentSidebarItemsDummy";

const navItems = [{
    name: 'Student',
    icon: PiStudentBold,
    to: "student"
},
{
    name: 'Exam',
    icon: GiPapers,
    to: "exam"
},
{
    name: 'Academics',
    icon: ImBooks,
    to: "academics"
}, {
    name: "Hr",
    icon: FcCollaboration,
    to: "hr"
},
{
    name: 'Collaborate',
    icon: MdInsertDriveFile,
    to: "collaborate"
}, {
    name: 'Add-Ons',
    icon: MdOutlineAddToPhotos,
    to: "addOns"
},{
    name: 'Services',
    icon: MdOutlineMiscellaneousServices,
    to: "services"
}]

const SideBar = () => {
    const [itemIndex, setItemIndex] = useState(0)
    const contentBarShow = useSelector(state => state.SidebarToggleSlice.contentSideBar);
    const dispatch = useDispatch();


    const contentSideBarShow = (index) => {

        const fetchContentSidebarItems = async (index,data) => {
            dispatch(setContentSideItems(data[index]))
        };
        fetchContentSidebarItems(index,contentSidebarItemsDummy)

        if (+itemIndex !== +index + 1) {
            dispatch(toggleContentSideBar(true))
            setItemIndex(index + 1)
        } else {
            dispatch(toggleContentSideBar(!contentBarShow))

        }
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
                                <React.Fragment key={index}>
                                    <li style={{color:"#0d6efd"}} onClick={() => contentSideBarShow(index)}>
                                        <item.icon />
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