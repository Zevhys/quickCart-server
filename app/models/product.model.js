module.exports = (mongoose) => {
  const productSchema = mongoose.Schema({
    code: String,
    name: String,
    price: Number,
    description: String,
    imageUrl: String,
    averrageRating: Number,
  });

  productSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject(); // eslint-disable-line
    object.id = _id;
    return object;
  });

  const Product = mongoose.model("products", productSchema);
  return Product;
};
