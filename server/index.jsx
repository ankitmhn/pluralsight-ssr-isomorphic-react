import express from "express";
import yields from "express-yields";
import fs from "fs-extra";

const PORT = process.env.PORT || 3000;

const app = express();

app.get(["/"], function* (req, res) {
  let index = yield fs.readFile("./public/index.html", "utf-8");
  res.send(index);
});

app.listen(PORT, "0.0.0.0", () => console.info(`App listening on ${PORT}`));
