const express = require("express");
const app = express();
const router = express.Router();
const PORT = 8081;

app.use(express.static("src/public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/htmls/index.html");
});

app.listen(PORT, () => {
  console.log("SERVIDOR RODANDO NA PORTA: " + PORT);
});
