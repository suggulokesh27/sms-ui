import React, { useState, useCallback, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleContentSideBar, toggleSideBar } from "../Store/SidebarToggleSlice";
import "./Header.css";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import getApi from "../Api/getApi";
import { setOrg } from "../Store/OrganisationSlice";

const Header = () => {
    const [showProfile, setShowProfile] = useState(false);
    const showProfileRef = useRef();
    const sideBar = useSelector((state) => state.SidebarToggleSlice.sideBar);
    const contentSideBar = useSelector((state) => state.SidebarToggleSlice.contentSideBar);
    const organisationData = useSelector(state => state.OrganisationSlice.organisationData)
    const dispatch = useDispatch();

    const navigate = useNavigate();

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
    }, []);

    const handleClickOutside = (event) => {
        // console.log("event",showProfileRef)
        if (showProfileRef.current && !showProfileRef.current.contains(event.target)) {
            setShowProfile(false);
        }
      };

      const logoutHandler = () => {
        localStorage.clear();
        navigate("/")
      }

      const tokenFormLocalStorage = localStorage.getItem("token")
      const orgId = localStorage.getItem("orgId")
      useEffect(() => {

          const headers = {
              'Authorization': `Bearer ${tokenFormLocalStorage}`
          }
          try {
              const fetchData = async () => {
                  const res = await getApi(`org/get/${orgId}`, headers, 8084);
                  dispatch(setOrg(res.data))
              }
              fetchData();

          } catch (err) {
              console.log(err)
          }

    console.log(organisationData)

      }, [orgId])
    
      useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

    return (
        <div className='navbar'>
            <div className='left'>
            <Link to="/dashboard">
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
                <button>{organisationData?.displayName}</button>
                {isDesktop && (
                    <>
                        <div className='navbar-icons'><HiMiniSquares2X2 /></div>
                        <div className='navbar-icons'><AiOutlineArrowsAlt /></div>
                        <div className='navbar-icons'><FaRegBell /></div>
                    </>
                )}

                <div
                    className='navbar-avatar'
                    onClick={showProfileHandler}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && showProfileHandler()}
                    ref={showProfileRef}
                >
                    <img
                        src='https://cdn-icons-png.freepik.com/512/145/145974.png'
                        width={25}
                        alt='avatar'
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
                                        <div className='navbar-icons'><FaRegBell /></div>
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
                            <Link to="/" onClick={logoutHandler} className="sub-menu-link">
                                <p>Log Out</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;