import React, {useEffect, useState} from "react";
import {Collapse} from "antd";
import {RES_MENU_API} from "../../utils/constant";
import {useParams} from "react-router";
import {StarFilled} from "@ant-design/icons";
import "./restaurantMenu.css";
import {BASE_IMG_URL} from "../../utils/constant";
import MenuSkelton from "../../components/menuSkelton/MenuSkelton";
import {useDispatch, useSelector} from "react-redux";
import {
  addTocart,
  setCurremtRestaurant,
  removeFromcart,
} from "../../redux/slices/cartslice";
import {useNavigate} from "react-router-dom";
import {ARRAY_OF_MENU_OF_RESTAURANTS} from "../../../__mocks__/dataMock";

const RestaurantMenu = () => {
  const resMenuData = ARRAY_OF_MENU_OF_RESTAURANTS;
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart_Item = useSelector(state => state.cartslice.cart);
  const is_login_user = useSelector(state => state.userslice.currentLoginUser);

  if (!resMenuData || resMenuData.length === 0) return <MenuSkelton />;

  const resData = resMenuData[0].data;
  const {name, labels, avgRating, menu} = resData;

  const handleCart = item => {
    if (is_login_user) {
      dispatch(addTocart(item));
      dispatch(setCurremtRestaurant(resData));
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="resmenu-container">
      <div className="res-menu-header">
        <div className="res-header-left">
          <h2>{name}</h2>
          <p>{labels.find(label => label.title === "Address")?.message}</p>
        </div>
        <div className="res-header-right">
          <div className="res-header-rating">
            <StarFilled />
            <span>{avgRating}</span>
          </div>
        </div>
      </div>
      <div className="res-menu-container">
        {menu &&
          Object.values(menu.items).map(item => (
            <div className="res-item-card" key={item.id}>
              <div className="res-item-card-left">
                <h3>{item.name}</h3>
                <p>₹{Math.trunc(item.price / 100)}</p>
              </div>
              <div className="food-img">
                <img
                  src={
                    BASE_IMG_URL +
                    (item.cloudinaryImageId || resData.cloudinaryImageId)
                  }
                  alt={item.name}
                />
                <div className="button-wrap">
                  {item?.qty > 1 ? (
                    <>
                      <span
                        className="item-button"
                        onClick={() => dispatch(removeFromcart(item))}
                      >
                        -
                      </span>
                      <span className="item-qty">{item?.qty}</span>
                      <span
                        className="item-button"
                        onClick={() => dispatch(addTocart(item))}
                      >
                        +
                      </span>
                    </>
                  ) : (
                    <div
                      className="add-item-button"
                      onClick={() => handleCart(item)}
                    >
                      Add Item
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
