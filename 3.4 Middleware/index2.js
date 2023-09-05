import express from "express";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import fs from "fs";

const app = express();
const port = 3000;
// create a write stream
let accessLogStream = fs.createWriteStream((__dirname, "access.log"), {
  flags: "a",
});

// setup the logger
app.use(morgan("tiny", { stream: accessLogStream }));

app.get("/", (req, res) => {
  res.send(dirname(fileURLToPath(import.meta.url)));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
