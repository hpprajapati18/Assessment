const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const upload = require("../middleware/uploadMiddleware");
const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, upload.single("image"), async (req, res) => {
  const product = await Product.create({
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    image: req.file.path
  });

  res.json(product);
});

router.get("/", async (req, res) => {
  const products = await Product.find().populate("category");
  res.json(products);
});

router.put("/:id", protect, async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete("/:id", protect, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

module.exports = router;
