import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price, name }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_UP1rx1dUY6Pr1CRG0BMRg80t00L2Zu1igZ";

  const onToken = async (token) => {
    try {
      const data = {
        amount: priceForStripe,
        token,
      };

      await axios.post("http://localhost:5000/payment", data);
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
