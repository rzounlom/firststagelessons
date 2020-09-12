export const paymentUrl = () =>
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_PAYMENT_URL_DEV
    : process.env.REACT_APP_PAYMENT_URL_PROD;

export const emailUrl = () =>
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_EMAIL_URL_DEV
    : process.env.REACT_APP_EMAIL_URL_PROD;
