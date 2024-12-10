module.exports = (app) => {
  const products = require("../controllers/product.controller");
  const router = require("express").Router();
  const rateLimit = require("express-rate-limit");

  // set up rate limiter: maximum of 100 requests per 15 minutes
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // max 100 requests per windowMs
  });

  // apply rate limiter to all requests
  router.use(limiter);

  router.get("/", products.findAll);
  router.get("/:id", products.findOne);

  app.use("/api/products", router);
};
