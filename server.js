import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { shortUrl, getOriginalUrl } from "./controllers/url.js";

dotenv.config({ path: ".env.local" });

const app = express();

// Allow to extract body from incoming request
app.use(express.urlencoded());
app.use(express.json()); // allow json object from postman api also

mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb+srv://yashsolanki1622_db_user:Fguuuml5Lwcj1wsh@cluster0.iolebsr.mongodb.net/",
    { dbName: "project" }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

// Rendering ejs file
app.get("/", (req, res) => {
  res.render("index.ejs", { shortUrl: null });
});

// short url logic
app.post("/short", shortUrl);

// redirect to original url using shortCode - dynamic route
app.get("/:shortCode", getOriginalUrl);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
