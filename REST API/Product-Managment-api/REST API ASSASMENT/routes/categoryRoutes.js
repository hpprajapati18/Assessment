const express = require("express");
const router = express.Router();
const Category = require("../models/Category");
const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, async (req, res) => {
  const category = await Category.create(req.body);
  res.json(category);
});

router.get("/", async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

router.put("/:id", protect, async (req, res) => {
  const updated = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete("/:id", protect, async (req, res) => {
  await Category.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

module.exports = router;
