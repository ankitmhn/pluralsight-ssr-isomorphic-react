import express from "express";
import yields from "express-yields"; //this import doesn't need to be invoked in code
import fs from "fs-extra";
import webpack from "webpack";

const PORT = process.env.PORT || 3000;
const app = express();

if (process.env.NODE_ENV === "development") {
  //can't use import inside if
  const config = require("../webpack.config.dev.babel").default;
  const compiler = webpack(config);

  app.use(
    require("webpack-dev-middleware")(compiler, {
      noInfo: true, //reduce console.logs
    })
  );

  app.use(require("webpack-hot-middleware")(compiler));
}

app.get(["/"], function* (req, res) {
  let index = yield fs.readFile("./public/index.html", "utf-8");
  res.send(index);
});

app.listen(PORT, "0.0.0.0", () => console.info(`App listening on ${PORT}`));
