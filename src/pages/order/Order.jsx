import React from "react";
import "./order.css";
import {useDispatch, useSelector} from "react-redux";
import {setEmptyCurrentOrder} from "../../redux/slices/orderslice";
import {BASE_IMG_URL} from "../../utils/constant";
import OrderImage from "../../assets/images/empty-order.jpg";
import {NavLink} from "react-router-dom";

const Order = () => {
  const dispatch = useDispatch();

  const current_order = useSelector(state => state.orderslice.currentOrder);
  const current_res = useSelector(state => state.cartslice.currentRestaurant);
  const delivery_fee = 40;
  const order_total = current_order.reduce(
    (a, item) =>
      a + (item?.qty * (item?.price ? item?.price : item?.defaultPrice)) / 100,
    0
  );
  const pay_amount = delivery_fee + order_total;

  return (
    <>
      {current_order?.length === 0 ? (
        <div className="empty-wrapper">
          <img src={OrderImage} alt="empty-order" />
          <NavLink className="order-btn" to="/">
            Order Now
          </NavLink>
        </div>
      ) : (
        <>
          <div className="container">
            <table className="food-table">
              <thead>
                <tr>
                  <th className="food-th">No</th>
                  <th className="food-th">Item</th>
                  <th className="food-th">Item Name</th>
                  <th className="food-th">Item Qty</th>
                  <th className="food-th">Item Price</th>
                  <th className="food-th">Total</th>
                </tr>
              </thead>
              <tbody>
                {current_order?.map((order, index) => {
                  return (
                    <tr key={order?.id}>
                      <td className="food-td">{index + 1}</td>
                      <td className="food-td">
                        <img
                          className="order-food-image"
                          src={
                            BASE_IMG_URL +
                            (order?.imageId
                              ? order?.imageId
                              : current_res?.cloudinaryImageId)
                          }
                          alt="food-image"
                        />
                      </td>
                      <td className="food-td">{order?.name}</td>
                      <td className="food-td">{order?.qty}</td>
                      <td className="food-td">
                        ₹
                        {Math.trunc(
                          parseInt(
                            order?.price ? order?.price : order?.defaultPrice
                          ) / 100
                        )}
                      </td>
                      <td className="food-td">
                        ₹
                        {Math.trunc(
                          parseInt(
                            (order?.price
                              ? order?.price
                              : order?.defaultPrice) / 100
                          ) * order?.qty
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="order-bottom">
              <div className="order-bottom-row">
                <span>Subtotal :</span>
                <span>₹{order_total}</span>
              </div>
              <div className="order-bottom-row">
                <span>Delivery Fee :</span>
                <span>₹{delivery_fee}</span>
              </div>
              <div className="order-bottom-row">
                <span>Total :</span>
                <span>₹{pay_amount}</span>
              </div>
            </div>
            <button
              className="delivered-order"
              onClick={() => dispatch(setEmptyCurrentOrder())}
            >
              Order Deliverd
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Order;
