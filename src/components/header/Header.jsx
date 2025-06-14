import React, {useState} from "react";
import {LOGO_URL} from "../../utils/constant";
import "./header.css";
import {
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  GlobalOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import Drawerbar from "../drawerbar/Drawerbar";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const item_in_cart = useSelector(state => state?.cartslice?.cart);
  const qty_in_cart = item_in_cart.reduce((a, b) => a + b.qty, 0);

  const current_user_login = useSelector(
    state => state?.userslice?.currentLoginUser
  );

  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const onClose = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      <div className="header-wrapper">
        <div className="container">
          <div className="header">
            <div className="nav-logo">
              <NavLink to="/" activeclassname="active">
                <img
                  src={LOGO_URL}
                  alt="app-logo"
                  style={{
                    borderRadius: "50%",
                    width: "60%",
                    height: "100%",
                  }}
                />
              </NavLink>
            </div>
            <ul className="nav-list" data-testid="nav-link">
              <li className="nav-item">
                <NavLink to="/search" activeclassname="active">
                  <SearchOutlined />
                  <span className="nav-text">Search</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/help" activeclassname="active">
                  <GlobalOutlined />
                  <span className="nav-text">Help</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" activeclassname="active">
                  <ShoppingCartOutlined />
                  <span className="nav-text">Cart</span>
                  {qty_in_cart !== 0 && (
                    <span className="cart-item-badge">{qty_in_cart}</span>
                  )}
                </NavLink>
              </li>
              {current_user_login ? (
                <li className="nav-item">
                  <div className="login-user" onClick={showDrawer}>
                    {current_user_login?.name[0].toUpperCase()}
                  </div>
                </li>
              ) : (
                <li className="nav-item">
                  <NavLink to="/login" activeclassname="active">
                    <UserOutlined />
                    <span className="nav-text">Sign in</span>
                  </NavLink>
                </li>
              )}
            </ul>
            <MenuOutlined
              onClick={() => showDrawer()}
              className="humburger-menu"
            />
          </div>
        </div>
      </div>
      <Drawerbar onClose={onClose} openDrawer={openDrawer} />
    </>
  );
};

export default Header;
