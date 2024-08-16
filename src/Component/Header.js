import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleContentSideBar, toggleSideBar } from "../Store/SidebarToggleSlice";
import "./Header.css";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { GiTireIronCross } from "react-icons/gi";


const Header = () => {
    const [showProfile, setShowProfile] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const sideBar = useSelector((state) => state.SidebarToggleSlice.sideBar);
    const contentSideBar = useSelector((state) => state.SidebarToggleSlice.contentSideBar);
    const dispatch = useDispatch();

    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isDesktop = useMediaQuery({ minWidth: 768 });

    const changeBarHandle = useCallback(() => {
        if (!sideBar && !contentSideBar) {
            dispatch(toggleContentSideBar(true));
            dispatch(toggleSideBar(true));
        } else if (sideBar && contentSideBar) {
            dispatch(toggleContentSideBar(!contentSideBar));
        } else {
            dispatch(toggleSideBar(!sideBar));
        }
    }, [dispatch, sideBar, contentSideBar]);

    const showProfileHandler = useCallback(() => {
        setShowProfile((prev) => !prev);
        setShowNotification(false);
    }, []);

    const showNotificationHandler = useCallback(() => {
        setShowProfile(false);
        setShowNotification((prev) => !prev);
    }, []);

    return (
        <div className='navbar'>
            <div className='left'>
                <Link to={"/"}>
                    <img
                        alt='logo'
                        id='logo'
                        width={50}
                        src='https://png.pngtree.com/png-clipart/20211017/original/pngtree-school-logo-png-image_6851480.png'
                    />
                </Link>
                <div
                    role="button"
                    tabIndex={0}
                    onClick={changeBarHandle}
                    onKeyDown={(e) => e.key === 'Enter' && changeBarHandle()}
                >
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>

            <div className='right'>
                <button>Code-Branch-Name</button>
                {isDesktop && (
                    <>
                        <div className='navbar-icons'><HiMiniSquares2X2 /></div>
                        <div className='navbar-icons'><AiOutlineArrowsAlt /></div>
                        <div className='navbar-icons notification' onClick={showNotificationHandler}><FaRegBell />  <span className="notification-count">10</span></div>
                    </>
                )}

                <div
                    className='navbar-avatar'
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && showProfileHandler()}
                >
                    <img
                        src='https://cdn-icons-png.freepik.com/512/145/145974.png'
                        width={25}
                        alt='avatar'
                        onClick={showProfileHandler}
                    />
                    <div className={`sub-menu-wrap ${showProfile ? 'active' : ''}`}>
                        <div className={`sub-menu ${showProfile ? 'active' : ''}`}>
                            <div className="user-info">
                                <img
                                    src='https://cdn-icons-png.freepik.com/512/145/145974.png'
                                    width={25}
                                    alt='avatar'
                                />
                                <h2>Jhon jhosey</h2>
                            </div>
                            <hr />
                            {isMobile && (
                                <>
                                    <div className="navbar-icons-mobile">
                                        <div className='navbar-icons'><HiMiniSquares2X2 /></div>
                                        <div className='navbar-icons'><AiOutlineArrowsAlt /></div>
                                        <div className='navbar-icons notification' onClick={showNotificationHandler}><FaRegBell />  <span className="notification-count">10</span></div>
                                        </div>
                                    <hr />
                                </>
                            )}
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



                    <div className={`sub-menu-wrap  ${showNotification ? 'active' : ''}`}>
                        <div className={`sub-menu notification-wapper ${showNotification ? 'active' : ''}`}>

                            <ul class="list-group ">
                                <li class="list-group-item">Cras justo odio Dapibus ac facilisis in   <span><GiTireIronCross /></span>  </li>
                                <li class="list-group-item">Dapibus ac facilisis in  <span><GiTireIronCross /></span> </li>
                                <li class="list-group-item">Vestibulum at eros  <span><GiTireIronCross /></span> </li>
                            </ul>

                        </div>
                    </div>
                




                    
                </div>
            </div>
        </div>
    );
};

export default Header;
