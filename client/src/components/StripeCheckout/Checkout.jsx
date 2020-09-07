import React from "react";

import CheckoutModal from "./CheckoutModal/CheckoutModal";

import "./Checkout.scss";

const Checkout = () => {
  return (
    <div className="checkout">
      <CheckoutModal />
    </div>
  );
};

export default Checkout;
