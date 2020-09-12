import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { paymentUrl } from "../../../utils/utils";

import axios from "axios";

const StripeCheckoutButton = ({ price, name }) => {
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_PUBLISHABLE_KEY;

  const onToken = async (token) => {
    try {
      const data = {
        amount: priceForStripe,
        token,
      };

      await axios.post(paymentUrl(), data);
      alert("Payment Successful");
    } catch (error) {
      console.log(error);
      alert(
        "There was an issue with you payment. Please check your card info and try again"
      );
    }
  };
  return (
    <StripeCheckout
      label="Purchase"
      name={name}
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
