import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../components/checkoutForm/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51OohirSEATjoSQRiGFDQQovsv39ziuD0u6qSGNcVpXRQTyUpaXaVDzyoCP0hHRcG377jUCYb8Oocva7QHf3OGcRi00ynAuMGaZ"
);

const Cartpayment = () => {
  const options = {
    mode: "payment",
    currency: "usd",
    amount: 1099,
  };
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};

export default Cartpayment;
