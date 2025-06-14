import { ShoppingCartOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./emptycart.css";

const EmptyCart = () => {
  return (
    <div className="empty-card-conatiner">
      <div className="empty-card-icon">
        <ShoppingCartOutlined />
      </div>
      <p className="empty-cart-para" data-testid="cart-para">
        Your cart has been empty please add items in cart for order
      </p>
      <Link className="empty-cart-button" to="/">
        Add Items to cart
      </Link>
    </div>
  );
};

export default EmptyCart;
