import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const PORT = process.env.PORT || 5000;

const StripeCheckoutButton = ({ price, name }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_UP1rx1dUY6Pr1CRG0BMRg80t00L2Zu1igZ";

  const onToken = (token) => {
    axios({
      url: `http://localhost:${PORT}/payment`,
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment Successful");
      })
      .catch((error) => {
        console.log(error);
        alert(
          "There was an issue with you payment. Please check your card info and try again"
        );
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
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
