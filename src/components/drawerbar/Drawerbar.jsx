import React from "react";
import { Drawer } from "antd";
import "./drawerbar.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import {
  UserOutlined,
  HomeOutlined,
  CommentOutlined,
  SettingOutlined,
  RadarChartOutlined,
  DribbbleOutlined,
  RightCircleOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { logout } from "../../redux/slices/userslice";
import { setEmptyCart } from "../../redux/slices/cartslice";
import { setEmptyCurrentOrder } from "../../redux/slices/orderslice";

const Drawerbar = (props) => {
  const { openDrawer, onClose } = props;
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.userslice.currentLoginUser);
  return (
    <>
      <Drawer
        placement="right"
        closable={false}
        onClose={onClose}
        open={openDrawer}
        key="right"
      >
        {currentUser && (
          <div className="top-menu">
            {/* <img src="" alt="avtar-image" /> */}
            <div className="avtar">{currentUser?.name[0].toUpperCase()}</div>
            <p className="drawer-name">{currentUser?.name}</p>
          </div>
        )}
        <ul className="drawer-menu-list" data-testid="nav-link-list">
          <li className="drawer-menu-item" onClick={() => onClose()}>
            <NavLink to="/" activeclassname="active">
              <HomeOutlined />
              <span>Dashboard</span>
            </NavLink>
          </li>
          {!currentUser && (
            <li className="drawer-menu-item" onClick={() => onClose()}>
              <NavLink to="/login" activeclassname="active">
                <HomeOutlined />
                <span>Login</span>
              </NavLink>
            </li>
          )}
          <li className="drawer-menu-item" onClick={() => onClose()}>
            <NavLink to="/cart" activeclassname="active">
              <HomeOutlined />
              <span>Cart</span>
            </NavLink>
          </li>
          <li className="drawer-menu-item" onClick={() => onClose()}>
            <NavLink to="/admin" activeclassname="active">
              <HomeOutlined />
              <span>Admin</span>
            </NavLink>
          </li>
          <li className="drawer-menu-item" onClick={() => onClose()}>
            <Link to="/offer">
              <RadarChartOutlined />
              <span>Offers</span>
            </Link>
          </li>
          <li className="drawer-menu-item" onClick={() => onClose()}>
            <Link to="/setting">
              <SettingOutlined />
              <span>Setting</span>
            </Link>
          </li>
          <li className="drawer-menu-item" onClick={() => onClose()}>
            <NavLink to="/order" activeclassname="active">
              <DribbbleOutlined />
              <span>My Orders</span>
            </NavLink>
          </li>
          <li className="drawer-menu-item" onClick={() => onClose()}>
            <NavLink to="/help" activeclassname="active">
              <CommentOutlined />
              <span>Help & Faq</span>
            </NavLink>
          </li>
          {currentUser && (
            <li
              className="drawer-menu-item"
              onClick={() => {
                onClose(),
                  dispatch(logout()),
                  dispatch(setEmptyCart()),
                  dispatch(setEmptyCurrentOrder());
              }}
            >
              <Link to="/">
                <LogoutOutlined />
                <span>Logout</span>
              </Link>
            </li>
          )}
        </ul>
        <div className="menu-bottom">
          <div className="drawerbar-small">
            <RightCircleOutlined />
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Drawerbar;
