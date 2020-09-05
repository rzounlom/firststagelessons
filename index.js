const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
require("dotenv").config({ path: "./.env" });
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post("/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;
  const msg = {
    to: email,
    from: "rzounlom@gmail.com",
    subject: subject,
    text: message,
    html: `<p><strong>New message from: ${name} at email: ${email} message: </strong>${message}</p>`,
  };

  await sgMail
    .send(msg)
    .then((msg) => res.json({ status: "email sent", message: msg }))
    .catch((e) => console.log(e));
});

if (process.env.NODE_ENV === "production") {
  //set static fuilder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Server Started on port: ${PORT}`));
