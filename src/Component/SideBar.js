import React, { useEffect, useState } from "react";
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
import SidebarToggleSlice from "../Store/SidebarToggleSlice";
import contentSidebarItemsDummy from "../View/contentSidebarItemsDummy";
import getApi from "../Api/getApi";
import { checkAndRemoveExpiredToken } from "../Utils/checkAndRemoveExpiredToken";
import { Link } from "react-router-dom";

const itemsIcons = [{
    name: 'Student',
    Student: PiStudentBold,
},
{
    name: 'Exam',
    Exam: GiPapers,
},
{
    name: 'Academics',
    Academics: ImBooks,
}, {
    name: "Hr",
    Hr: FcCollaboration,
},
{
    name: 'Collaborate',
    Collaborate: MdInsertDriveFile,
}, {
    name: 'Add-Ons',
    "Add-Ons": MdOutlineAddToPhotos,
    // AddOn: MdOutlineAddToPhotos,
},]


// const navItems = [{
//     name: 'Student',
//     icon: PiStudentBold,
//     to: "student"
// },
// {
//     name: 'Exam',
//     icon: GiPapers,
//     to: "exam"
// },
// {
//     name: 'Academics',
//     icon: ImBooks,
//     to: "academics"
// }, {
//     name: "Hr",
//     icon: FcCollaboration,
//     to: "hr"
// },
// {
//     name: 'Collaborate',
//     icon: MdInsertDriveFile,
//     to: "collaborate"
// }, {
//     name: 'Add-Ons',
//     icon: MdOutlineAddToPhotos,
//     to: "addOns"
// },]

const SideBar = () => {
    const [itemIndex, setItemIndex] = useState(0)

    const [navItems, setNavItems] = useState([]);


    const contentBarShow = useSelector(state => state.SidebarToggleSlice.contentSideBar);
    const tokenFormLocalStorage = localStorage.getItem("token")
    const userTypeFromLocalStorge = localStorage.getItem("usertype")
    const orgId = localStorage.getItem("orgId")
    const dispatch = useDispatch();
    const PORT = 8084;

    useEffect(() => {

        const headers = {
            'Authorization': `Bearer ${tokenFormLocalStorage}`
        }
        try {
            const fetchData = async () => {
                const res = await getApi(`link/get?orgId=${orgId}&userType=${userTypeFromLocalStorge}`, headers, PORT);
                setNavItems(res.data);
            }
            fetchData();

        } catch (err) {
            console.log(err)
        }

        const interVals = setInterval(checkAndRemoveExpiredToken, 30000);
        return () => clearInterval(interVals);

    }, [])

    const contentSideBarShow = (index) => {
        const fetchContentSidebarItems = (idx, data) => {
            dispatch(setContentSideItems(data[idx]))
        };
        fetchContentSidebarItems(index, contentSidebarItemsDummy)

        if (+itemIndex !== +index + 1) {
            dispatch(toggleContentSideBar(true))
            setItemIndex(index + 1)
        } else {
            dispatch(toggleContentSideBar(!contentBarShow))

        }
    }
    return (
        <div className="sidebar-container">
            <div className="sidebar hide-scrollbar">
                <ul className="sidebar-icons"
                    style={{
                        paddingLeft: "0px"
                    }}>
                    {
                        navItems?.map((item, index) => {
                            const iconObject = itemsIcons.find(icon => icon.name === item.serviceEntity.serviceName);
                            const IconComponent = iconObject ? iconObject[item.serviceEntity.serviceName] || iconObject["Add-Ons"] : iconObject["Add-Ons"];
                            return (
                                <React.Fragment key={index}>
                                    <li 
                                    style={{
                                        color:"#0d6efd"
                                    }} onClick={() => contentSideBarShow(index)}>
                                         <IconComponent />
                                            {/* <item.icon /> */}
                                    </li>
                                    <p>{item.serviceEntity.serviceName}</p>
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