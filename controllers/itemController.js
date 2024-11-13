// controllers/itemController.js
const Item = require('../models/itemModel');

// Tüm item'ları getir
exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Yeni item ekle
exports.createItem = async (req, res) => {
  const { name, description } = req.body;
  const newItem = new Item({
    name,
    description,
  });

  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
