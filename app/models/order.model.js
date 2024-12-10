module.exports = (mongoose) => {
  const orderSchema = mongoose.Schema({
    user_id: Number,
    cart_items: [String],
  });

  orderSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject(); // eslint-disable-line
    object.id = _id;
    return object;
  });

  const Order = mongoose.model("orders", orderSchema);
  return Order;
};
