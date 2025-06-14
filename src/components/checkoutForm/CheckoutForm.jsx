import React from "react";
import "./checkoutForm.css";
import { ElementsConsumer, PaymentElement } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { setCurrentOrder } from "../../redux/slices/orderslice";
import { setEmptyCart } from "../../redux/slices/cartslice";
import { useDispatch, useSelector } from "react-redux";

const CardSection = (props) => {
  const { stripe, elements } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart_all_items = useSelector((state) => state.cartslice.cart);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    dispatch(setCurrentOrder(cart_all_items));
    dispatch(setEmptyCart());
    navigate("/order");

    // const result = await stripe.confirmPayment({
    //   elements,
    //   confirmParams: {
    //     return_url: "https://example.com/order/123/complete",
    //   },
    // });

    // if (result.error) {
    //   console.log(result.error.message);
    // } else {
    //   console.log("Hello");
    //   // Your customer will be redirected to your `return_url`. For some payment
    //   // methods like iDEAL, your customer will be redirected to an intermediate
    //   // site first to authorize the payment, then redirected to the `return_url`.
    // }
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="payment-form">
      <PaymentElement />
      <button disabled={!stripe} type="submit" className="payment-submit-btn">
        Submit
      </button>
    </form>
  );
};

const CheckoutForm = () => {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CardSection stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  );
};

export default CheckoutForm;
