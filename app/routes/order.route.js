module.exports = (app) => {
  const orders = require("../controllers/order.controller");
  const router = require("express").Router();

  router.get("/user/:id", orders.findCart);

  app.use("/api/orders", router);
};
