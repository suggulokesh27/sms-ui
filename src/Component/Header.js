import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleContentSideBar, toggleSideBar } from "../Store/SidebarToggleSlice";

import "./Header.css";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { useMediaQuery } from "react-responsive";


const Header = () => {

    const [showProfile, setShowProfile] = useState(false)
    const sideBar = useSelector(state => state.SidebarToggleSlice.sideBar);
    const contentSideBar = useSelector(state => state.SidebarToggleSlice.contentSideBar);
    const dispatch = useDispatch()

    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isDesktop = useMediaQuery({ minWidth: 768 });

    const changeBarHandle = () => {
        if (!sideBar && !contentSideBar) {
            dispatch(toggleContentSideBar(true))
            dispatch(toggleSideBar(true))
        } else if (sideBar && contentSideBar) {
            dispatch(toggleContentSideBar(!contentSideBar))
        } else {
            dispatch(toggleSideBar(!sideBar))
        }

    }
    const showProfileHandler = () => {
        setShowProfile(!showProfile);
        console.log("profile")
    }

    return (
        <div className='navbar'>

            <div className='left'>
                <img alt='logo' id='logo' width={50} src='https://png.pngtree.com/png-clipart/20211017/original/pngtree-school-logo-png-image_6851480.png' />
                <div onClick={changeBarHandle}><i className="fa-solid fa-bars"></i></div>
            </div>

            <div className='right'>
                <button>Code-Branch-Name</button>
                {isDesktop && <>
                    <div className='navbar-icons'> <HiMiniSquares2X2 /> </div>
                    <div className='navbar-icons'> <AiOutlineArrowsAlt /> </div>
                    <div className='navbar-icons'> <FaRegBell /> </div>
                </>}

                <div className='navbar-avatar' onClick={showProfileHandler}> <img src='https://cdn-icons-png.freepik.com/512/145/145974.png' width={25} alt='avatar' />
                    {showProfile &&
                        <div className="sub-menu-wrap">
                            <div className="sub-menu">
                                <div className="user-info">
                                    <img src='https://cdn-icons-png.freepik.com/512/145/145974.png' width={25} alt='avatar' />
                                    <h2>Jhon jhosey</h2>
                                </div>
                                <hr></hr>
                                {isMobile && <>
                                    <div className="navbar-icons-mobile">
                                    <div className='navbar-icons'> <HiMiniSquares2X2 /> </div>
                                    <div className='navbar-icons'> <AiOutlineArrowsAlt /> </div>
                                    <div className='navbar-icons'> <FaRegBell /> </div>
                                </div>
                                <hr />
                                </> 
                                }
                                <Link className="sub-menu-link">
                                    <p>Edit Profile</p>
                                </Link>
                                <Link className="sub-menu-link">
                                    <p>Account & Info</p>
                                </Link>
                                <Link className="sub-menu-link">
                                    <p>Log Out</p>
                                </Link>
                            </div>
                        </div>

                    }
                </div>
            </div>

        </div>
    )
}

export default Header;