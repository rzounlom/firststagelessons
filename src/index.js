import express from "express";
const app = express();
import cors from "cors";
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => res.json("Homepage"));

app.listen(PORT, () => console.log(`Server Started on port: ${PORT}`));
