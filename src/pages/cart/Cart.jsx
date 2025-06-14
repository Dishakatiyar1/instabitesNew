import React from "react";
import "./cart.css";
import { BASE_IMG_URL } from "../../utils/constant";
import { useSelector, useDispatch } from "react-redux";
import { EmptyCart } from "../../components";
import { addTocart, removeFromcart } from "../../redux/slices/cartslice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart_item = useSelector((state) => state.cartslice.cart);
  const current_login_user = useSelector(
    (state) => state.userslice.currentLoginUser
  );
  const currentRestaurant = useSelector(
    (state) => state.cartslice.currentRestaurant
  );

  const delivery_fee = 40;
  const order_total = cart_item.reduce(
    (a, item) =>
      a + (item?.qty * (item?.price ? item?.price : item?.defaultPrice)) / 100,
    0
  );
  const pay_amount = delivery_fee + order_total;
  const { cloudinaryImageId, name, city } = currentRestaurant;

  const handlePlaceOrder = () => {
    navigate("/payment");
  };

  return cart_item.length <= 0 ? (
    <EmptyCart />
  ) : (
    <div className="container">
      <div className="cart-container">
        <div className="cart-items-list">
          <div className="cart-item">
            <div className="cart-item-top">
              <img
                src={BASE_IMG_URL + cloudinaryImageId}
                className="cart-res-img"
              />
              <div className="cart-res-detail">
                <h2>{name}</h2>
                <p>{city}</p>
                <div className="cart-underline"></div>
              </div>
            </div>
            {cart_item?.map((item) => {
              return (
                <div className="cart-item-bottom" key={item?.id}>
                  <div className="cart-item-name">
                    <div
                      className={`cart-food ${
                        item?.itemAttribute?.vegClassifier === "VEG"
                          ? "green"
                          : "red"
                      }`}
                    >
                      <div
                        className={`cart-food-circle ${
                          item?.itemAttribute?.vegClassifier === "VEG"
                            ? "green"
                            : "red"
                        }`}
                      ></div>
                    </div>
                    <div className="cart-food-detail-right">
                      <p className="food-name">{item?.name}</p>
                      <p className="cart-item-price">
                        ₹
                        {Math.trunc(
                          parseInt(
                            (item?.price ? item?.price : item?.defaultPrice) /
                              100
                          ) * item?.qty
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="cart-item-button-main">
                    <div className="cart-button-wrap">
                      <span
                        className="cart-item-button"
                        onClick={() => dispatch(addTocart(item))}
                      >
                        +
                      </span>
                      <span className="cart-item-qty">{item?.qty}</span>
                      <span
                        className="cart-item-button"
                        onClick={() => dispatch(removeFromcart(item))}
                      >
                        -
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="cart-checkout-box">
          <h2 className="bill-heading">Bill Details</h2>
          <div className="order-charge">
            <p>Item Total</p>
            <p>₹{Math.trunc(order_total)}</p>
          </div>
          <div className="order-charge">
            <p>Delivery Fee</p>
            <p>₹{delivery_fee}</p>
          </div>
          <div className="order-seprate-line"></div>
          <div className="order-total-block">
            <p className="total-pay-text">To Pay</p>
            <p className="total-pay-money">₹{Math.trunc(pay_amount)}</p>
          </div>
          <button
            className="place-order-button"
            onClick={() => handlePlaceOrder()}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
