const { nanoid } = require("nanoid");
const URL = require("../models/url.js");

async function generateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required!" });

  const shortID = nanoid(8);
  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
    createdBy: req.user._id,
  });

  return res.render("home", {
    id: shortID,
  });
}

async function getshortURL(req, res) {
  const { nanoid } = req.params;

  const entry = await URL.findOneAndUpdate(
    {
      shortId: nanoid,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    },
    {
      returnDocument: "after",
    },
  );
  if (!entry) {
    return res.status(404).send("Short URL not found");
  }
  return res.redirect(entry.redirectURL);
}

async function getAllUrl(req, res) {
  const allUrls = await URL.find({});

  return res.render("home", {
    urls: allUrls,
  });
}

module.exports = {
  generateNewShortURL,
  getshortURL,
  getAllUrl,
};
