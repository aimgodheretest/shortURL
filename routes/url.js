const express = require("express");
const { generateNewShortURL, getshortURL } = require("../controllers/url");
const router = express.Router();

router.post("/url", generateNewShortURL);

router.get("/:nanoid", getshortURL);

module.exports = router;
