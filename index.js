const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
require('dotenv').config({ path: './.env' });
const PORT = process.env.PORT || 5000;
//need
const app = express();

app.use(cors());
app.use(express.json());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;
  const msg = {
    to: email,
    from: 'firstshiftllc@gmail.com',
    subject: subject,
    text: message,
    html: `<p><strong>New message from: ${name} at email: ${email} message: </strong>${message}</p>`,
  };

  await sgMail
    .send(msg)
    .then((msg) => res.json({ status: 'email sent', message: msg }))
    .catch((e) => console.log(e));
});

if (process.env.NODE_ENV === 'production') {
  //set static fuilder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd',
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
      console.log(stripeErr);
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});

app.listen(PORT, () => console.log(`Server Started on port: ${PORT}`));
