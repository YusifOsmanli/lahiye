import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  mdiCalendarToday,
  mdiDotsVertical,
  mdiHomeAccount,
  mdiSpeedometer,
} from "@mdi/js";
import Icon from "@mdi/react";
import { mdiCog } from "@mdi/js";
import { mdiInformationOutline } from "@mdi/js";
import { IoIosAddCircle } from "react-icons/io";
import './Sidebar.scss'
const Sidebar = () => {
    const profDropRef = useRef();
    const handleActiveDrop = () => {
      profDropRef.current.classList.toggle("activeProfDrop");
    };
  return (
    <div className="d-flex">
      <div className="sidebar ">
        <div className="sidebarTop  d-none d-lg-flex align-items-center justify-content-center fixed-top">
          <Link to={"/admin"} className="sidebarTopLink1">
            <img
              src=''
              alt="logo"
            />
          </Link>
          <Link to={"/admin"} className="sidebarTopLink2">
            <img src="" alt="icon" />
          </Link>
        </div>
        <ul className="sidebarBottom">
          <li className="profileImage sidebarBottomLinks">
            <div className="profileImageInside">
              <div className="profileImageInsideLeft">
                <div className="profileImageInsideLeftImg">
                  {/* <img src={exampleImage} alt="userImage" /> */}
                  <span className="activeGreen"></span>
                </div>
                <div className="profileImageInsideLeftAbout">
                  <h5>Henry Klein</h5>
                  <span>Gold Member</span>
                </div>
              </div>
              <div
                className="profileImageInsideRight"
                onClick={handleActiveDrop}
              >
                <Icon path={mdiDotsVertical} size={1} />
              </div>
              <div ref={profDropRef} className="profilDropMenu">
                <div className="profilDropMenuItem">
                  <div className="profilDropMenuItemImage">
                    <div className="profDropImgBox">
                      <span className="setIcon">
                        <Icon path={mdiCog} size={0.8} />
                      </span>
                    </div>
                  </div>
                  <div className="profilDropMenuItemText">
                    <p>Account settings</p>
                  </div>
                </div>
                <div className="profilDropMenuLine"></div>
                <div className="profilDropMenuItem">
                  <div className="profilDropMenuItemImage">
                    <div className="profDropImgBox">
                      <span className="infoIcon">
                        <Icon path={mdiInformationOutline} size={0.8} />
                      </span>
                    </div>
                  </div>
                  <div className="profilDropMenuItemText">
                    <p>Change Password</p>
                  </div>
                </div>
                <div className="profilDropMenuLine"></div>
                <div className="profilDropMenuItem">
                  <div className="profilDropMenuItemImage">
                    <div className="profDropImgBox">
                      <span className="todoİcon">
                        <Icon path={mdiCalendarToday} size={0.8} />
                      </span>
                    </div>
                  </div>
                  <div className="profilDropMenuItemText">
                    <p>To-do list</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="sidebarBottomLinks navCategory">
            <span>Navigation</span>
          </li>
          <li className={`sidebarBottomLinks navMenu `}>
            <Link to={"/"}>
              <div className="navMenuIcon text-info">
                <span>
                  <Icon path={mdiHomeAccount} size={0.8} />
                </span>
              </div>
              <span className="navMenuText">Site</span>
            </Link>
          </li>
          <li className={`sidebarBottomLinks navMenu `}>
            <Link to={"/admin"}>
              <div className="navMenuIcon speedometer">
                <span>
                  <Icon path={mdiSpeedometer} size={0.8} />
                </span>
              </div>
              <span className="navMenuText">Dashboard</span>
            </Link>
          </li>
          <li className={`sidebarBottomLinks navMenu `}>
            <Link to={"/admin/add"}>
              <div className="navMenuIcon speedometer">
                <span>
                  <IoIosAddCircle size={20} />
                </span>
              </div>
              <span className="navMenuText">Add product</span>
            </Link>
          </li>
        </ul>
      </div>
      
  
    </div>
  )
}

export default Sidebar