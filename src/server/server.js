import express from "express";
import path from "path";

//Routers
import api from "./routes/api";

const app = express();
const PORT = 3000;
const publicPath = path.resolve(__dirname, "..", "..", "public");

//HMR nonsense
const webpack = require("webpack");
const webpackConfig = require("../../webpack.config");
const compiler = webpack(webpackConfig);

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}))
app.use(require("webpack-hot-middleware")(compiler))

//Static files
app.use(express.static(publicPath));

//Routes
app.use("/api", api);

//Allow React Router to handle other routes
app.get("/*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));    
})

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
})