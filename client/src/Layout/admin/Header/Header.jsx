import React, { useContext, useRef } from "react";
import './Header.scss'
import { Link, useNavigate } from "react-router-dom";
import Icon from "@mdi/react";
import {
  mdiCog,
  mdiFormatLineSpacing,
  mdiLogout,
  mdiMenu,
  mdiMenuDown,
} from "@mdi/js";
import dataContexts from "../../../context/context";

function Header() {
  const { userAdmin, setUserAdmin, setIsLoginAdmin } = useContext(dataContexts);
  const navigate = useNavigate();
  const userAdminDrop = useRef();
  const handleActiveDrop = () => {
    userAdminDrop.current.classList.toggle("activeUserAdminDrop");
  };

  return (
    <header className="adminHeader">
      <div className="adminHeaderTop d-lg-none d-flex align-items-center justify-content-center">
        <Link to="/admin" className="adminHeaderTopLogo">
          <img src={""} alt="icon" />
        </Link>
      </div>
      <div className="adminHeaderBottom">
        <button className="adminHeadBtn1">
          <Icon path={mdiMenu} size={0.8} />
        </button>
        <ul className="headerSearchBx">
          <li>
            <div className="headerSearchInputBox  mt-2 mt-md-0 d-none d-lg-flex ">
              <input type="text" placeholder="Search products" />
            </div>
          </li>
        </ul>
        <ul className="adminUserDrop">
          <li className="userLeftDrop">
            <button className="userLeftDropBtn" onClick={handleActiveDrop}>
              <div className="userLeftDropButtonInside">
                {/* <img src={exampleImage} alt="exImage" /> */}
                <p className="mb-0 d-none d-sm-block ">
                  {userAdmin.name} {userAdmin.surname}
                </p>
                <span className="d-none d-sm-block">
                  <Icon path={mdiMenuDown} size={0.7} />
                </span>
              </div>
            </button>
            <div className="userLeftDropInside" ref={userAdminDrop}>
              <h6 className="p-3 mb-0">Profile</h6>
              <div className="userLeftDropInsideLine"></div>
              <Link
                to={"/admin"}
                className="userLeftDropInsideClick"
                onClick={() => {
                  setIsLoginAdmin(
                    localStorage.setItem("isLoginAdmin", JSON.stringify(false))
                  );
                  navigate("/admin");
                  localStorage.removeItem("tokenAdmin");
                }}
              >
                <div className="userLeftDropInsideIcon">
                  <div className="userLeftDropInsideI setLogOutI">
                    <Icon path={mdiLogout} size={0.8} />
                  </div>
                </div>
                <div className="userLeftDropInsideText">
                  <p className=" m-0">Log Out</p>
                </div>
              </Link>
            </div>
          </li>
        </ul>
        <button className="sideBarToggleMenu d-lg-none align-self-center">
          <Icon path={mdiFormatLineSpacing} size={0.9} />
        </button>
      </div>
    </header>
  );
}

export default Header;
