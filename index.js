//api key: "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"
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);

app.get("/send-email", async (req, res) => {
  // const {name, email, subject, message} = req.body
  const msg = {
    to: "skillz21c@yahoo.com",
    from: "rzounlom@gmail.com",
    subject: "Sending with Twilio SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  await sgMail.send(msg).catch((e) => console.log(e));
  res.json({ msg: "email sent" });
});

if (process.env.NODE_ENV === "production") {
  //set static fuilder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Server Started on port: ${PORT}`));
