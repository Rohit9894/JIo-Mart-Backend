require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./src/config/db");
const userRoute = require("./src/features/Routes/user.route");
const menRoute = require("./src/features/Routes/men.route");
const cartRoute = require("./src/features/Routes/cart.route");
const groceryRoute = require("./src/features/Routes/grocery.route");
const mobileRoute = require("./src/features/Routes/mobile.route");
const makeupRoute = require("./src/features/Routes/makeup.route");
const bagRoute = require("./src/features/Routes/bag.route");
const LaundryRoute = require("./src/features/Routes/Laundry.route");
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.use("/user", userRoute);
app.use("/men", menRoute);
app.use("/cart", cartRoute);
app.use("/grocery", groceryRoute);
app.use("/mobile", mobileRoute);
app.use("/makeup", makeupRoute);
app.use("/bag", bagRoute);
app.use("/Laundry", LaundryRoute);

app.get("/", (req, res) => {
  res.send("Hello BACKEND");
});
app.listen(8080, async () => {
  await connect();
  console.log("Listening on at http://localhost:8080");
});
