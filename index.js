const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const path = require("path");
const cors = require("cors");
const favicon = require("serve-favicon");

app.use(
  cors({
    origin: "http://localhost:8080",
    methods: ["GET", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use((req, res, next) => {
  res.cookie("exampleCookie", "value", {
    httpOnly: true,
    secure: true,
    sameSite: "None",
  });
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/img", express.static(path.join(__dirname, "/img")));
app.use(favicon(path.join(__dirname, "favicon.ico")));

const db = require("./app/models");
db.mongoose
  .connect(db.url)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Cant Connect Database", err);
  });

app.get("/", (req, res) => {
  res.json({
    message: "Server-side for QuickCart",
  });
});

require("./app/routes/product.route")(app);
require("./app/routes/order.route")(app);

app.use((req, res) => {
  res.status(404).send("404 - Not Found");
});

app.listen(8000, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
