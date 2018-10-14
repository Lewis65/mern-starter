import express from "express";
import path from "path";

//Routes
import api from "./routes/api";

const app = express();
const PORT = 3000;
const publicPath = path.resolve(__dirname, "..", "..", "public");

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