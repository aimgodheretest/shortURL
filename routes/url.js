const express = require("express");
const {
  generateNewShortURL,
  getshortURL,
  getAllUrl,
} = require("../controllers/url");
const router = express.Router();

router.post("/url", generateNewShortURL);

router.get("/url", getAllUrl);
router.get("/:nanoid", getshortURL);

module.exports = router;
