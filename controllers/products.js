const path = require("path");

exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
};

exports.postAddProduct = (req, res) => {
  console.log(JSON.stringify(req.body));
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
};

exports.getContactProduct = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "contact.html"));
};

exports.postContactProduct = (req, res) => {
  const { name, email } = req.body;

  res.redirect("/success");
};

exports.getSuccessProduct = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "success.html"));
};

exports.postSuccessProduct = (req, res) => {
  const { name, email } = req.body;

  res.redirect("/success");
};
