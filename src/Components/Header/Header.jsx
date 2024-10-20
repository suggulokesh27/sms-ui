import React from "react";
import styles from "./header.module.css";

import { Link } from "react-router-dom";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { GiTireIronCross } from "react-icons/gi";
import { FaBarsStaggered } from "react-icons/fa6";

import { useDispatch, useSelector } from "react-redux";
import { sidebarData, toggleSidebar } from "../../Store/Slices/sidebarToggleSlice";
import { navbarData, toggleNotification, toggleProfile } from "../../Store/Slices/navbarToggleSlice";

const Header = () => {

  const dispatch = useDispatch();

  const { showSidebar } = useSelector(sidebarData);
  const { showProfile, showNotification } = useSelector(navbarData);

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <Link to={"/"}>
          <img
            alt="logo"
            id="logo"
            width={50}
            src="https://png.pngtree.com/png-clipart/20211017/original/pngtree-school-logo-png-image_6851480.png"
          />
        </Link>
        <div role="button" tabIndex={0} className={styles.hamberger} onClick={() => dispatch(toggleSidebar())}>
          {showSidebar ? <FaBarsStaggered /> : <i className="fa-solid fa-bars" />}
        </div>
      </div>

      <div className={styles.right}>
        <button className={styles.rightButton}>Code-Branch-Name</button>

        {isDesktop && (
          <>
            <div className={styles.navbarIcons}>
              <HiMiniSquares2X2 />
            </div>
            <div className={styles.navbarIcons}>
              <AiOutlineArrowsAlt />
            </div>
            <div className={`${styles.navbarIcons} ${styles.notification}`} onClick={() => dispatch(toggleNotification())}>
              <FaRegBell /> <span className={styles.notificationCount}>10</span>
            </div>
          </>
        )}

        <div
          className={`${styles.subMenuWrap} ${
            showProfile ? styles.subMenuWrapActive : ""
          }`}
        >
          <div
            className={`${styles.subMenu} ${
              showProfile ? styles.subMenuActive : ""
            }`}
          >
            <div className={styles.userInfo}>
              <img
                src="https://cdn-icons-png.freepik.com/512/145/145974.png"
                width={25}
                alt="avatar"
              />
              <h2>Jhon jhosey</h2>
            </div>
            <hr />

            {isMobile && (
              <>
                <div className={styles.navbarIconsMobile}>
                  <div className={styles.navbarIcons}>
                    <HiMiniSquares2X2 />
                  </div>
                  <div className={styles.navbarIcons}>
                    <AiOutlineArrowsAlt />
                  </div>
                  <div
                    className={`${styles.navbarIcons} ${styles.notification}`}
                    onClick={() => dispatch(toggleNotification())}
                  >
                    <FaRegBell />{" "}
                    <span className={styles.notificationCount}>10</span>
                  </div>
                </div>
                <hr />
              </>
            )}

            <Link className={styles.subMenuLink}>
              <p>Edit Profile</p>
            </Link>
            <Link className={styles.subMenuLink}>
              <p>Account & Info</p>
            </Link>
            <Link className={styles.subMenuLink}>
              <p>Log Out</p>
            </Link>
          </div>
        </div>

        {/* User Avathar */}
        <button className={styles.navbarAvatar} onClick={() => dispatch(toggleProfile())}>
          <img
            src="https://cdn-icons-png.freepik.com/512/145/145974.png"
            width={25}
            alt="avatar"
          />
        </button>


            {/* Notifications */}
        <div className={ ` ${styles.subMenuWrap}  ${showNotification ? styles.subMenuWrapActive : ""}`}>
          <div
            className={`${styles.subMenu} ${styles.notificationWrapper} ${
              showNotification ? styles.subMenuActive : ""
            }`}
          >
            <ul class="list-group ">
              <li class={styles.listGroupItem}>
                Cras justo odio Dapibus ac facilisis in{" "}
                <span>
                  <GiTireIronCross />
                </span>{" "}
              </li>
              <li class={styles.listGroupItem}>
                Dapibus ac facilisis in{" "}
                <span>
                  <GiTireIronCross />
                </span>{" "}
              </li>
              <li class={styles.listGroupItem}>
                Vestibulum at eros{" "}
                <span>
                  <GiTireIronCross />
                </span>{" "}
              </li>
            </ul>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Header;
