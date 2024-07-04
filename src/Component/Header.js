import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleContentSideBar, toggleSideBar } from "../Store/SidebarToggleSlice";

import "../UI/Component/Header.css";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa6";


const Header = () => {

    const sideBar = useSelector(state => state.SidebarToggleSlice.sideBar);
    const contentSideBar = useSelector(state => state.SidebarToggleSlice.contentSideBar);
    const dispatch = useDispatch()

    const changeBarHandle = () => {

        if (!sideBar && !contentSideBar) {
            dispatch(toggleContentSideBar(true))
            dispatch(toggleSideBar(true))
        } else if (contentSideBar) {
            dispatch(toggleContentSideBar(!contentSideBar))
        } else {
            dispatch(toggleSideBar(!sideBar))
        }
    }

    return (
        <div className='navbar'>

            <div className='left'>
                <img alt='logo' id='logo' width={50} src='https://png.pngtree.com/png-clipart/20211017/original/pngtree-school-logo-png-image_6851480.png' />
                <div onClick={changeBarHandle}><i class="fa-solid fa-bars"></i></div>
            </div>

            <div className='right'>
<<<<<<< HEAD
                <button>Code-Branch-School Name</button>
                <div className='navbar-icons'> <HiMiniSquares2X2 /> </div>
                <div className='navbar-icons'> <AiOutlineArrowsAlt /> </div>
                <div className='navbar-icons'> <FaRegBell /> </div>
=======
                <div className="icons">
                    <button>I am in button</button>
                    <div className='navbar-icons'> <HiMiniSquares2X2 /> </div>
                    <div className='navbar-icons'> <AiOutlineArrowsAlt /> </div>
                    <div className='navbar-icons'> <FaRegBell /> </div>
                </div>
>>>>>>> b56e4c28b3f38cb74383bf687388c03fdb363f77
                <div className='navbar-avatar'> <img src='https://cdn-icons-png.freepik.com/512/145/145974.png' width={25} alt='avatar' /> </div>
            </div>

        </div>
    )
}

export default Header;