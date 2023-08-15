import Product from "../models/product";

export const newProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(200).json({
    product,
  });
};

export const getProducts = async (req, res, next) => {

  const { category, query: input, price, rating, sort } = req.query;

  /*  const category = query.category || "";
  const price = query.price || "";
  const rating = query.rating || "";
  const sort = query.sort || "latest";
  const querySearch = query.query || ""; */
  const queryObj = {};
  if (category !== "all") {
    queryObj.category = category;
  }
   
  if (input) {
    queryObj.name = { $regex: input, $options: "i" };
  }

  if (price !== "all") {
    queryObj.price = {
      $gte: Number(price.split("-")[0]),
      $lte: Number(price.split("-")[1]),
    };
  }

  if (rating !== "all") {
    queryObj.rating = {
      $gte: Number(rating),
    };
  }

  let result = Product.find(queryObj);
  // console.log(result);
  // console.log(queryObj);
  if (sort === "latest") {
    result.sort("-createdAt");
  }

  if (sort === "lowest") {
    result.sort("price");
  }

  if (sort === "highest") {
    result.sort("-price");
  }

  if (sort === "toprated") {
    result.sort("-rating");
  }

  console.log(queryObj);
  //pagination........
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 2;
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);
  const products = await result;

      

  //counts the docs bfore sorting
  const totProd = await Product.countDocuments(queryObj);
  //gets num of page
  const numPg = Math.ceil(totProd / limit);
  // const products = await Product.find();
  console.log(products);
  res
    .status(200)
    .json({ success: true, data: products, count: totProd, pgNum: numPg,limit });

  //   .........
  // const products = await Product.find();
  // res.status(200).json({
  //   products,
  // });
};

export const getProduct = async (req, res, next) => {
  const product = await Product.findById(req.query.id);

  if (!product) {
    res.status(404).json({
      error: "Product not found.",
    });
  }

  res.status(200).json({
    product,
  });
};