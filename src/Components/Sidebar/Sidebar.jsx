import React, { useState } from "react";
import styles from "./sidebar.module.css"

import { PiStudentBold } from "react-icons/pi";
import { GiPapers } from "react-icons/gi";
import { ImBooks } from "react-icons/im";
import { FcCollaboration } from "react-icons/fc";
import { MdInsertDriveFile } from "react-icons/md";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import { setSidebarContent, sidebarData, toggleSidebarContent } from "../../Store/Slices/sidebarToggleSlice";


import contentSidebarItemsDummy from "../../Views/contentSidebarItemsDummy";

const navItems = [
    {
        name: "Student",
        icon: PiStudentBold,
        to: "student",
    },
    {
        name: "Exam",
        icon: GiPapers,
        to: "exam",
    },
    {
        name: "Academics",
        icon: ImBooks,
        to: "academics",
    },
    {
        name: "Hr",
        icon: FcCollaboration,
        to: "hr",
    },
    {
        name: "Collaborate",
        icon: MdInsertDriveFile,
        to: "collaborate",
    },
    {
        name: "Add-Ons",
        icon: MdOutlineAddToPhotos,
        to: "addOns",
    },
    {
        name: "Services",
        icon: MdOutlineMiscellaneousServices,
        to: "services",
    },
];

const Sidebar = () => {

    const [itemIndex, setItemIndex] = useState(0);
    const {showSidebarContent} = useSelector(sidebarData)

    const dispatch = useDispatch()

    const handleSidebarData = (index) => {
        const fetchContentSidebarItems = async (index, data) => {
            const content = data[index];
            if (content) {
                dispatch(setSidebarContent(content));
            }
        };

        fetchContentSidebarItems(index, contentSidebarItemsDummy);

        if (itemIndex !== index) {
            dispatch(toggleSidebarContent(true));
            setItemIndex(index);
        } else {
            dispatch(toggleSidebarContent(!showSidebarContent));
        }
    };

    return (
        <div className={styles.sidebarContainer}>
            <div className={styles.sidebar}>
                <ul className={styles.sidebarIcons}>
                    {navItems.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <li onClick={() => handleSidebarData(index)}>
                                    <item.icon />
                                </li>
                                <p>{item.name}</p>
                            </React.Fragment>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
