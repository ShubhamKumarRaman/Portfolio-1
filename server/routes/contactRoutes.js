const express = require("express");

const router = express.Router();

const { getContactLinks } = require("../controllers/contactController");

router.get("/", getContactLinks);

module.exports = router;