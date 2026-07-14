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
  });

  return res.json({ id: shortID });
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
      new: true,
    },
  );

  return res.redirect(entry.redirectURL);
}

module.exports = {
  generateNewShortURL,
  getshortURL,
};
