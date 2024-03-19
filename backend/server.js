const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const { readdirSync } = require("fs");
const dotenv = require("dotenv");
dotenv.config();
app.use(cors());
app.use(express.json());

// const useRoutes = require("./routes/user");
// const options = { origin: "http://localhost:3000", useSuccessStatus: 200 };
// app.use("/", useRoutes);

readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

const PORT = process.env.port || 8000;

//database
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Database connect succesfully"))
  .catch(() => console.log("Database connection error"));

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
