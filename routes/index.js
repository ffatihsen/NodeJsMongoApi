const express = require("express");
const router = express.Router();

const authRoutes = require("./authRoutes");
const itemRoutes = require("./itemRoutes");



router.use("/users", authRoutes);
router.use("/item", itemRoutes);