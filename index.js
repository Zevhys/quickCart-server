const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000; // eslint-disable-line

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
