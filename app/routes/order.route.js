module.exports = (app) => {
  const orders = require("../controllers/order.controller");
  const router = require("express").Router();
  const RateLimit = require('express-rate-limit');

  // set up rate limiter: maximum of 100 requests per 15 minutes
  const limiter = RateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // max 100 requests per windowMs
  });

  // apply rate limiter to all requests
  router.use(limiter);

  router.get("/user/:id", orders.findCart);
  router.post("/user/:id/add", orders.addToCart);
  router.delete("/user/:id/product/:product", orders.removeFromCart);

  app.use("/api/orders", router);
};
