import { Url } from "../models/url.js";
import shortid from "shortid";

export const shortUrl = async (req, res) => {
  const { longUrl } = req.body;
  const shortCode = shortid.generate();

  // Dynamic base URL - works for both local and production
  const baseUrl = process.env.BASE_URL || "http://localhost:3000";
  const shortUrl = `${baseUrl}/${shortCode}`;

  console.log("shortURL", shortUrl);
  // save to database
  const newUrl = new Url({
    shortCode,
    longUrl,
  });
  await newUrl.save();
  console.log("Short url saved = ", newUrl);
  // res.json({
  //   message: "Url shorted successfully",
  //   success: true,
  //   data: shortUrl,
  // });
  res.render("index.ejs", { shortUrl });
};

export const getOriginalUrl = async (req, res) => {
  const shortCode = req.params.shortCode;

  //find on database
  const originalUrl = await Url.findOne({ shortCode });
  if (originalUrl) {
    res.redirect(originalUrl.longUrl);
  } else {
    res.json({ message: "Invalid shortCode", success: false });
  }
};
